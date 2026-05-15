// #region Imports

/* Clutch */
import UserIcon from '@icons/monotone/user.svg?react';
import { getMe } from 'api/users.api';
import { PageHeader } from 'components/PageHeader';
import { RouterLink } from 'components/input/RouterLink';
import { useEffect } from 'react';

// #endregion Imports

// #region Component

export function PinsViewHeader() {

  useEffect(
    () => {
      async function getMeAsync() {
        const me = getMe();
        console.log(me);
      }

      getMeAsync();
    },
    []
  );

  return (
    <div className="flex flex-row items-center">

      {/* Application */}
      <PageHeader 
        className   = "flex-1"
        label       = "Clutch"
      />

      {/* Sign In / Register */}
      <RouterLink
        className='min-w-48'
        kind="accent"
        to="/sign-in"
        icon={UserIcon}
        label="Sign In"
      />

    </div>
  );
}

// #endregion Component