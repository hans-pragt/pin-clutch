// #region Imports

/* Clutch */
import { API_URL } from 'constants';

// #endregion Imports

// #region Users

/**
 * Get information about the currently logged in user.
 * 
 * @returns If the user is logged in, get information such as user id, email address,
 * name, etc. Throws if the user is not logged in.
 */
export async function getMe() : Promise<{ id : string}> {
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
    throw 'User is not signed in.';
  }

  return response.json();
}

// #endregion Users
