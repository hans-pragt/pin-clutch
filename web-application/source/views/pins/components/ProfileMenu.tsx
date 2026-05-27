// #region Imports

/* Clutch */
import { cn } from '@styles';
import { Button } from 'components/input/Button';
import { MenuItem } from 'components/menu/MenuItem';

import UserIcon from '@icons/monotone/user.svg?react';

// #endregion Imports

// #region Properties

// #endregion Properties

// #region Component

export function ProfileMenu() {
  return (
    <div className="relative">

      {/* Trigger */}
      <Button
        kind    = "accent"
        label   = "hpragt@gmail.com"
      />

      {/* Menu */}
      <ul className={cn(
        'absolute origin-top-right right-0', 
        'w-56 mt-4 p-2', 
        'bg-tan-300',
        'rounded-xl border-4 border-shadow-500 shadow-medium',
      )}>
        <MenuItem 
          icon={UserIcon}
          label="Profile"
        />
        <MenuItem label="Notifications" />
        <MenuItem label="Sign Out" />
      </ul>

    </div>
  );
}

// #endregion Component