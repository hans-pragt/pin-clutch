// #region Imports

/* CVA */
import { cva } from 'class-variance-authority';

// #endregion Imports

// #region Variants

export const buttonVariants = cva(
  [
    'px-4 py-2',
    'flex flex-row gap-2 items-center justify-center',
    'font-liter text-tan-800 font-bold tracking-wider',
    'bg-transparent',
    'rounded-xl border-4 border-shadow-500',
    'shadow-medium',
    'enabled:hover:-translate-0.5 enabled:hover:shadow-high',
    'enabled:active:translate-1.5 enabled:active:shadow-low',
    'disabled:text-tan-500 disabled:border-transparent disabled:shadow-low',
    'transition duration-200',
  ],
  {
    variants: {
      size: {
        small: 'text-xs',
        medium: 'text-base',
        large: 'text-xl'
      },
      kind: {
        default: 'bg-tan-300',
        accent: 'bg-minty-500',
        ghost: [
          'bg-transparent',
          'border-0',
          'shadow-none'
        ]
      }
    },
    defaultVariants: {
      size: 'medium',
      kind: 'default'
    }
  }
);

// #endregion Variants