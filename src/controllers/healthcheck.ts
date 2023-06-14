import express from 'express';

export const healthcheck = async (
  req: express.Request,
  res: express.Response,
) => {
  return res.sendStatus(200);
};
