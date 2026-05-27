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
      className={cn(
        'cursor-pointer',
        'p-2',
        'rounded-xl border-4 border-transparent hover:border-shadow-500',
        'active:translate-1.5 active:shadow-low',
        className
      )}
    >
      {Icon && <Icon />}
      {label}
    </li>
  );
}

// #endregion Component