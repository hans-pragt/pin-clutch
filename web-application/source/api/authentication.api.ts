// #region Imports

/* Pin Clutch */
import { API_URL } from '../constants';

// #endregion Imports

// #region Authentication

/**
 * If the user does not have an account, one will be created. Next, the user will
 * be emailed a "magic link" to sign into the application.
 * 
 * @param emailAddress The email address to sign in with.
 */
export async function signInOrCreateAccount(emailAddress : string) {
  const response = await fetch(
    `${API_URL}/authentication/login_or_create_user`,
    {
      method:   'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body:     JSON.stringify({
        email: emailAddress
      })
    }
  );

  if (response.status !== 200) {
    throw new Error('Unable to sign or create a new account');
  }
}

/**
 * Someone who has just logged in has a link with a token, use this to validate
 * that token, after which a jwt will be assigned to the session.
 * 
 * @param token The token to authenticate.
 */
export async function authenticateAccount(token : string) : Promise<boolean> {
  const params = new URLSearchParams({ token });  
  const response = await fetch(
    `${API_URL}/authentication/authenticate?${params}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    }
  );

  if (response.status !== 200) {
    throw new Error('Unable to authenticate account.');
  }

  return response.status === 200;
}

// #endregion Authentication