// #region Imports

/* React */
import { ButtonHTMLAttributes } from 'react';

/* Clutch */
import { cn } from '@styles';
import { IconType } from '@icons';

// #endregion Imports

// #region Properties

interface ButtonProperties extends ButtonHTMLAttributes<HTMLButtonElement> {

  /**
   * The text to display on the button.
   */
  label : string;

  /**
   * Controls the appearance of the button.
   * 
   * @default 'default'
   */
  kind? : 'default' | 'accent';

  // #region Icon
  
  icon? : IconType;

  // #endregion Icon

}

// #endregion Properties

// #region Component

export function Button(properties : ButtonProperties) {
  const {
    label,
    kind            = 'default',

    icon: Icon,

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
      {Icon && <Icon />}
      {label}
    </button>
  )
}

// #endregion Component