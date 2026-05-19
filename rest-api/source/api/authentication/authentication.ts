// #region Imports

/* Express */
import express, { Request, Response } from 'express';

/* Stytch */
import { MagicLinksEmailLoginOrCreateRequest } from 'stytch';

/* Pin Clutch */
import { logger } from '../../logging';
import { stytchClient } from '../../authentication';
import { getReasonPhrase, StatusCodes } from 'http-status-codes';

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
    logger.info('New log-in request received.');

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
 * Allows the user to log out, provided they have a valid web token.
 */
router.post(
  '/logout',
  async (request : Request, response : Response) => {
    try {
      const token = request.session.jwt;
      stytchClient.sessions.revoke({ session_jwt: token });

      response
        .status(StatusCodes.OK)
        .send(getReasonPhrase(StatusCodes.OK));
    }

    catch {
      response
        .status(StatusCodes.BAD_REQUEST)
        .send(getReasonPhrase(StatusCodes.BAD_REQUEST));
    }
  }
)

/**
 * Check to see the user is authenticated. This request will only work once for
 * a given token.
 */
router.get(
  '/authenticate',
  async (request : Request<{}, {}, {}, { token : string }>, response : Response<string>) => {
    const token = request.query.token;

    const stytchResponse = await stytchClient.magicLinks.authenticate({
      token,
      session_duration_minutes: 60
    });
    
    request.session.jwt = stytchResponse.session_jwt;
    response
      .status(stytchResponse.status_code)
      .send(getReasonPhrase(stytchResponse.status_code));
  }
);

// #endregion Routes

export default router;