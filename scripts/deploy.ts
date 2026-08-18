#!/usr/bin/env bun
/**
 * Run the ts-cloud CLI from a checkout of the library.
 *
 * ts-cloud is deliberately NOT a dependency of this project. The version that
 * deploys this site is the working tree in `~/Code/Libraries/ts-cloud`, and the
 * two ways to express that in `package.json` both fail:
 *
 *  - `link:@stacksjs/ts-cloud` needs a `bun link` registration that exists only
 *    on the machine that ran it, so `bun install` dies everywhere else — which
 *    took out this repo's lint, typecheck and test jobs;
 *  - `file:../../Libraries/ts-cloud/packages/ts-cloud` cannot resolve that
 *    package's own `workspace:*` dependencies from outside its monorepo.
 *
 * So the CLI is located at run time instead. Bun executes the TypeScript entry
 * directly, so there is no build step: whatever is in the checkout is what runs.
 *
 * Resolution order:
 *   1. `TS_CLOUD_PATH` — an explicit checkout (CI sets this).
 *   2. `../../Libraries/ts-cloud` relative to this repo — the standard layout.
 *   3. `~/Code/Libraries/ts-cloud` — the same place, for a repo cloned elsewhere.
 */
import { spawnSync } from 'node:child_process'
import { existsSync } from 'node:fs'
import { homedir } from 'node:os'
import { join, resolve } from 'node:path'
import process from 'node:process'
import { fileURLToPath } from 'node:url'

const CLI_ENTRY = join('packages', 'ts-cloud', 'bin', 'cli.ts')

const candidates = [
  process.env.TS_CLOUD_PATH,
  resolve(fileURLToPath(new URL('.', import.meta.url)), '..', '..', '..', 'Libraries', 'ts-cloud'),
  join(homedir(), 'Code', 'Libraries', 'ts-cloud'),
].filter((path): path is string => Boolean(path))

const checkout = candidates.find(path => existsSync(join(path, CLI_ENTRY)))

if (!checkout) {
  console.error('Could not find a ts-cloud checkout. Looked in:')
  for (const path of candidates) console.error(`  - ${join(path, CLI_ENTRY)}`)
  console.error('\nClone https://github.com/stacksjs/ts-cloud and either place it at')
  console.error('~/Code/Libraries/ts-cloud or point TS_CLOUD_PATH at it.')
  process.exit(1)
}

// The CLI reads its dependencies from the checkout's own node_modules, so a
// fresh clone needs `bun install` there once. Say so rather than letting the
// failure surface as an unresolved import from someone else's directory.
if (!existsSync(join(checkout, 'node_modules'))) {
  console.error(`ts-cloud checkout at ${checkout} has no node_modules.`)
  console.error(`Run: cd ${checkout} && bun install`)
  process.exit(1)
}

const result = spawnSync('bun', [join(checkout, CLI_ENTRY), ...process.argv.slice(2)], {
  stdio: 'inherit',
  env: process.env,
})

process.exit(result.status ?? 1)
