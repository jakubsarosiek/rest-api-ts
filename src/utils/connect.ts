import mongoose from 'mongoose';
import { config } from '../config/config';
import logger from './logger';

async function connect() {
  const dbUri = config.mongo.uri;

  try {
    await mongoose.connect(dbUri);
    logger.info('DB Connected');
  } catch (error) {
    logger.error('Could not connect to db');
    logger.info(dbUri);
    logger.error(error);
    process.exit(1);
  }
}

export default connect;
