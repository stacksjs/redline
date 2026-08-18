/**
 * Deployment configuration for redlinemarketingagency.com.
 *
 * Topology: **visitor → Cloudflare edge → the Stacks Hetzner box (rpx gateway)**.
 *
 * The site is a static `vite-ssg` build. It does not get its own server — it
 * rides the box the `stacks` project already provisions and manages
 * (`cloud.attachTo`), shipping only its own files and its own gateway routes.
 * Cloudflare's proxy sits in front for edge caching, TLS and DDoS protection.
 *
 * @see https://ts-cloud.stacksjs.com/features/cloudflare
 */
/*
 * Untyped on purpose. The `CloudConfig` type lives in `@stacksjs/ts-cloud`,
 * which this project does not install — see `scripts/deploy.ts` for why. The
 * config is still validated: the CLI loads it through ts-cloud's own validator,
 * so `bun run deploy:dry` reports a bad shape in about a second and changes
 * nothing.
 */
const config = {
  project: {
    name: 'redline',
    slug: 'redline',
    // AWS default region. Unused here — nothing in this config touches AWS —
    // but `ProjectConfig` requires it.
    region: 'us-east-1',
  },

  /**
   * Ride the Stacks box instead of provisioning one.
   *
   * `attachTo` targets the owner project's `<slug>-<environment>-app` server by
   * its Hetzner labels, ships only this project's sites, and writes an additive
   * rpx fragment (`/etc/rpx/sites.d/redline.json`) alongside the owner's. It
   * never touches the box's lifecycle, firewall, or any other tenant — Stacks
   * owns the machine, redline is a guest on it.
   *
   * Needs read access to the same Hetzner project: `HCLOUD_TOKEN`.
   */
  cloud: {
    provider: 'hetzner',
    attachTo: 'stacks',
  },

  mode: 'server',

  environments: {
    production: {
      type: 'production',
      deployBranch: 'main',
      variables: {
        NODE_ENV: 'production',
      },
    },
  },

  infrastructure: {
    dns: {
      provider: 'cloudflare',
      domain: 'redlinemarketingagency.com',
    },

    compute: {
      mode: 'server',

      /**
       * The box's gateway. Stacks provisions and owns rpx; this block is what
       * lets redline's routes and certificates join it.
       *
       * `onDemandTls` puts this domain into the gateway's allowed suffixes so
       * tlsx issues a real Let's Encrypt certificate for it. That certificate is
       * what makes Cloudflare's `Full (strict)` origin hop verifiable — see the
       * ordering note on `cdn` below.
       */
      proxy: {
        engine: 'rpx',
        onDemandTls: true,
        onDemandTlsEmail: 'hello@stacksjs.com',

        /**
         * Cloudflare's proxy CDN.
         *
         * Unlike CloudFront there is no separate origin hostname: a proxied
         * ("orange cloud") record IS the CDN, and Cloudflare forwards to the
         * address stored in the record itself. So the apex fronts its own
         * origin without looping, and publishing an `origin.` name would only
         * hand clients a documented way around the edge.
         *
         * `frontedHosts` is omitted deliberately — it then defaults to every
         * hostname the gateway answers for, which here is the apex plus the
         * `www.` variant the gateway synthesizes.
         *
         * On the first deploy the records go up DNS-only, the gateway issues
         * the certificate over ACME HTTP-01 (which needs the name to reach the
         * box directly), and the CDN step then proxies them once it has probed
         * that the origin serves a certificate it can verify. That ordering is
         * automatic; it is only worth knowing about if a deploy reports a host
         * as "DNS-only", which means re-running it once the certificate lands.
         */
        cdn: {
          provider: 'cloudflare',
          cloudflare: {
            zoneId: '05de3495b3f99e5219710287d191e06b',
            accountId: '6ec9332b06d4795b12d2d08a9e5c75c8',

            settings: {
              // The box holds a real Let's Encrypt certificate, so there is no
              // reason to accept an unverified origin. `flexible` would also
              // loop here: the gateway redirects plain HTTP to HTTPS.
              ssl: 'strict',
              alwaysUseHttps: true,
              automaticHttpsRewrites: true,
              minTlsVersion: '1.2',
              tls13: true,
              brotli: true,
              http3: true,
              earlyHints: true,
              alwaysOnline: true,
              hsts: {
                enabled: true,
                maxAge: 31_536_000,
                includeSubdomains: true,
                // Preload is intentionally off: it is effectively irreversible
                // on a human timescale and should be a deliberate decision.
                preload: false,
              },
            },

            cache: {
              // Vite fingerprints its build output, so a given asset URL's
              // bytes never change and the edge can hold them for a long time.
              assetEdgeTtl: 2_592_000, // 30 days
              assetBrowserTtl: 31_536_000, // 1 year
              // HTML carries the references to those fingerprinted files, so it
              // gets a short edge TTL and revalidates in the browser — the
              // deploy's purge is what actually makes a release visible.
              documentEdgeTtl: 3_600,
              documentBrowserTtl: 0,
            },
          },

          /**
           * Origin lockdown (optional, off by default).
           *
           * Setting a secret makes Cloudflare stamp it on every request it
           * forwards, and makes the gateway reject requests to these hosts that
           * arrive without it — so someone who discovers the box's IP cannot
           * bypass the edge.
           *
           * Left off for now because rpx enforces ONE secret per gateway and
           * this box is shared with Stacks: turning it on here makes redline's
           * secret the gateway-wide one. That is safe while Stacks declares no
           * CDN secret of its own (only the hosts listed in a fragment are
           * guarded), but it is a coupling worth making deliberately rather
           * than inheriting from a first deploy.
           */
          // secret: process.env.CLOUDFLARE_ORIGIN_SECRET,
        },
      },
    },
  },

  sites: {
    /**
     * The marketing site.
     *
     * No `start`/`port` ⇒ a `server-static` site: `build` runs locally, the
     * built `root` is shipped to `/var/www/redline-main` on the box, and the
     * gateway's file server serves it.
     */
    main: {
      deploy: 'server',
      domain: 'redlinemarketingagency.com',
      root: 'dist',
      build: 'bun run build',

      // vite-ssg pre-renders each route to a flat file (`dist/about.html`, not
      // `dist/about/index.html`), so extensionless URLs resolve by appending
      // `.html` rather than `/index.html`.
      pathRewriteStyle: 'flat',

      // The router has a catch-all page (`src/pages/[...all].vue`) that renders
      // the 404. Serving `index.html` for unmatched paths is what lets it run,
      // and mirrors the SPA fallback the Netlify config used.
      spa: true,
    },
  },
}

export default config
