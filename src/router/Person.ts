import express from 'express';

import controller from '../controllers/Person';

export default (router: express.Router) => {
  // kolejne routes z funkcjami z controllers
  router.post('/people', controller.createPerson);
  router.get('/people/:personId', controller.readPerson);
  router.get('/people', controller.readAll);
  router.patch('/people/:personId', controller.updatePerson);
  router.delete('/people/:personId', controller.deletePerson);
};
