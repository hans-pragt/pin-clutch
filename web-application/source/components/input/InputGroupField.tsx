// #region Imports

/* React */
import { ComponentProps } from 'react';

/* Clutch */
import { cn } from 'styles';

// #endregion Imports

// #region Component

export function InputGroupField({ className, ...inputAttributes } : ComponentProps<'input'>) {


  return (
    <input
      {...inputAttributes}
      className={cn(
        'w-full',
        'outline-none',
        className
      )}
    />
  )
}

// #endregion Component