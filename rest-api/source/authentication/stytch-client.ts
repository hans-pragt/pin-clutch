// #region Imports

/* Stytch */
import { Client } from 'stytch';

/* Pin Clutch */
import { logger } from '../logging';

// #endregion Imports

if (!process.env.STYTCH_PROJECT_ID || !process.env.STYTCH_SECRET) {
  logger.fatal('Attempted to initialize authentication without the proper environment variables.');
  throw new Error('The Stytch environment variables are not set.');
}

const stytchClient = new Client({
  project_id: process.env.STYTCH_PROJECT_ID,
  secret:     process.env.STYTCH_SECRET
});

export { stytchClient };