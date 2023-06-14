import express from 'express';

import { healthcheck } from '../controllers/healthcheck';

export default (router: express.Router) => {
  // kolejne routes z funkcjami z controllers
  router.get('/healthcheck', healthcheck);
};
