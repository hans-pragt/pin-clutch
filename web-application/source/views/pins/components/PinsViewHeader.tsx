// #region Imports

/* Clutch */
import UserIcon from '@icons/user.svg?react';
import { PageHeader } from 'components/PageHeader';
import { Link } from 'react-router-dom';

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
      <Link className="pc-button pc-button-primary" to="/sign-in">
        <UserIcon />
        Sign In
      </Link>

    </div>
  );
}

// #endregion Component