// #region Imports

/* React */
import { useEffect, RefObject } from 'react';

// #endregion Imports

// #region Hook

export function useClickOutside(
  ref: RefObject<HTMLElement | null>, 
  callback: () => void
) {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Check if the ref exists and the click target is NOT inside the element
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, callback]);
}

// #endregion Hook