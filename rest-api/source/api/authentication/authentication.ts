// #region Imports

/* Express */
import express, { Request, Response } from 'express';

/* Stytch */
import { MagicLinksEmailLoginOrCreateRequest } from 'stytch';

/* Pin Clutch */
import { logger } from '../../logging';
import { stytchClient } from '../../authentication';

// #endregion Imports

// #region Route Setup

const router = express.Router();
router.use(express.json());

// #endregion Route Setup

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
      login_magic_link_url:     process.env.STYTCH_LOGIN_LINK_URL,
      signup_magic_link_url:    process.env.STYTCH_SIGNUP_LINK_URL
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
 * Check to see the user is authenticated. This request will only work once for
 * a given token.
 */
router.get(
  '/authenticate',
  async (request : Request<{}, {}, {}, { token : string }>, response : Response<{}>) => {
    const token = request.query.token;
    const stytchResponse = await stytchClient.magicLinks.authenticate({
      token,
      session_duration_minutes: 60
    });
    
    request.session.jwt = stytchResponse.session_jwt;
    response.status(stytchResponse.status_code);
  }
);

// #endregion Routes

export default router;