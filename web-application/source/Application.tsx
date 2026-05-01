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
        'w-full h-screen', 
        'font-liter font-bold tracking-wider text-shadow-500',
        'bg-tan-100'
      )}
    >
      <RouterProvider router={router} />
    </div>
  )
}

// #endregion Component