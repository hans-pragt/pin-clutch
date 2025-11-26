// #region Imports

/* Classnames */
import classnames from 'classnames';

/* Clutch */
import { PageHeader } from 'views/application/PageHeader';

// #endregion Imports

// #region Component

export function Application() {
  return (
    <div 
      className={classnames(
        'w-full h-screen', 
        'bg-minty-200'
      )}
    >

      <div className={classnames(
        'container mx-auto h-full', 
        'flex flex-col'
      )}>

        <PageHeader />

        <div className='flex-1 rounded-t-xl bg-minty-500 shadow-xl'>
          Content
        </div>

      </div>
    </div>
  )
}

// #endregion Component