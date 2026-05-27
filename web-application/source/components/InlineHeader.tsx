// #region Imports

/* React */
import { HTMLAttributes } from 'react';

/* Clutch */
import { cn } from '@styles';

// #endregion Imports

// #region Properties

interface InlineHeaderProperties extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  label : string;
}

// #endregion Properties

// #region Component

export function InlineHeader(properties : InlineHeaderProperties) {
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
        'text-3xl font-black text-tan-100',
        'uppercase tracking-[-2px]',
        className
      )}
    >
      {label}
    </div>
  )
}

// #endregion Component