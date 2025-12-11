// #region Imports

/* React Router */
import { createBrowserRouter } from 'react-router-dom';
import { HomeView } from 'views/pins/HomeView';

/* Clutch */
import { PinsView } from 'views/pins/PinsView';
import { UserView } from 'views/pins/UserView';
import { SignInView } from 'views/sign-in/SignInView';

// #endregion Imports

// #region Routes

const router = createBrowserRouter([

  // Pins
  {
    path: '/',
    element: <PinsView />,
    children: [

      /* Home */
      {
        path: '/',
        element: <HomeView />
      },

      {
        path: '/pins/:username',
        element: <UserView />
      }

    ]
  },

  // Sign In / Create Account
  {
    path: '/sign-in',
    element: <SignInView />
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

// #endregion Routes