// #region Imports

/* React Router Dom */
import { Outlet } from 'react-router-dom';

/* Classnames */
import classnames from 'classnames';
import { SearchPanel } from './components/SearchPanel';
import { PinsViewHeader } from './components/PinsViewHeader';

// #endregion Imports

// #region Component

/**
 * The home-page of the website.
 */
export function PinsView() {
  return (
    <div className={classnames(
      'container md:mx-auto h-full pt-4', 
      'flex flex-col gap-2'
    )}>
      <PinsViewHeader />

      {/* Page Content */}
      <div className={classnames(
        'flex-1', 
        'rounded-t-xl bg-base-300 shadow-xl',
        'flex flex-col'
      )}>
        <SearchPanel />
        <Outlet />
      </div>

    </div>
  );
};

// #endregion Component