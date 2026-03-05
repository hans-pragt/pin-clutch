// #region Imports

/* React Router */
import { RouterProvider } from 'react-router-dom';

/* Classnames */
import classnames from 'classnames';

/* Clutch */
import { router } from '@routes';

// #endregion Imports

// #region Component

export function Application() {
  return (
    <div 
      className={classnames(
        'font-liter',
        'w-full h-screen', 
        'bg-(--minty-200)'
      )}
    >
      <RouterProvider router={router} />
    </div>
  )
}

// #endregion Component