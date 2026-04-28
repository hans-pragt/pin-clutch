// #region Imports

/* Classnames */
import classnames from 'classnames';
import { useSearchParams } from 'react-router-dom';

// #endregion Imports

// #region Component

export function AuthenticationView() {

  // #region Authenticate

  const [searchParameters] = useSearchParams();
  const token = searchParameters.get('token');

  console.log(token);

  // #endregion Authenticate

  return (
    <div className={classnames(
      'mx-auto h-full md:w-lg pt-4',
      'flex flex-col gap-2'
    )}>
      <span className='pc-page-header'>Authenticating</span>

      <div className    = {classnames(
        'flex-1 p-8',
        'bg-(--tan-500)',
        'border-4 border-shadow-500 border-b-0 rounded-t-xl',
        'shadow-(--pc-shadow)'
      )}>
        Verifying Authentication        
      </div>
    </div>
  )
}

// #endregion Component