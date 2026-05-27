// #region Imports

/* React Router */
import { RouterProvider } from 'react-router-dom';

/* Clutch */
import { cn } from '@styles';
import { router } from '@routes';

// #endregion Imports

// #region Component

export function Application() {
  return (
    <div 
      className={cn(
        'w-full h-screen', 
        'font-liter font-bold tracking-wider text-shadow-500',
        'bg-tan-100'
      )}
    >
      <RouterProvider router={router} />
    </div>
  )
}

// #endregion Component