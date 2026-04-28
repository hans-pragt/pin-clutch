// #region Imports

/* React */
import { HTMLAttributes } from 'react';

/* Classnames */
import classnames from 'classnames';

// #endregion Imports

// #region Component

export function Hanger({ className, ...divAttributes } : HTMLAttributes<HTMLDivElement>) {
  return (
    <div 
      {...divAttributes}
      className={classnames(
        'w-18 h-4',
        'rounded-xl',
        'bg-shadow-500',
        'relative',
        className
      )}
    >
      <div
        className={classnames(
          'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2',
          'w-6 h-6',
          'rounded-full',
          'bg-shadow-500'
        )}
      />
    </div>
  );
}

// #endregion Component