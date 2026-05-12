import 'express-session';

declare module 'express-session' {

  /**
   * Add a `jwt` property to session data.
   */
  interface SessionData {
    jwt? : string;
  };
}