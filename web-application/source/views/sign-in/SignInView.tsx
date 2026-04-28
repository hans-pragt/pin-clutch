// #region Imports

/* React */
import { useState } from 'react';

/* Classnames */
import classnames from 'classnames';

/* Formik */
import { Formik } from 'formik';

/* Pin Clutch */
import EmailIcon from '@icons/email.svg?react';
import { Credentials, CredentialsSchema } from 'schemas/credentials.schema';
import { signInOrCreateAccount } from 'api/authentication.api';
import { IconPin } from 'components/IconPin';

// #endregion Imports

// #region Component

/**
 * Where a user signs in or creates a new account.
 */
export function SignInView() {

  // #region Sign In or Create Account

  const [isSigningIn, setIsSigningIn] = useState<boolean>(false);
  const [isMagicLinkSent, setIsMagicLinkSent] = useState<boolean>(true);

  async function onSignInOrCreateAccount(credentials : Credentials) {
    setIsSigningIn(true);

    try {
      await signInOrCreateAccount(credentials.email);
      setIsMagicLinkSent(true);
    }

    finally {
      setIsSigningIn(false);
    }
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
        {
          isMagicLinkSent ?
          (
            <div className='w-full h-full flex flex-col items-center gap-4 mt-12'>
              <IconPin Icon={EmailIcon} />
              <div className='mt-12 pc-section-header'>Check your email</div>
              <div className='text-(--shadow-500) text-lg text-center pc-body-text'>We sent you an email with a magic link<br />that will sign you in.</div>
            </div>
          ) :
          (
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
                    disabled    = {!isValid || isSigningIn}
                  >
                    Continue
                  </button>

                </form>
              )}
            </Formik>
          )
        }
      </div>
    </div>
  );
};

// #endregion Component