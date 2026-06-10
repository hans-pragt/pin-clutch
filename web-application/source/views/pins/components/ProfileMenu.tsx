// #region Imports

/* Clutch */
import { MenuContents } from 'components/menu/MenuContents';
import { MenuItem } from 'components/menu/MenuItem';
import { MenuTrigger } from 'components/menu/MenuTrigger';
import { Menu } from 'components/menu/Menu';

import UserIcon from '@icons/monotone/user.svg?react';

// #endregion Imports

// #region Properties

// #endregion Properties

// #region Component

export function ProfileMenu() {
  return (
    <Menu>

      {/* Trigger */}
      <MenuTrigger kind='accent'>
        user@gmail.com
      </MenuTrigger>

      {/* Menu */}
      <MenuContents>
        <MenuItem>
          <UserIcon />
          Profile
        </MenuItem>
        <MenuItem>
          Notifications
        </MenuItem>
        <MenuItem>
          Sign Out
        </MenuItem>
      </MenuContents>

    </Menu>
  );
}

// #endregion Component