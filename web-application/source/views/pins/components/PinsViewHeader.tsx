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

      {/* Sign In / Register */}
      {
        !userData && !userDataIsLoading &&
        <RouterLink
          className="min-w-48"
          kind="accent"
          to="/sign-in"
          icon={UserIcon}
          label="Sign In"
        />
      }

      {/* Sign Out */}
      {
        userData && !userDataIsLoading &&
        <Button
          className="min-w-48"
          label="Sign Out"
          onClick={onSignOut}
        />
      }


    </div>
  );
}

// #endregion Component