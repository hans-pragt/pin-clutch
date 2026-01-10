// #region Imports

import { HTMLAttributes } from 'react';

// #endregion Imports

// #region Properties

interface PinsGridProperties extends HTMLAttributes<HTMLDivElement> {

}

// #endregion Properties

// #region Component

/**
 * Shows a grid of pins
 */
export function PinsGrid(properties : PinsGridProperties) {

  const {
    ...htmlDivAttributes
  } = properties;

  return (
    <div 
      {...htmlDivAttributes}
    >

      <div className='w-24 h-24 bg-base-100'>
        pin
      </div>

    </div>
  );
}

// #endregion Component