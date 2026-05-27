// #region Imports

/* React */
import { HTMLAttributes } from 'react';

/* Clutch */
import { cn } from '@styles';

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
      className={cn(
        'font-sora',
        'text-5xl font-black text-tan-300',
        'uppercase tracking-[-4px]',
        'text-shadow-medium',
        className
      )}
    >
      {label}
    </div>
  )
}

// #endregion Component