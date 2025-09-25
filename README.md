# Redline Marketing Website

<p align='center'>
  <img src='public/logo.png' alt='Redline Marketing Logo' width='200'/>
</p>

<p align='center'>
  <strong>Fuel your growth with high-performance marketing</strong><br>
  Built for local businesses and e-commerce brands
</p>

<br>

## About Redline Marketing

Redline Marketing is a growth-focused marketing agency that specializes in helping local businesses and emerging e-commerce brands break through the noise and drive real, measurable growth. We're not just another agency throwing around buzzwords and promising overnight success – we're a results-focused team that treats your business like our own.

### What We Do

- **Google Ads & Paid Media** - Reach high-intent customers with campaigns that convert
- **Social Media Marketing** - From organic growth to paid strategies across all platforms
- **SEO & Local SEO** - Get found where it matters, in search results and in your neighborhood
- **Website Strategy & CRO** - Build websites that drive results and conversions
- **Email Marketing & Retention** - Turn one-time buyers into loyal customers
- **Marketing Automation** - Scale your marketing efforts with smart automation
- **Web Development** - Build powerful web applications and digital experiences
- **Brand Strategy & Design** - Create compelling brand identities that resonate
- **Google My Business & Yelp Management** - Dominate local search results

### Our Approach

We start with understanding your business, goals, and current challenges through comprehensive analysis. Then we create a tailored marketing strategy designed specifically for your business, execute it with precision, and continuously monitor performance to make data-driven optimizations.

<br>

## Technology Stack

This website is built using modern web technologies to ensure fast performance, great developer experience, and maintainability.

### Core Technologies

- **Vue 3** - Progressive JavaScript framework with Composition API
- **TypeScript** - Type-safe JavaScript development
- **Vite** - Lightning-fast build tool and development server
- **UnoCSS** - Instant on-demand atomic CSS engine for styling
- **Pinia** - Intuitive state management for Vue

### Key Features

- ⚡️ **Fast Development** - Hot module replacement and instant builds
- 🗂️ **File-based Routing** - Automatic route generation from file structure
- 📦 **Component Auto-importing** - Components are automatically imported
- 🎨 **Modern Styling** - UnoCSS for utility-first CSS with dark mode support
- 🌍 **Internationalization** - Multi-language support with Vue I18n
- 📱 **PWA Ready** - Progressive Web App capabilities
- 🖨️ **Static Site Generation** - Fast, SEO-friendly static site generation
- 🔍 **SEO Optimized** - Built-in SEO features and meta tag management

### Development Tools

- **ESLint** - Code linting and formatting
- **Vitest** - Unit testing framework
- **Cypress** - End-to-end testing
- **pnpm** - Fast, efficient package manager
- **Git Hooks** - Automated code quality checks

## Getting Started

### Prerequisites

Before you begin, make sure you have the following installed:
- **Node.js** (version 16 or higher)
- **pnpm** (recommended) or npm

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd redline
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or if you prefer npm
   npm install
   ```

3. **Start the development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. **Open your browser**
   Visit `http://localhost:3333` to see the website in action.

### Available Scripts

- `pnpm dev` - Start the development server
- `pnpm build` - Build the website for production
- `pnpm preview` - Preview the production build locally
- `pnpm lint` - Run ESLint to check code quality
- `pnpm test` - Run unit tests
- `pnpm test:e2e` - Run end-to-end tests with Cypress

### Project Structure

```text
src/
├── components/          # Reusable Vue components
├── layouts/            # Page layouts
├── pages/              # File-based routing pages
├── stores/             # Pinia state management
├── styles/             # Global styles and CSS
├── locales/            # Internationalization files
└── main.ts            # Application entry point
```

### Building for Production

To create a production build:

```bash
pnpm build
```

The built files will be in the `dist/` directory, ready to be deployed to any static hosting service.

## Deployment

### Netlify (Recommended)

This website is optimized for deployment on Netlify with zero configuration:

1. Connect your GitHub repository to Netlify
2. Set the build command to `pnpm build`
3. Set the publish directory to `dist`
4. Deploy!

The website includes:
- Automatic builds on git push
- Form handling capabilities
- Redirect rules for SEO
- Headers for security and performance

### Other Hosting Options

The built website is a static site that can be deployed to any hosting service:

- **Vercel** - Excellent for Vue.js applications
- **GitHub Pages** - Free hosting for open source projects
- **AWS S3 + CloudFront** - Scalable and cost-effective
- **Firebase Hosting** - Google's hosting platform

### Docker Deployment

A Dockerfile is included for containerized deployment:

```bash
# Build the Docker image
docker build -t redline-website .

# Run the container
docker run -p 80:80 redline-website
```

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Contact & Support

- **Website**: [Visit our website](https://redline-marketing.com)
- **Email**: [Contact us](mailto:hello@redline-marketing.com)
- **Phone**: Call us for immediate assistance

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
