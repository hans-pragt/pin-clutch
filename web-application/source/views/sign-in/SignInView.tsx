// #region Imports

/* Classnames */
import classnames from 'classnames';

// #endregion Imports

// #region Component

/**
 * Where a user signs in or creates a new account.
 */
export function SignInView() {
  return (
    <div className={classnames(
      'mx-auto h-full md:w-2xl pt-4',
      'flex flex-col gap-2'
    )}>

      <span className='font-caprasimo text-base-300 text-6xl'>Sign In</span>

      {/* Sign In Form */}
      <div className={classnames(
        'flex-1',
        'rounded-t-xl bg-base-300',
        'border-8 border-gray-800 border-b-0'
      )}>

      </div>

    </div>
  );
};

// #endregion Component