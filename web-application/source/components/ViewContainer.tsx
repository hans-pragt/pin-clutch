// #region Imports

/* React */
import { HTMLAttributes } from 'react';

/* Clutch */
import { cn } from '@styles';

// #endregion Imports

// #region Properties

interface ViewContainerProperties extends HTMLAttributes<HTMLDivElement> {}

// #endregion Properties

// #region Component

export function ViewContainer(properties : ViewContainerProperties) {
  const {
    className,
    children,
    ...htmlDivAttributes
  } = properties;

  return (
    <div
      {...htmlDivAttributes}
      className={cn(
        'rounded-t-xl',
        'border-4 border-shadow-500 border-b-0',
        'shadow-medium',
        'bg-tan-500',
        className
      )}
    >
      {children}
    </div>
  )
}

// #endregion Component