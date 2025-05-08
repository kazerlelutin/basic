/** @jsxImportSource react **/
import { serve } from "bun";
import { renderToReadableStream } from "react-dom/server";
import App from "./App";
import { apiRoutes } from "./api/routes";

if (import.meta.env.DEV) {
  await Bun.build({
    entrypoints: ['./src/hydrate.tsx'],
    outdir: './public',
    minify: true,
    publicPath: '/public',
    naming: 'hydrate.mjs',
    format: 'esm',

  });
}

const server = serve({
  port: import.meta.env.PORT || 3000,
  development: {
    hmr: true,
    console: true,
  },
  websocket: {
    message(ws) {
      // Publish to all "chat" subscribers
      server.publish("chat", "Hello everyone!");
    },
  },

  routes: {
    ...apiRoutes,

    '/public/*': (req) => {
      const cleanUrl = req.url.split('/public/')[1];
      const publicDir = Bun.file('./public/' + cleanUrl);
      return new Response(publicDir.stream());
    },
    '/*': async (req) => {
      // For SSR
      const url = new URL(req.url);
      const stream = await renderToReadableStream(
        <App url={url} />,
        {
          bootstrapModules: ['/public/hydrate.mjs'],
          progressiveChunkSize: 10000,
        }
      );

      return new Response(stream, {
        headers: { 'Content-Type': 'text/html; charset=utf-8' },
      });
    }
  },
});
