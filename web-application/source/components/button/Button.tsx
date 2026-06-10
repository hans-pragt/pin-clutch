// #region Imports

/* React */
import { ButtonHTMLAttributes, PropsWithChildren } from 'react';

/* Clutch */
import { cn } from '@styles';

// #endregion Imports

// #region Properties

interface ButtonProperties extends ButtonHTMLAttributes<HTMLButtonElement> {

  /**
   * Controls the appearance of the button.
   * 
   * @default 'default'
   */
  kind? : 'default' | 'accent';

}

// #endregion Properties

// #region Component

export function Button(properties : PropsWithChildren<ButtonProperties>) {
  const {
    kind            = 'default',
    children,

    className,
    ...htmlButtonAttributes
  } = properties;

  return (
    <button
      {...htmlButtonAttributes}
      className   = {cn(
        'px-4 py-2',
        'flex flex-row gap-2 items-center justify-center',
        'font-liter text-tan-800 font-bold tracking-wider',
        {
          'bg-tan-300': kind === 'default',
          'bg-minty-500': kind === 'accent'
        },
        'rounded-xl border-4 border-shadow-500',
        'shadow-medium',
        'enabled:hover:-translate-0.5 enabled:hover:shadow-high',
        'enabled:active:translate-1.5 enabled:active:shadow-low',
        'disabled:text-tan-500 disabled:border-transparent disabled:shadow-low',
        'transition duration-200',
        className
      )}
    >
      {children}
    </button>
  )
}

// #endregion Component