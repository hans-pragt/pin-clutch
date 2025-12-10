// #region Imports

/* React Router */
import { RouterProvider } from 'react-router-dom';

/* Classnames */
import classnames from 'classnames';

/* Clutch */
import { PageHeader } from 'views/application/PageHeader';
import { router } from '@routes';

// #endregion Imports

// #region Component

export function Application() {
  return (
    <div 
      className={classnames(
        'font-liter',
        'w-full h-screen', 
        'bg-base-100'
      )}
    >

      <div className={classnames(
        'container mx-auto h-full', 
        'flex flex-col'
      )}>

        <PageHeader />

        <div className={classnames(
          'flex-1', 
          'rounded-t-xl bg-base-300 shadow-xl',
          'flex flex-col'
        )}>
          <RouterProvider router={router} />
        </div>

      </div>
    </div>
  )
}

// #endregion Component