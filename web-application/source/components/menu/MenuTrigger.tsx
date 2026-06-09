// #region Imports

/* React */
import { ButtonHTMLAttributes, MouseEvent, useContext } from 'react';

/* Clutch */
import { Button } from 'components/input/Button';
import { MenuContext } from './Menu';

// #endregion Imports

// #region Component

export function MenuTrigger({ onClick, children, ...buttonAttributes } : ButtonHTMLAttributes<HTMLButtonElement>) {

  // #region Menu

  const { toggle } = useContext(MenuContext);

  function onToggle(event : MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) {
    toggle();
    onClick?.(event);
  }

  // #endregion Menu

  return (
    <Button 
      {...buttonAttributes}
      onClick={event => onToggle(event)}
    >
      {children}
    </Button>
  );
}

// #endregion Component