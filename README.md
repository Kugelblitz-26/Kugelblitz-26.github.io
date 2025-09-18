# Portfolio Website

A modern portfolio website built with React, TypeScript, and Three.js, featuring a starry background and interactive components.

## Technologies Used

- **React 18** with TypeScript for type safety
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **shadcn/ui** for reusable UI components
- **Three.js** for 3D graphics and animations
- **Framer Motion** for smooth animations
- **Lucide React** for icons

## Features

- ✨ Animated star background
- 🎨 Modern UI with dark/light theme support
- 📱 Fully responsive design
- 🚀 Fast loading with Vite
- 💫 Smooth animations and transitions
- 🎯 Interactive navigation

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Kugelblitz-26/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:8080`

## Deployment to GitHub Pages

1. Build the project:
```bash
npm run build
```

2. Deploy to GitHub Pages:
```bash
npm run deploy
```

## Project Structure

```
src/
├── components/
│   ├── ui/           # Reusable UI components
│   ├── sections/     # Page sections
│   └── Navigation.tsx
├── pages/
│   └── Index.tsx     # Main page
├── lib/
│   └── utils.ts      # Utility functions
└── styles/
    └── globals.css   # Global styles
```

## Customization

### Updating Content

- Edit personal information in `src/components/sections/`
- Modify the hero section in `src/components/ui/hero-sparkles.tsx`
- Update project information in `src/components/sections/Projects.tsx`

### Styling

- Primary colors and themes are defined in `src/index.css`
- Component-specific styles use Tailwind CSS classes
- Custom animations are in `src/components/ui/`

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

Feel free to reach out for any questions or collaboration opportunities!