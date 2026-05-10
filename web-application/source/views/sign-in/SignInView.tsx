// #region Imports

/* React */
import { useState } from 'react';

/* Classnames */
import classnames from 'classnames';

/* Formik */
import { Formik } from 'formik';

/* Pin Clutch */
import EmailIcon from '@icons/duotone/email.svg?react';
import { Credentials, CredentialsSchema } from 'schemas/credentials.schema';
import { signInOrCreateAccount } from 'api/authentication.api';
import { IconPin } from 'components/IconPin';
import { PageHeader } from 'components/PageHeader';
import { InlineHeader } from 'components/InlineHeader';
import { ViewContainer } from 'components/ViewContainer';
import { TextInput } from 'components/input/TextInput';
import { Button } from 'components/input/Button';

// #endregion Imports

// #region Component

/**
 * Where a user signs in or creates a new account.
 */
export function SignInView() {

  // #region Sign In or Create Account

  const [isSigningIn, setIsSigningIn] = useState<boolean>(false);
  const [isMagicLinkSent, setIsMagicLinkSent] = useState<boolean>(false);

  async function onSignInOrCreateAccount(credentials : Credentials) {
    setIsSigningIn(true);

    try {
      if (await signInOrCreateAccount(credentials.email)) {
        setIsMagicLinkSent(true);
      }
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

      <PageHeader label="Sign In" />

      {/* Sign In Form */}
      <ViewContainer className="flex-1">
        {
          isMagicLinkSent ?
          (
            <div className='w-full h-full flex flex-col items-center gap-4 mt-12'>
              <IconPin Icon={EmailIcon} />
              <InlineHeader className="mt-6" label="Check your email" />
              <div className="text-shadow-500 text-lg text-center pc-body-text">We sent you an email with a magic link<br />that will sign you in.</div>
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
                  <TextInput
                    name          = "email"
                    type          = "text"
                    label         = "Email Address"
                    value         = {values.email}
                    onChange      = {handleChange}
                    onBlur        = {handleBlur}
                  />

                  {/* Log In or Create Account */}
                  <Button
                    label       = "Continue"
                    type        = "submit"
                    disabled    = {!isValid || isSigningIn}
                  />

                </form>
              )}
            </Formik>
          )
        }
      </ViewContainer>
    </div>
  );
};

// #endregion Component