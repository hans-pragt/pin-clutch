// #region Imports

/* Classnames */
import classnames from 'classnames';

/* Clutch */
import { PageHeader } from 'views/application/PageHeader';
import { SearchPanel } from 'views/application/SearchPanel';
import { MyPinsView } from 'views/my-pins/MyPinsView';

// #endregion Imports

// #region Component

export function Application() {
  return (
    <div 
      className={classnames(
        'font-liter',
        'w-full h-screen', 
        'bg-minty-200'
      )}
    >

      <div className={classnames(
        'container mx-auto h-full', 
        'flex flex-col'
      )}>

        <PageHeader />

        <div className={classnames(
          'flex-1', 
          'rounded-t-xl bg-minty-500 shadow-xl',
          'flex flex-col'
        )}>
          
          <SearchPanel />

          {/* Views */}
          <MyPinsView />

        </div>

      </div>
    </div>
  )
}

// #endregion Component