// #region Imports

/* React Router */
import { createBrowserRouter } from 'react-router-dom';
import { ApplicationLayout } from 'views/application/ApplicationLayout';
import { HomeView } from 'views/pins/HomeView';

/* Clutch */
import { PinsView } from 'views/pins/PinsView';
import { UsersPinsView } from 'views/pins/UsersPinsView';
import { SignInView } from 'views/sign-in/SignInView';

// #endregion Imports

// #region Routes

const router = createBrowserRouter([

  {
    path: '/',
    element: <ApplicationLayout />,
    children: [
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

          /* User's Pins */
          {
            path: '/pins/user/:username',
            element: <UsersPinsView />
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
    ]
  }
]);

export { router };

// #endregion Routes