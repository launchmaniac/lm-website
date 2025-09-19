# Launch Maniac Website

A professional website for Launch Maniac, a SaaS company providing CRM-based tools that increase sales performance and outcomes for small and medium businesses.

![Launch Maniac Website](https://github.com/launchmaniac/lm-website/raw/main/src/assets/LMHorizontalYW_Transparent.png)

## 🚀 Live Demo

Visit the website: [Launch Maniac](https://launchmaniac.com)

## 📋 Overview

This website showcases Launch Maniac's comprehensive suite of CRM automation tools designed to boost sales opportunities and outcomes. Built with modern web technologies and featuring a professional dark theme design that reflects the company's AI-first approach.

## 🛠 Technology Stack

- **React 19** - Modern React with hooks and functional components
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework with custom brand colors
- **shadcn/ui** - High-quality, accessible UI components
- **Lucide React** - Beautiful icon library
- **Framer Motion** - Smooth animations and transitions

## 🎨 Design Features

- **Dark Theme Design** - Professional dark mode with Launch Maniac's brand colors
- **Responsive Layout** - Optimized for desktop, tablet, and mobile devices
- **Brand Consistency** - Uses official Launch Maniac colors and typography
- **Modern Animations** - Smooth hover effects and micro-interactions
- **Accessibility** - WCAG AA+ compliant design

## 🏢 Products Featured

### ReviewOS
**Start Your Reputation Management Agency**
- Automated reputation management platform
- AI-powered response generation and automation
- Comprehensive client reporting dashboards
- White-label agency-ready tools and workflows

### MortgageOS
**Supercharge Your Mortgage Business**
- Specialized CRM tools for mortgage loan officers
- Advanced lead management and scoring
- Automated pipeline tracking and follow-ups
- Built-in compliance tools and documentation

### GoHighLevel Extensions
**Extend GoHighLevel's Power**
- Custom applications for enhanced functionality
- Seamless native GoHighLevel integration
- Advanced automation and trigger systems
- Extended reporting and analytics capabilities

## 🎨 Brand Colors

```css
/* Primary Colors */
--brand-primary-700: #6D28D9;    /* Violet */
--brand-primary-600: #7C3AED;
--brand-secondary-700: #1D4ED8;  /* Azure */
--brand-accent-amber: #FCB02C;   /* Launch Amber */

/* Background Colors */
--bg-page: #0B0F1A;              /* Graphite-950 */
--bg-app: #0F1115;               /* Graphite-900 */

/* Text Colors */
--text-primary: #FFFFFF;
--text-secondary: #94A3B8;       /* Slate-400 */
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/launchmaniac/lm-website.git
   cd lm-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   pnpm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

## 📦 Build & Deploy

### Build for Production
```bash
npm run build
# or
pnpm run build
```

### Preview Production Build
```bash
npm run preview
# or
pnpm run preview
```

### Deploy
The built files in the `dist/` directory can be deployed to any static hosting service:
- **Netlify** - Drag and drop the `dist` folder
- **Vercel** - Connect your GitHub repository
- **GitHub Pages** - Use GitHub Actions for automatic deployment
- **AWS S3 + CloudFront** - Upload `dist` contents to S3 bucket

## 📁 Project Structure

```
lm-website/
├── public/
│   └── favicon.ico
├── src/
│   ├── assets/
│   │   ├── LMHorizontalYW_Transparent.png  # Main logo
│   │   └── LM_600x600px.png               # Square logo
│   ├── components/
│   │   └── ui/                            # shadcn/ui components
│   ├── hooks/                             # Custom React hooks
│   ├── lib/                               # Utility functions
│   ├── App.jsx                            # Main application component
│   ├── App.css                            # Custom styles and brand colors
│   ├── main.jsx                           # Application entry point
│   └── index.css                          # Global styles
├── package.json
├── vite.config.js
└── README.md
```

## 🎯 Key Features

- **Hero Section** - Compelling value proposition with gradient background
- **Product Showcase** - Detailed presentation of all three main products
- **Custom Development** - Information about bespoke software solutions
- **Company Benefits** - Why choose Launch Maniac section
- **Contact Integration** - Multiple contact methods and CTAs
- **Statistics Display** - Impressive business metrics
- **Responsive Design** - Mobile-first approach

## 🔧 Customization

### Updating Brand Colors
Edit the CSS custom properties in `src/App.css`:

```css
:root {
  --brand-primary-700: #6D28D9;
  --brand-accent-amber: #FCB02C;
  /* Add your custom colors */
}
```

### Adding New Sections
The website is built with modular React components. Add new sections by:

1. Creating a new component in `src/components/`
2. Importing and using it in `src/App.jsx`
3. Following the existing design patterns

### Updating Content
Main content is located in `src/App.jsx`. Update the data arrays for:
- `products` - Product information
- `benefits` - Company benefits
- `stats` - Business statistics

## 📞 Contact Information

- **Email**: hello@launchmaniac.com
- **Phone**: +1 (555) 123-4567
- **Website**: [launchmaniac.com](https://launchmaniac.com)

## 📄 License

© 2025 Launch Maniac. All rights reserved.

## 🤝 Contributing

This is a private repository for Launch Maniac's official website. For questions or suggestions, please contact the development team.

---

**Built with ❤️ by the Launch Maniac team**

*Modular, AI-first automation for SMBs—clear, competent, fast.*
