// #region Imports

/* Express */
import express, { Request, Response } from 'express';

// #endregion Imports

// Router Setup
const router = express.Router();


// #region Routes

/**
 * Logs in or creates a new user by sending a "magic link" to the email address
 * specified in the request body.
 */
router.post(
  '/login_or_create_user', 
  (request : Request, res : Response) => {
    console.log(request.body);
  }
);

// #endregion Routes

export default router;