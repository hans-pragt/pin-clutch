// #region Imports

/* Clutch */
import AddIcon from '@icons/add.svg';

// #endregion Imports

// #region Component

export function Toolbar() {
  return (
    <div className='bg-base-200 p-4 flex justify-end'>

      {/* Add New Pin */}
      <button className='btn btn-secondary'>
        <AddIcon />
        Add New Pin
      </button>

    </div>
  );
}

// #endregion Component