// #region Imports

/* Clutch */
import AddIcon from '@icons/monotone/add.svg?react';
import { Button } from 'components/button/Button';

// #endregion Imports

// #region Component

export function Toolbar() {
  return (
    <div className='bg-tan-800 p-4 flex justify-end'>

      {/* Add New Pin */}
      <Button
        kind='accent'
      >
        <AddIcon />
        Add New Pin
      </Button>

    </div>
  );
}

// #endregion Component