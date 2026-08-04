// #region Imports

/* React */
import { ComponentProps } from 'react';

/* Clutch */
import { cn } from 'styles';

// #endregion Imports

// #region Properties

interface InputGroupAddOnProperties extends ComponentProps<'div'> {

  /**
   * Controls where the add-on will be placed.
   * 
   * @default 'start'
   */
  position? : 'start' | 'end';

}

// #endregino Properties

// #region Component

export function InputGroupAddOn(properties : InputGroupAddOnProperties) {
  const {
    position = 'start',
    children
  } = properties;

  return (
    <div
      className={cn(
        position === 'start' ? 'order-first' : 'order-last'
      )}
    >
      {children}
    </div>
  );
}

// #endregion Component