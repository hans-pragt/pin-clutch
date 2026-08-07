// #region Imports

/* React */
import { ButtonHTMLAttributes, PropsWithChildren } from 'react';

/* CVA */
import { VariantProps } from 'class-variance-authority';

/* Clutch */
import { buttonVariants } from './variants';
import { cn } from '@styles';

// #endregion Imports

// #region Properties

interface ButtonProperties extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {

  // #region Appearance

  /**
   * Controls the visual size of the button.
   * 
   * @default 'medium'
   */
  size? : 'small' | 'medium' | 'large';

  /**
   * Controls the appearance of the button.
   * 
   * @default 'default'
   */
  kind? : 'default' | 'accent' | 'ghost';

  // #endregion Appearance

}

// #endregion Properties

// #region Component

export function Button(properties : PropsWithChildren<ButtonProperties>) {
  const {
    size            = 'medium',
    kind            = 'default',
    children,

    className,
    ...htmlButtonAttributes
  } = properties;

  return (
    <button
      {...htmlButtonAttributes}
      className   = {cn(
        buttonVariants(),
        {
          '[&_svg]:shrink-0 [&_svg]:size-4': size === 'small'
        },
        className
      )}
    >
      {children}
    </button>
  );
}

// #endregion Component