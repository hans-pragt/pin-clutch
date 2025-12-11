// #region Imnports

/* Clutch */
import { Toolbar } from './components/Toolbar';

// #endregion Imports

// #region Component

/**
 * Allows a user to manage their own collection of pins.
 */
export function UserView() {
  return (
    <div className='flex flex-col'>

      <Toolbar />

    </div>
  );
}

// #endregion Component