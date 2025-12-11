// #region Imports

/* React Router Dom */
import { Outlet } from 'react-router-dom';

/* Classnames */
import classnames from 'classnames';

/* Clutch */
import { PageHeader } from './PageHeader';

// #endregion Imports

// #region Component

/**
 * Defines the general layout of all views in this application.
 */
export function ApplicationLayout() {
  return (
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
        <Outlet />
      </div>
    </div>
  );
};

// #endregion Component