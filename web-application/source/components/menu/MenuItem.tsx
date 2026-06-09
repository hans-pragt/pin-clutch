// #region Imports

/* React */
import { HTMLAttributes } from 'react';

/* Clutch */
import { cn } from '@styles';
import { IconType } from '@icons';

// #endregion Imports

// #region Properties

interface MenuItemProperties extends HTMLAttributes<HTMLLIElement> {

  /**
   * The label for this menu item.
   */
  label : string;

  /**
   * An optional icon to display with the label.
   */
  icon? : IconType;
}

// #endregion Properties

// #region Component

export function MenuItem(properties : MenuItemProperties) {

  const {
    label,
    icon : Icon,

    className,
    ...liAttributes
  } = properties;

  return (
    <li 
      {...liAttributes}
      role="menuitem"
      className={cn(
        'cursor-default',
        'p-2',
        'flex flex-row gap-2',
        'rounded-xl border-4 border-transparent hover:border-shadow-500',
        'active:translate-1.5 active:shadow-low',
        className
      )}
    >
      {Icon && <Icon aria-hidden="true" />}
      {label}
    </li>
  );
}

// #endregion Component