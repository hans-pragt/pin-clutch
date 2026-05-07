// #region Imports

/* React */
import { useSearchParams, useNavigate } from 'react-router-dom';

/* Classnames */
import classnames from 'classnames';

/* Telestream */
import { PageHeader } from 'components/PageHeader';
import { ViewContainer } from 'components/ViewContainer';
import { useEffect } from 'react';
import { authenticateAccount } from 'api/authentication.api';

// #endregion Imports

// #region Component

export function AuthenticationView() {

  // #region Authenticate

  const [searchParameters] = useSearchParams();
  const navigate = useNavigate();
  const token = searchParameters.get('token');

  if (!token) {
    navigate('/sign-in');
  }

  useEffect(
    () => {
      if (!token) {
        return;
      }

      authenticateAccount(token);
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
        Checking authentication status
      </ViewContainer>
    </div>
  )
}

// #endregion Component