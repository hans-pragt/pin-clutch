// #region Imnports

/* Clutch */
import { PinsGrid } from './components/PinsGrid';
import { Toolbar } from './components/Toolbar';

// #endregion Imports

// #region Component

/**
 * Allows a user to manage their own collection of pins.
 */
export function UsersPinsView() {
  return (
    <div className='flex flex-col gap-4'>

      <Toolbar />
      <PinsGrid className='px-4' />

    </div>
  );
}

// #endregion Component