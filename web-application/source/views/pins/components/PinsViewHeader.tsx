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
      <span className="flex-1 font-caprasimo text-base-300 text-6xl">Clutch</span>

      {/* Sign In / Register */}
      <Link className='btn btn-lg btn-accent tracking-wide' to="/sign-in">
        <UserIcon />
        Sign In
      </Link>

    </div>
  );
}

// #endregion Component