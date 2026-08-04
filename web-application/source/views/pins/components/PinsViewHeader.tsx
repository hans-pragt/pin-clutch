// #region Imports

/* React */
import { useNavigate } from 'react-router-dom';

/* SWR */
import useSWR from 'swr';

/* Clutch */
import { getMe } from '@api/users.api';
import { signOut } from '@api/authentication.api';
import { PageHeader } from '@components/PageHeader';
import { RouterLink } from '@components/button/RouterLink';
import { Menu } from '@components/menu/Menu';
import { MenuTrigger } from '@components/menu/MenuTrigger';
import { MenuContents } from '@components/menu/MenuContents';
import { MenuItem } from '@components/menu/MenuItem';

import UserIcon from '@icons/monotone/user.svg?react';

// #endregion Imports

// #region Component

export function PinsViewHeader() {

  const navigate = useNavigate();

  // #region User's Account

  const { data : userData, mutate } = useSWR(
    '/users/me', 
    getMe, 
    {
      shouldRetryOnError: false 
    }
  );
  
  async function onSignOut() {
    await signOut();
    mutate(undefined);
  }

  // #endregion User's Account

  return (
    <div className="flex flex-row items-center">

      {/* Application */}
      <PageHeader 
        className   = "flex-1"
        label       = "Clutch"
      />

      {/* Unauthenticated User */}
      {
        !userData &&
        <RouterLink 
          className = "w-48"
          kind      = "accent"
          to        = "/sign-in"
        >
          <UserIcon />
          Sign In
        </RouterLink>
      }

      {/* Authenticated User */}
      {
        userData &&
        <Menu>
          <MenuTrigger kind='accent'>
            {userData.email}
          </MenuTrigger>

          <MenuContents>

            {/* Pins */}
            <MenuItem onSelect={() => navigate(`/pins/user/${userData.id}`)}>
              My Pins
            </MenuItem>

            {/* Profile */}
            <MenuItem onSelect={() => navigate('/profile')}>
              My Profile
            </MenuItem>

            {/* Sign Out */}
            <MenuItem onSelect={onSignOut}>
              Sign Out
            </MenuItem>
          </MenuContents>
        </Menu>
      }

    </div>
  );
}

// #endregion Component