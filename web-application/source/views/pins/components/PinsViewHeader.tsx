// #region Imports

/* Clutch */
import UserIcon from '@icons/user.svg?react';
import { PageHeader } from 'components/PageHeader';
import { RouterLink } from 'components/input/RouterLink';

// #endregion Imports

// #region Component

export function PinsViewHeader() {
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