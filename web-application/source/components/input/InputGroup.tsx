// #region Imports

/* React */
import { ComponentProps } from 'react';

/* Clutch */
import { cn } from 'styles';

// #endregion Imports

// #region Properties

interface InputGroupProperties extends ComponentProps<'div'> {}

// #endregion Properties

// #region Component

export function InputGroup({ className, ...componentProps} : InputGroupProperties) {
  return (
    <div
      className={cn(
        'flex flex-row gap-2 items-center',
        'px-2 py-1.5',
        'rounded-xl border-4 border-shadow-500',
        'bg-mandarin-200 focus-within:bg-mandarin-100',
        'focus-within:shadow-medium',
        'focus-within:-translate-0.5',
        'transition duration-200',
        className
      )}
      {...componentProps}
    />
  );
}

// #endregion Component