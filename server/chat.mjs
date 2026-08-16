import { createServer } from 'node:http';
import handler from '../api/chat.js';

/**
 * Local development API server (NOT used in production).
 * Wraps the same Vercel serverless function (api/chat.js) so that
 * `npm run dev` can serve POST /api/chat without the Vercel CLI.
 */

const PORT = process.env.PORT ? Number(process.env.PORT) : 3001;

const server = createServer(async (req, res) => {
  const url = (req.url ?? '').split('?')[0];

  if (req.method === 'OPTIONS') {
    res.statusCode = 204;
    res.end();
    return;
  }

  if (url === '/api/chat') {
    try {
      await handler(req, res);
    } catch (error) {
      if (!res.headersSent) {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'application/json; charset=utf-8');
        res.end(JSON.stringify({ error: 'Unexpected server error. Please try again.' }));
      } else if (!res.writableEnded) {
        res.end();
      }
      console.error('[api/chat] unexpected error:', error);
    }
    return;
  }

  res.statusCode = 404;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.end(JSON.stringify({ error: 'Not found' }));
});

server.listen(PORT, () => {
  console.log(`[api] local chat API listening on http://localhost:${PORT} (POST /api/chat)`);
});