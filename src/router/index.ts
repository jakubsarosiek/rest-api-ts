import express from 'express';
import healthcheck from './healthcheck';
import people from './Person';

const router = express.Router();

// export default (something: express.Router) => {
export default (): express.Router => {
  // kolejne routes from ./router
  healthcheck(router);
  people(router);
  return router;
};
