// #region Imports

/* React */
import { ButtonHTMLAttributes, MouseEvent, useContext } from 'react';

/* Clutch */
import { Button } from '@components/button/Button';
import { MenuContext } from './Menu';

import ChevronDownIcon from '@icons/monotone/chevron-down.svg?react';
import ChevronUpIcon from '@icons/monotone/chevron-up.svg?react';

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

  const { toggle, isExpanded } = useContext(MenuContext);

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
      {
        isExpanded ?
          <ChevronUpIcon className="size-4" /> :
          <ChevronDownIcon className="size-4" />

      }
    </Button>
  );
}

// #endregion Component