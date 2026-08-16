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
├── services/            — API services (client-side /api/chat wrapper)
├── styles/              — global CSS
├── types/               — TypeScript types
└── utils/               — utility functions
api/
├── chat.js              — Vercel serverless function for the AI assistant
└── lib/
    ├── systemPrompt.js  — Hamza AI system prompt (server-side only)
    └── buildContext.js  — builds the knowledge context from src/knowledge
server/
└── chat.mjs             — local dev API server (wraps api/chat.js)
scripts/
└── dev.mjs              — starts API + Vite together for `npm run dev`
```

## 🔧 Environment Variables

The Groq API key is **server-side only**. It is read by the serverless
function (`api/chat.js`) via `process.env.GROQ_API_KEY` and is **never**
bundled into the browser. Do NOT prefix it with `VITE_`.

Create a `.env` file in the project root (copy from `.env.example`):

```env
GROQ_API_KEY=your_groq_api_key_here
```

| Variable | Required | Description |
|----------|----------|-------------|
| `GROQ_API_KEY` | Yes (for AI) | Groq API key, read server-side by `api/chat.js` |
| `GROQ_MODEL` | No | Model override (defaults to `llama-3.3-70b-versatile`) |

## 🤖 Hamza AI Architecture

```
React/Vite frontend
        ↓  POST /api/chat  (messages only — no API key)
Vercel Serverless Function (api/chat.js)
        ↓  process.env.GROQ_API_KEY
Groq API (streaming SSE)
        ↓  response
React Chat UI
```

- The frontend never imports the API key and never talks to `api.groq.com`.
- The system prompt and knowledge context are injected server-side.
- Local dev: `npm run dev` starts the Vite dev server plus a local API server;
  Vite proxies `/api` to `http://localhost:3001`.

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# One-time: create your local env file, then add your real Groq key
copy .env.example .env        # Windows
# cp .env.example .env        # macOS/Linux

# Start the dev server (Vite + local /api/chat)
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

### Vercel (recommended)

1. Push to GitHub
2. Import project in Vercel
3. In **Project → Settings → Environment Variables**, add:
   - Name: `GROQ_API_KEY`
   - Value: your Groq key
   - Apply to **Production**, **Preview**, and **Development**
4. Deploy (Vercel automatically detects the `api/` directory as serverless functions)

### Netlify

Netlify also supports serverless functions, but this project's function
currently targets the Vercel Node runtime. For Netlify, add the same
`GROQ_API_KEY` environment variable and adapt `api/chat.js` to a Netlify
function format, or host on Vercel.

### GitHub Pages

Static hosting only — the `/api/chat` function cannot run there. Deploy the
frontend to GitHub Pages and point the AI assistant at a hosted `/api/chat`
endpoint (e.g. a separate Vercel/Netlify function) if needed.

## 🎨 Customization

- **Content**: Edit files in `src/data/` and `src/knowledge/`
- **Theme**: Edit CSS variables in `src/styles/global.css`
- **Branding**: Edit `src/constants/index.ts`
- **AI Assistant**: Edit the knowledge base in `src/knowledge/*.json` and the
  system prompt in `api/lib/systemPrompt.js`

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