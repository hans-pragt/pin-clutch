// #region Imports

import { createBrowserRouter } from 'react-router-dom';

/* React */

// #endregion Imports

const router = createBrowserRouter([

  // Pins
  {
    path: '/',
    children: [

      /* Home */
      {
        path: '/',
        element: <div>Home</div>
      },

      {
        path: '/pins/:username',
        element: <div>User</div>
      }

    ]
  },

  // Profile Settings
  {
    path: '/profile',
    element: <div>Profile</div>
  },

  // Admin
  {
    path: '/admin',
    element: <div>Admin</div>
  }

])

export { router };