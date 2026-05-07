// #region Imports

/* React */
import { FC, SVGProps } from 'react';

/* Classnames */
import classnames from 'classnames';

/* Clutch */
import { Hanger } from './Hanger';

// #endregion Imports

// #region Properties

interface IconPinProperties {

  /**
   * The icon to display.
   */
  Icon : FC<SVGProps<SVGSVGElement>>;

}

// #endregion Properties

// #region Component

export function IconPin({ Icon } : IconPinProperties) {
  return (
    <div className={classnames(
      'flex flex-col justify-between items-center px-8 py-6 w-48 h-56',
      'bg-tan-100',
      'rounded-xl border-4 border-shadow-500 shadow-medium'
    )}>
      <Hanger />
      <Icon className='drop-shadow-pin' />
    </div>
  );
}

// #endregion Component