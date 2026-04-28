// #region Imports

/* React */
import { HTMLAttributes } from 'react';

/* Classnames */
import classnames from 'classnames';

// #endregion Imports

// #region Properties

interface PageHeaderProperties extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  label : string;
}

// #endregion Properties

// #region Component

export function PageHeader(properties : PageHeaderProperties) {
  const {
    label,
    className,
    ...htmlDivAttributes
  } = properties;

  return (
    <div
      {...htmlDivAttributes}
      className={classnames(
        'font-sora',
        'text-5xl font-black text-tan-300',
        'uppercase tracking-[-4px]',
        'text-shadow-high',
        className
      )}
    >
      {label}
    </div>
  )
}

// #endregion Component