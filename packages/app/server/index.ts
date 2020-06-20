import { createServer } from 'http';
import { parse } from 'url';
import next from 'next';
import logger from '@project/utils/logger';

const port = parseInt(process.env.PORT || '3000', 10);
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url!, true);
    const { pathname, query } = parsedUrl;

    if (pathname === '/') {
      app.render(req, res, '/', query);
    } else {
      handle(req, res, parsedUrl);
    }
  }).listen(port);

  logger(
    `> Server listening at http://localhost:${port} as ${
      dev ? 'development' : process.env.NODE_ENV
    }`,
  );
});
