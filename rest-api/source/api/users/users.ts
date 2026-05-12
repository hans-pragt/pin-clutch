// #region Imports

/* Express */
import express, { Request, Response } from 'express';

/* Clutch */
import { stytchClient } from '../../authentication';
import { User } from './types';

// #endregion Imports

// #region Route Setup

const router = express.Router();
router.use(express.json());

// #endregion Route Setup

// #region Routes

/**
 * Get user information for the authenticated user that is making the request. 
 */
router.get(
  '/me',
  async (request : Request, response : Response<User>) => {
    const jwt = request.session.jwt;
    const stytchResponse = await stytchClient.sessions.authenticate({ session_jwt: jwt });
    response.json({
      id: stytchResponse.user.user_id
    });
  }
);

// #endregion Routes

export default router;