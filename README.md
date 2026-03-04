# HooBank - Modern Banking Landing Page

A modern, fully responsive banking landing page built with React and Tailwind CSS. Features a sleek dark UI with gradient accents, smooth animations, and mobile-first design.

## 🔗 Live Demo

**[https://project-for-bank-20f2d.web.app](https://project-for-bank-20f2d.web.app)**

## 📸 Preview

![HooBank Preview](src/assets/robot.png)

## ✨ Features

- **Fully Responsive** — Optimized for mobile, tablet, and desktop
- **Modern UI** — Dark theme with gradient accents and glassmorphism effects
- **Smooth Animations** — Slide-in sidebar, hover transitions, bounce effects
- **Component-Based** — Clean, reusable React components
- **Fast Performance** — Built with Vite for instant HMR and optimized builds

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| [React 19](https://react.dev/) | UI library |
| [Vite 6](https://vitejs.dev/) | Build tool & dev server |
| [Tailwind CSS 3.4](https://tailwindcss.com/) | Utility-first styling |
| [Firebase Hosting](https://firebase.google.com/) | Deployment |

## 📁 Project Structure

```
src/
├── assets/          # Images, icons, SVGs
├── components/      # React components
│   ├── Navbar       # Responsive nav with mobile hamburger menu
│   ├── Hero         # Hero section with CTA
│   ├── Stats        # Key metrics display
│   ├── Business     # Features cards section
│   ├── Billing      # Billing info with app store links
│   ├── CardDeal     # Card promotion section
│   ├── Testimonials # Client feedback carousel
│   ├── Clients      # Partner logos bar
│   ├── CTA          # Call-to-action banner
│   └── Footer       # Links, social media, copyright
├── constants/       # Static data (nav links, features, etc.)
├── style.js         # Shared Tailwind class presets
├── App.jsx          # Root layout component
└── index.css        # Global styles & custom gradients
```

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/zszoshosha/hoo-bank.git
cd hoo-bank

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Deploy to Firebase

```bash
npm run build
firebase deploy --only hosting
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
