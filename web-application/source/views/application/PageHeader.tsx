// #region Imports

/* Clutch */
import UserIcon from '@icons/user.svg';
import { Link } from 'react-router-dom';

// #endregion Imports

// #region Component

export function PageHeader() {
  return (
    <div className="py-2 flex flex-row items-center">

      {/* Application */}
      <span className="flex-1 font-caprasimo text-base-300 text-6xl">Clutch</span>

      {/* Sign In / Register */}
      <Link className='btn btn-accent btn-lg tracking-wide' to="/sign-in">
        <UserIcon />
        Sign In
      </Link>

    </div>
  );
}

// #endregion Component