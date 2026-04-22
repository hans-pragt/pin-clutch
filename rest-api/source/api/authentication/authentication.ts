// #region Imports

/* Express */
import express, { Request, Response } from 'express';
import session from 'express-session';

/* Stytch */
import { Client, MagicLinksEmailLoginOrCreateRequest } from 'stytch';

/* Pin Clutch */
import { logger } from '../../logging';

// #endregion Imports

// Router Setup

const router = express.Router();

router.use(express.json());
router.use(session({
  resave:             true,
  saveUninitialized:  false,
  secret:             'session-signing-secret',
}));

// Authentication Setup

if (!process.env.STYTCH_PROJECT_ID || !process.env.STYTCH_SECRET) {
  logger.fatal('Attempted to initialize authentication without the proper environment variables.');
  throw new Error('The Stytch environment variables are not set.');
}

const stytchClient = new Client({
  project_id: process.env.STYTCH_PROJECT_ID,
  secret:     process.env.STYTCH_SECRET
});

// #region Routes

/**
 * Logs in or creates a new user by sending a 'magic link' to the email address
 * specified in the request body.
 */
router.post(
  '/login_or_create_user', 
  async (request : Request<{}, {}, { email : string }>, response : Response) => {
    logger.info('New authentication request received.');

    const stytchRequestParameters : MagicLinksEmailLoginOrCreateRequest = {
      email:                    request.body.email,
      login_magic_link_url:     'http://localhost:7070/authenticate',
      signup_magic_link_url:    'http://localhost:7070/authenticate'
    }

    const stytchResponse = await stytchClient.magicLinks.email.loginOrCreate(stytchRequestParameters);
    if (stytchResponse.user_created) {
      logger.info('New user created.');
      // TODO Save new user entry in database.
    }

    response.json(stytchResponse);
  }
);

/**
 * Check to see the user is authenticated.
 */
router.get(
  '/authenticate',
  async (request : Request<{}, {}, {}, { token : string }>, response : Response) => {
    const token = request.query.token;
    const stytchResponse = await stytchClient.magicLinks.authenticate({
      token,
      session_duration_minutes: 60
    });
    
    (request.session as any).jwt = stytchResponse.session_jwt;
    response.status(stytchResponse.status_code);
  }
);

// #endregion Routes

export default router;