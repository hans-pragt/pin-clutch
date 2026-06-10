// #region Imports

/* React */
import { HTMLAttributes } from 'react';

/* Clutch */
import { cn } from '@styles';

// #endregion Imports

// #region Properties

interface MenuItemProperties extends Omit<HTMLAttributes<HTMLLIElement>, 'onSelect'> {

  /**
   * Called when the menu item is actived by mouse click or keyboard interaction.
   * 
   * @param event The event triggered by selection of this item.
   */
  onSelect? : (event : Event) => void;

}

// #endregion Properties

// #region Component

export function MenuItem(properties : MenuItemProperties) {

  const {
    className,
    children,
    onSelect,
    ...liAttributes
  } = properties;

  return (
    <li 
      {...liAttributes}
      role="menuitem"
      className={cn(
        'cursor-default',
        'rounded-xl border-4 border-transparent hover:border-shadow-500',
        'active:translate-1.5',
        'transition-transform duration-200',
        className
      )}
    >
      <button 
        className={cn(
          'p-2',
          'flex flex-row gap-2'
        )}

        onClick={event => onSelect?.(event.nativeEvent)}
      >
        {children}
      </button>
    </li>
  );
}

// #endregion Component