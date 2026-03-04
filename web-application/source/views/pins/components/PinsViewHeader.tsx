// #region Imports

/* Clutch */
import UserIcon from '@icons/user.svg';
import { Link } from 'react-router-dom';

// #endregion Imports

// #region Component

export function PinsViewHeader() {
  return (
    <div className="flex flex-row items-center">

      {/* Application */}
      <span className="flex-1 pc-page-header">Clutch</span>

      {/* Sign In / Register */}
      <Link className='pc-button' to="/sign-in">
        <UserIcon />
        Sign In
      </Link>

    </div>
  );
}

// #endregion Component