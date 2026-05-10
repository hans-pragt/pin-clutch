// #region Imports

/* React */
import { useSearchParams, useNavigate } from 'react-router-dom';

/* Classnames */
import classnames from 'classnames';

/* Telestream */
import KeyIcon from '@icons/duotone/key.svg?react';
import { PageHeader } from 'components/PageHeader';
import { ViewContainer } from 'components/ViewContainer';
import { useEffect } from 'react';
import { authenticateAccount } from 'api/authentication.api';
import { InlineHeader } from 'components/InlineHeader';
import { IconPin } from 'components/IconPin';

// #endregion Imports

// #region Component

export function AuthenticationView() {

  // #region Authenticate

  const [searchParameters] = useSearchParams();
  const navigate = useNavigate();
  const token = searchParameters.get('token');

  useEffect(
    () => {
      if (!token) {
        return;
      }

      async function authenticate(token : string) {
        try {
          await authenticateAccount(token);
          navigate('/');
        }

        // On error, direct back to sign in page.
        catch {
          navigate('/sign-in');
        }
      }

      authenticate(token);
    },
    [token]
  );

  // #endregion Authenticate

  return (
    <div className={classnames(
      'mx-auto h-full md:w-lg pt-4',
      'flex flex-col gap-2'
    )}>
      <PageHeader label="Authenticating" />

      <ViewContainer className="flex-1">
        <div className='w-full h-full flex flex-col items-center gap-4 mt-12'>
          <IconPin Icon={KeyIcon} />
          <InlineHeader className="mt-6" label="Checking..." />
        </div>
      </ViewContainer>
    </div>
  )
}

// #endregion Component