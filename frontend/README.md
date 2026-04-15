# CarDekho Frontend

A React-based frontend for the CarDekho car recommendation system.

## Setup & Installation

### Prerequisites

- Node.js (v18+)
- npm or yarn

### Installation

1. Navigate to the frontend directory:

```bash
cd frontend
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

The app will open automatically at `http://localhost:3000`

## Build for Production

```bash
npm run build
```

Output will be in the `dist/` folder.

## Features

- **Multi-step form** for car preferences
- **Budget slider** with quick presets
- **Car type & fuel selection** with optional "any" filter
- **Priority ranking** with visual weight preview
- **Real-time API integration** with the backend
- **Result cards** showing top 3 recommendations with scores and reasons
- **Responsive design** for mobile and desktop

## Architecture

```
frontend/
├── src/
│   ├── components/
│   │   ├── StepBudget.jsx
│   │   ├── StepType.jsx
│   │   ├── StepFuel.jsx
│   │   ├── StepPriority.jsx
│   │   └── ResultsPage.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── components.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── vite.config.js
└── package.json
```

## API Configuration

Update the backend URL in `src/App.jsx` if needed:

```javascript
const response = await fetch(
  "https://cardekho-backend.onrender.com/recommend",
  {
    // ...
  },
);
```

## Environment Variables

Currently none required. Create a `.env` file if needed for future configuration.

## Deployment

### Vercel (Recommended)

```bash
vercel
```

### Netlify

```bash
netlify deploy --prod --dir=dist
```

### Manual Build & Deploy

```bash
npm run build
# Upload the dist/ folder to your hosting
```
