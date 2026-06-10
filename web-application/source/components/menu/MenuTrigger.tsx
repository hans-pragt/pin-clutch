// #region Imports

/* React */
import { ButtonHTMLAttributes, MouseEvent, useContext } from 'react';

/* Clutch */
import { Button } from 'components/input/Button';
import { MenuContext } from './Menu';

// #endregion Imports

// #region Properties

interface MenuTriggerProperties extends ButtonHTMLAttributes<HTMLButtonElement> {
  kind? : 'default' | 'accent';
}

// #endregion Properties

// #region Component

export function MenuTrigger(properties : MenuTriggerProperties) {

  const { 
    onClick,
    children, 
    ...buttonAttributes 
  } = properties;

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