// #region Imports

/* SWR */
import useSWR from 'swr';

/* Clutch */
import UserIcon from '@icons/monotone/user.svg?react';
import { getMe } from 'api/users.api';
import { PageHeader } from 'components/PageHeader';
import { RouterLink } from 'components/input/RouterLink';
import { Button } from 'components/input/Button';
import { signOut } from 'api/authentication.api';
import { ProfileMenu } from './ProfileMenu';

// #endregion Imports

// #region Component

export function PinsViewHeader() {

  // #region User's Account

  const { data : userData, isLoading : userDataIsLoading, mutate } = useSWR('/users/me', getMe);

  async function onSignOut() {
    console.log('sign out');

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

      

      <ProfileMenu />


    </div>
  );
}

// #endregion Component