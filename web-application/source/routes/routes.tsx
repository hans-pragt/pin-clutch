// #region Imports

/* React Router */
import { createBrowserRouter } from 'react-router-dom';

/* Clutch */
import { PinsView } from 'views/pins/PinsView';
import { UsersPinsView } from 'views/pins/UsersPinsView';

// #endregion Imports

// #region Routes

const router = createBrowserRouter([

    // #region Pins

    /* Home */
    {
      path: '/',
      element: <PinsView />,
      children: [

        /* Home Page */
        {
          path: '/',
          element: <div>Home Page</div>
        },

        /* User's Pins */
        {
          path: '/pins/user/:username',
          element: <UsersPinsView />
        },

        /* Sets */
        {
          path: '/pins/sets',
          element: <div>Pin Sets</div>
        },

        /* Set */
        {
          path: '/pins/sets/:setid',
          element: <div>Pin Set</div>
        }
      ]
    },

    // #endregion Pins

    // #region Authentication

    /* Sign In / Create Account */
    {
      path: '/sign-in',
      element: <div>Sign In</div>
    },

    // #endregion Authentication

    // #region Profile

    /* Profile */
    {
      path: '/profile',
      element: <div>Profile</div>
    },

    // #endregion Profile

    // #region Administration

    /* Administrative */
    {
      path: '/admin',
      element: <div>Admin</div>
    }

    // #endregion Administration
    
]);

export { router };

// #endregion Routes