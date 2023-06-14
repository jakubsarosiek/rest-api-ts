import dotenv from 'dotenv';

dotenv.config();

const MONGO_USERNAME = process.env.MONGO_USERNAME || '';
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || '';
const MONGO_PORT = process.env.MONGO_PORT || '';
const MONGO_IP = process.env.MONGO_IP || '';
const MONGO_DB_NAME = process.env.MONGO_DB_NAME || '';

const MONGO_URI = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/${MONGO_DB_NAME}?authSource=admin`;

const SERVER_PORT = process.env.SERVER_PORT
  ? Number(process.env.SERVER_PORT)
  : 1337;

const SERVER_IP = process.env.SERVER_IP ? process.env.SERVER_IP : 'localhost';

export const config = {
  mongo: {
    username: MONGO_USERNAME,
    password: MONGO_PASSWORD,
    uri: MONGO_URI,
  },
  server: {
    port: SERVER_PORT,
    ip: SERVER_IP,
  },
};
