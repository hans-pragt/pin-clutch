// #region Imports

/* Classnames */
import classnames from 'classnames';

/* Formik */
import { Formik } from 'formik';

/* Pin Clutch */
import { Credentials, CredentialsSchema } from 'schemas/credentials.schema';
import { signInOrCreateAccount } from 'api/authentication.api';

// #endregion Imports

// #region Component

/**
 * Where a user signs in or creates a new account.
 */
export function SignInView() {

  // #region Sign In or Create Account

  async function onSignInOrCreateAccount(credentials : Credentials) {
    await signInOrCreateAccount(credentials.email);
  }

  // #endregion Sign In or Create Account

  return (
    <div className={classnames(
      'mx-auto h-full md:w-lg pt-4',
      'flex flex-col gap-2'
    )}>

      <span className='pc-page-header'>Sign In</span>

      {/* Sign In Form */}
      <div className    = {classnames(
        'flex-1 p-8',
        'bg-(--tan-500)',
        'border-4 border-(--shadow-500) border-b-0 rounded-t-xl',
        'shadow-(--pc-shadow)'
      )}>
        <Formik 
          initialValues     = {CredentialsSchema.cast({})}
          validationSchema  = {CredentialsSchema}
          onSubmit          = {onSignInOrCreateAccount}
        >
          {({
            values,
            isValid,
            handleChange,
            handleBlur,
            handleSubmit
          }) => (
            <form 
              className   = "flex flex-col gap-8"
              onSubmit    = {handleSubmit}
            >

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
                  value       = {values.email}
                  onChange    = {handleChange}
                  onBlur      = {handleBlur}
                />
              </div>

              {/* Log In or Create Account */}
              <button 
                className   = "pc-button pc-button-secondary"
                type        = "submit"
                disabled    = {!isValid}
              >
                Continue
              </button>

            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

// #endregion Component