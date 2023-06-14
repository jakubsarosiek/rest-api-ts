//console.log("hello world")

import express from 'express';
import { config } from './config/config';
import connect from './utils/connect';
import logger from './utils/logger';
import router from './router';
import { urlencoded } from 'body-parser';

const port = config.server.port;
const ip = config.server.ip;

const app = express();

app.listen(port, async () => {
  logger.info(`App is running at http://${ip}:${port}`);
  await connect();
  // routes(app);
});
app.use(urlencoded({ extended: true }));
app.use(express.json());
app.use('/', router());
