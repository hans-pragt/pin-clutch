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
      'mx-auto h-full md:w-lg pt-4',
      'flex flex-col gap-2'
    )}>

      <span className='pc-page-header'>Sign In</span>

      {/* Sign In Form */}
      <div className={classnames(
        'flex-1 p-8 flex flex-col gap-6',
        'bg-(--tan-500)',
        'border-4 border-(--shadow-500) border-b-0 rounded-t-xl',
        'shadow-(--pc-shadow)'
      )}>

        {/* Email Address */}
        <div className="pc-input-container">
          <label 
            className   = "pc-text-input-label"
            htmlFor     = "email"
          >
            Email Address
          </label>
          <input 
            className   = "pc-text-input"
            name        = "email" 
            type        = "text" 
          />
        </div>

        {/* Log In or Create Account */}
        <button className="pc-button pc-button-secondary">
          Continue
        </button>

      </div>
    </div>
  );
};

// #endregion Component