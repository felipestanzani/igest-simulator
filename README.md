# React Boilerplate

A modern React boilerplate powered by Vite and TypeScript. This template provides a clean, minimal starting point for building scalable React applications with best practices and a simple, organized file structure.

## Features

- ⚡️ Fast development with [Vite](https://vitejs.dev/)
- 🛡️ Type safety with [TypeScript](https://www.typescriptlang.org/)
- 📦 Package management with [pnpm](https://pnpm.io/) (compatible with npm/yarn)
- ✨ Pre-configured ESLint + Prettier Molindo for code quality
- 💅 Tailwind styles
- 🧩 Shadcn/ui components

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [pnpm](https://pnpm.io/) (or use npm/yarn)

### Installation

```bash
pnpm install
# or
npm install
# or
yarn install
```

### Development

Start the development server:

```bash
pnpm dev
# or
npm run dev
# or
yarn dev
```

Open [http://localhost:5173](http://localhost:5173) to view the app.

### Build

To create a production build:

```bash
pnpm build
# or
npm run build
# or
yarn build
```

### Preview

To preview the production build locally:

```bash
pnpm preview
# or
npm run preview
# or
yarn preview
```

## Project Structure

```
react-boilerplate/
├── public/                # Static assets
│   └── vite.svg
├── src/
│   ├── assets/            # Images and static resources
│   │   └── react.svg
│   ├── components/        # Reusable React components
│   │   └── ui/            # UI primitives (Button, Card, Input, etc.)
│   ├── lib/               # Utility functions
│   │   └── utils.ts
│   ├── App.tsx            # Main app component
│   ├── index.css          # Global styles
│   ├── main.tsx           # Entry point
│   └── vite-env.d.ts      # Vite environment types
├── index.html             # HTML template
├── package.json           # Project metadata and scripts
├── tsconfig*.json         # TypeScript configuration
├── vite.config.ts         # Vite configuration
├── eslint.config.mjs      # ESLint configuration
└── README.md              # Project documentation
```

## Scripts

Common scripts available in `package.json`:

- `dev` – Start development server
- `build` – Build for production
- `preview` – Preview production build
- `lint` – Run ESLint

## Contributing

Feel free to fork this repo and submit pull requests. Issues and suggestions are welcome!

## License

[MIT](LICENSE) © Felipe Cesar Stanzani Fonseca
