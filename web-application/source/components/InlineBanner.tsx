// #region Imports

/* Clutch */
import { cn } from '@styles';
import CircleExclamationIcon from '@icons/monotone/circle-exclamation.svg?react';

// #endregion Imports

// #region Properties

// #endregion Properties

// #region Component

export function InlineBanner() {
  return (
    <div className={cn(
      'bg-mandarin-500',
      'text-tan-100 text-sm font-normal',
      'w-full p-4 rounded-xl',
      'flex flex-row gap-4 items-center'
    )}>
      <CircleExclamationIcon />
      Incorrect username or password
    </div>
  );
}

// #endregion Component