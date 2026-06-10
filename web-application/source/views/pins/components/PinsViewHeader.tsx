// #region Imports

/* SWR */
import useSWR from 'swr';

/* Clutch */
import UserIcon from '@icons/monotone/user.svg?react';
import { getMe } from 'api/users.api';
import { PageHeader } from 'components/PageHeader';
import { RouterLink } from 'components/button/RouterLink';
import { signOut } from 'api/authentication.api';
import { ProfileMenu } from './ProfileMenu';

// #endregion Imports

// #region Component

export function PinsViewHeader() {

  // #region User's Account

  const { data : userData, isLoading : userDataIsLoading, mutate } = useSWR('/users/me', getMe);

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
        <ProfileMenu />
      }

    </div>
  );
}

// #endregion Component