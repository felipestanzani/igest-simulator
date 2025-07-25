# IGEST Simulator

A React single-page application (SPA) to help the Brazilian labor justice system simulate the IGEST index. The app allows users to select a court, adjust indicator values, and instantly see how these changes affect the IGEST value for that court.

## Project Purpose

The IGEST Simulator is designed to:

- Provide an interactive tool for simulating the IGEST (Índice de Gestão do Tribunal) index.
- Allow users to explore how changes in various performance indicators impact the overall IGEST score for a court.
- Support decision-making and analysis for court management and improvement.

## Features

- ⚖️ Select a court and view its current IGEST value and indicators
- 🎚️ Adjust indicator values using sliders or numeric inputs
- 🔄 Instantly see the recalculated (simulated) IGEST value as you change indicators
- 📊 Visual feedback with color-coded quartiles for IGEST and indicators
- 📝 View indicator weights and their impact on the IGEST
- 💅 Modern UI with Tailwind CSS and shadcn/ui components
- ⚡️ Fast development with Vite and TypeScript

## Current Implementation Status

- [x] Court selection and indicator loading from data files
- [x] Real-time IGEST simulation as indicators are adjusted
- [x] Color-coded display for IGEST and indicators based on quartiles
- [x] User interface for adjusting indicator values (slider and input)
- [x] Data-driven: courts, indicators, definitions, and quartiles loaded from JSON

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
igest-simulator/
├── public/                # Static assets
├── src/
│   ├── assets/            # Images and static resources
│   ├── components/        # React components (IGEST, indicators, UI)
│   ├── data/              # JSON data for courts, indicators, etc.
│   ├── hooks/             # Custom React hooks for data and logic
│   ├── lib/               # Utility functions
│   ├── types/             # TypeScript types and models
│   ├── App.tsx            # Main app component
│   ├── index.css          # Global styles
│   └── main.tsx           # Entry point
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

Contributions, issues, and suggestions are welcome! Feel free to fork this repo and submit pull requests.

## License

[MIT](LICENSE) © Felipe Cesar Stanzani Fonseca
