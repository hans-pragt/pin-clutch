// #region Imports

/* Clutch */
import { API_URL } from 'constants';
import { User } from './datamodels/User';

// #endregion Imports

// #region Users

/**
 * Get information about the currently logged in user.
 * 
 * @returns If the user is logged in, get information such as user id, email address,
 * name, etc. Throws if the user is not logged in.
 */
export async function getMe() : Promise<User> {
  const response = await fetch(
    `${API_URL}/users/me`,
    {
      method:     'GET',
      headers:    {
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    }
  );

  if (!response.ok) {
    const error = new Error('User is not signed in');
    error.message = await response.json();

    throw error;
  }

  return response.json();
}

// #endregion Users
