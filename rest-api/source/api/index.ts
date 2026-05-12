// #region Imports

/* Express */
import express from 'express';
import session from 'express-session';

/* Cors */
import cors from 'cors';

/* Pino */
import pinoHTTP from 'pino-http';

/* PinClutch */
import { logger } from '../logging';
import AuthenticationRoutes from './authentication/authentication';
import UsersRoutes from './users/users';

// #endregion Imports

const application = express();
const apiLogger = logger.child({ module: 'api' });
const httpLogger = pinoHTTP({ logger: apiLogger });

// #region Life-Cycle

export function initializeAPI(port : number) {
  // Logging
  application.use(httpLogger);
  
  // Cors
  application.use(cors());  // TODO Fix environment so this is not required.

  // Routes
  const router = express.Router();

  router.use(session({
    resave:             true,
    saveUninitialized:  false,
    secret:             'session-signing-secret',
  }));

  router.use('/authentication', AuthenticationRoutes);
  router.use('/users', UsersRoutes);
  application.use('/api/v1', router);
  
  application.listen(
    port, 
    () => apiLogger.info(`API is serving data on port ${port}`)
  );
}

// #endregion Life-Cycle