// #region Imports

/* Classnames */
import classnames from 'classnames';
import { FC, SVGProps } from 'react';
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
      'bg-(--tan-100)',
      'rounded-xl border-4 border-(--shadow-500) shadow-(--pc-shadow)'
    )}>
      <Hanger />
      <Icon className='drop-shadow-[2px_2px_2px_rgba(0,0,0,0.25)]' />
    </div>
  );
}

// #endregion Component