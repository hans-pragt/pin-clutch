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
        'bg-(--minty-500)',
        'flex flex-col',
        'border-4 border-(--shadow-500) border-b-0 rounded-t-xl',
        'shadow-(--pc-shadow)'
      )}>
        <SearchPanel />
        <Outlet />
      </div>

    </div>
  );
};

// #endregion Component