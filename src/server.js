import express from 'express';
import koaStatic from 'koa-static';
import path from 'path';
import appServer from './app-server.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));
app.get('/', appServer);

app.listen(port, () => {
  console.log({ port, env: process.env.NODE_ENV, pid: process.pid }, 'Server is listening');
});
