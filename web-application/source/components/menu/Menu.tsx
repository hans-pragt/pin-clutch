// #region Imports

/* React */
import { useClickOutside } from 'hooks';
import { createContext, PropsWithChildren, useRef, useState } from 'react';

// #endregion Imports

// #region Context

interface MenuContextProperties {
  isExpanded : boolean;
  expand() : void;
  collapse() : void;
  toggle() : void;
}

/**
 * Controls the expansion state of the menu.
 */
export const MenuContext = createContext<MenuContextProperties>({
  isExpanded: false,
  expand: () => {},
  collapse: () => {},
  toggle: () => {}
});

// #endregion Context

// #region Component

/**
 * The root component of a dropdown menu. To fully build out a dropdown menu,
 * also include a menu trigger and menu contents.
 */
export function Menu({ children } : PropsWithChildren) {

  // #region Menu State

  const [isExpanded, setExpanded] = useState<boolean>(false);

  function expand() {
    setExpanded(true);
  }

  function collapse() {
    setExpanded(false);
  }

  function toggle() {
    setExpanded(value => !value);
  }

  const menuRef = useRef<HTMLDivElement | null>(null);
  useClickOutside(menuRef, () => collapse());

  // #endregion Menu State

  const context = {
    isExpanded,
    expand,
    collapse,
    toggle
  };

  return (
    <MenuContext.Provider value={context}>
      <div 
        ref         = {menuRef}
        className   = "relative"
      >
        {children}
      </div>
    </MenuContext.Provider>
  );
}

// #endregion Component