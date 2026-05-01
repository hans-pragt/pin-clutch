// #region Imports

/* React Router Dom */
import { Outlet } from 'react-router-dom';

/* Classnames */
import classnames from 'classnames';

/* Clutch */
import { SearchPanel } from './components/SearchPanel';
import { PinsViewHeader } from './components/PinsViewHeader';
import { ViewContainer } from 'components/ViewContainer';

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
      <ViewContainer className="flex-1">
        <SearchPanel />
        <Outlet />
      </ViewContainer>

    </div>
  );
};

// #endregion Component