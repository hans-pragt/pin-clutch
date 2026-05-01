// #region Imports

/* React */
import { ButtonHTMLAttributes } from 'react';

/* Classnames */
import classnames from 'classnames';

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

}

// #endregion Properties

// #region Component

export function Button(properties : ButtonProperties) {
  const {
    label,
    kind    = 'default',

    className,
    ...htmlButtonAttributes
  } = properties;

  return (
    <button
      {...htmlButtonAttributes}
      className   = {classnames(
        'px-4 py-2',
        'font-liter text-tan-800 font-bold tracking-wider',
        {
          'bg-tan-300': kind === 'default',
          'bg-minty-500': kind === 'accent'
        },
        'rounded-xl border-4 border-shadow-500',
        'shadow-medium',
        'hover:-translate-0.5 hover:shadow-high',
        'active:translate-1.5 active:shadow-low',
        'disabled:text-tan-500 disabled:border-transparent disabled:shadow-low',
        'transition duration-200',
        className
      )}
    >
      {label}
    </button>
  )
}

// #endregion Component