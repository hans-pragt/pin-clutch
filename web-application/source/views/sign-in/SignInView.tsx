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

      <span className='pc-page-header'>Sign In</span>

      {/* Sign In Form */}
      <div className={classnames(
        'flex-1',
        'bg-base-300',
        'border-4 border-(--pc-outline-color) border-b-0 rounded-t-xl',
        'shadow-(--pc-shadow)'
      )}>

      </div>

    </div>
  );
};

// #endregion Component