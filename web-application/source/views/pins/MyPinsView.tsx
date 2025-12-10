// #region Imports

/* Clutch */
import { PinsGrid } from './PinsGrid';
import { Toolbar } from './Toolbar';

// #endregion Imports

// #region Component

export function MyPinsView() {
  return (
    <div className='flex flex-col'>

      <Toolbar />
      <PinsGrid />

    </div>
  );
}

// #endregion Component