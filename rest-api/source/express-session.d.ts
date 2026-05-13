// #region Imports

/* Express-Session */
import 'express-session';

// #endregion Imports

/**
 * Extends the session object to add a jwt field. While I was hoping the library
 * would offer a simpler way of doing this (using generics perhaps) this appears
 * to be the recommended way.
 */
declare module 'express-session' {

  /**
   * Add a `jwt` property to session data.
   */
  interface SessionData {
    jwt? : string;
  };
}