// #region Imports

/* Express */
import express, { Request, Response } from 'express';

/* Status Codes */
import { StatusCodes, getReasonPhrase } from 'http-status-codes';

/* Clutch */
import { stytchClient } from '../../authentication';
import { User } from './types';
import { STATUS_CODES } from 'http';

// #endregion Imports

// #region Route Setup

const router = express.Router();
router.use(express.json());

// #endregion Route Setup

// #region Routes

/**
 * Get user information for the authenticated user that is making the request.
 * 
 * @returns When the request comes from an authenticated user, various information
 * about that user is returned. If getting the user information is not possible,
 * a status message is returned.
 */
router.get(
  '/me',
  async (request : Request, response : Response<User | string>) => {
    try {
      const jwt = request.session.jwt;
      const stytchResponse = await stytchClient.sessions.authenticate({ session_jwt: jwt });
      
      response.json({
        id: stytchResponse.user.user_id
      });
    }

    catch {
      response
        .status(StatusCodes.UNAUTHORIZED)
        .send(getReasonPhrase(StatusCodes.UNAUTHORIZED));
    }
  }
);

// #endregion Routes

export default router;