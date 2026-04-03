// #region Imports

/* Yup */
import { object, string } from 'yup';

// #endregion Imports

export const SignInSchema = object({
  email: string().email().default('')
});