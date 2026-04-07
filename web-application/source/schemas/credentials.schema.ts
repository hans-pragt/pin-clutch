// #region Imports

/* Yup */
import { InferType, object, string } from 'yup';

// #endregion Imports

export const CredentialsSchema = object({
  email: string().email().default('')
});

export type Credentials = InferType<typeof CredentialsSchema>;