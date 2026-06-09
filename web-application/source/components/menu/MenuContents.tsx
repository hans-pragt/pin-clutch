// #region Imports

/* React */
import { HTMLAttributes, useContext } from 'react';

/* Clutch */
import { cn } from 'styles';
import { MenuContext } from './Menu';

// #endregion Imports

// #region Properties

interface MenuContentsProperties extends HTMLAttributes<HTMLUListElement> {
}

// #endregion Properties

// #region Component

/**
 * Renders a list of menu items.
 */
export function MenuContents(properties : MenuContentsProperties) {
  const {
    children,
    className,
    ...ulAttributes
  } = properties;

  // #region Menu Context

  const { isExpanded } = useContext(MenuContext);

  // #endregion Menu Context

  return (
    <ul
      {...ulAttributes}
      className   = {cn(
        'absolute right-0',
        'w-56 mt-4 p-2', 
        'bg-tan-300',
        'rounded-xl border-4 border-shadow-500 shadow-medium',
        {
          //'invisible': !isExpanded,
          'opacity-0': !isExpanded,
          'translate-0.5': !isExpanded,
        },
        'transition duration-100',
        className
      )}
    >
      {children}
    </ul>
  )
}

// #endregion Component