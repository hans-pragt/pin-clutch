// #region Imports

/* React Router */
import { Outlet } from 'react-router-dom';

/* Clutch */
import { SearchPanel } from './components/SearchPanel';

// #endregion Imports

// #region Component

/**
 * All pin-related views, including the home page and a user's individual pins.
 */
export function PinsView() {
  return (
    <div className='flex flex-col'>
      <SearchPanel />
      <Outlet />
    </div>
  );
};

// #endregion Component