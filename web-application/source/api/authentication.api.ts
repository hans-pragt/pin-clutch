// #region Imports

/* Pin Clutch */
import { API_URL } from '../constants';

// #endregion Imports

// #region Authentication

/**
 * If the user does not have an account, one will be created. Next, the user will
 * be emailed a "magic link" to sign into the application.
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

// #endregion Authentication