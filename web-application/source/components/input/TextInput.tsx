// #region Imports

/* React */
import { InputHTMLAttributes } from 'react';

/* Clutch */
import { cn } from '@styles';

// #endregion Imports

// #region Properties

// #endregion Properties

interface TextInputProperties extends InputHTMLAttributes<HTMLInputElement> {
  label? : string;
}

// #region Component

export function TextInput(properties : TextInputProperties) {
  const {
    label,
    className,
    ...htmlInputAttributes
  } = properties;

  return (
    <div
      className={cn(
        'flex flex-col gap-1',
        className
      )}
    >
      {
        label &&
        <label className='font-liter text-shadow-500 font-bold tracking-wider'>
          {label}
        </label>
      }
      <input
        {...htmlInputAttributes}
        className = {cn(
          'px-2 py-1.5',
          'rounded-xl border-4 border-shadow-500 outline-none',
          'bg-mandarin-200 focus:bg-mandarin-100',
          'focus:shadow-medium',
          'focus:-translate-0.5',
          'transition duration-200',
          'placeholder:text-aubergine-200'
        )}
      />
    </div>
  )
}

// #endregion Component