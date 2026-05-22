// #region Imports

/* clsx */
import { clsx, type ClassValue } from 'clsx';

/* Tailwind Merge */
import { twMerge } from 'tailwind-merge';

// #endregion Imports

/**
 * Allows css class to be combined after which they are merged so that only the
 * last occurance of a tailwind class is applied.
 */
export function cn(...args : Array<ClassValue>) {
  return twMerge(clsx(args));
}