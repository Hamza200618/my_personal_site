# SK — AI & Full-Stack Developer Portfolio

A premium personal AI portfolio for **Syed Hamza Kamal** — AI & Full-Stack Developer and Co-Founder of NexusAI.

## 🚀 Tech Stack

- **React 19** + **TypeScript**
- **Vite** — fast build tool
- **Tailwind CSS** — utility-first styling
- **Framer Motion** — animations
- **React Router** — routing
- **React Helmet** — SEO
- **Groq API** — AI assistant (llama-3.3-70b-versatile)
- **Lucide React** — icons
- **React Markdown** — AI response rendering

## 📁 Project Structure

```
src/
├── components/
│   ├── assistant/       — Hamza AI chat assistant
│   ├── common/          — reusable UI primitives
│   ├── layout/          — Navbar, Footer, MainLayout, etc.
│   └── sections/        — page sections (hero, about, products, etc.)
├── constants/           — site-wide constants
├── context/             — React contexts (theme)
├── data/                — content data files
├── hooks/               — custom hooks
├── knowledge/           — AI assistant knowledge base (JSON)
├── pages/               — route pages
├── routes/              — router configuration
├── services/            — API services (Groq, etc.)
├── styles/              — global CSS
├── types/               — TypeScript types
└── utils/               — utility functions
```

## 🔧 Environment Variables

Create a `.env` file in the project root:

```env
VITE_GROQ_API_KEY=your_groq_api_key_here
```

| Variable | Required | Description |
|----------|----------|-------------|
| `VITE_GROQ_API_KEY` | Yes (for AI) | Groq API key for the Hamza AI assistant |

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run ESLint
npm run lint

# Format code
npm run format
```

## 🌐 Deployment

### Vercel

1. Push to GitHub
2. Import project in Vercel
3. Add `VITE_GROQ_API_KEY` to environment variables
4. Deploy

### Netlify

1. Build command: `npm run build`
2. Publish directory: `dist`
3. Add `VITE_GROQ_API_KEY` to environment variables

### GitHub Pages

1. Update `vite.config.ts` with `base: '/<repo-name>/'`
2. Build and deploy the `dist` folder

## 🎨 Customization

- **Content**: Edit files in `src/data/` and `src/knowledge/`
- **Theme**: Edit CSS variables in `src/styles/global.css`
- **Branding**: Edit `src/constants/index.ts`
- **AI Assistant**: Edit `src/knowledge/*.json` and `src/services/assistant/prompt.ts`

## 📝 Maintenance

- Update resume: replace file in `public/personal/`
- Update certificates: add images to `public/assets/` and update `src/knowledge/certifications.json`
- Update products: edit `src/data/products.ts`
- Update AI knowledge: edit JSON files in `src/knowledge/`

## 🔒 Security

- API keys are stored in `.env` (never committed)
- `.gitignore` protects environment files
- Markdown is sanitized via `react-markdown`
- External links use `rel="noopener noreferrer"`

## 📄 License

© 2026 Syed Hamza Kamal. All rights reserved.