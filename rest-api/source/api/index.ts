// #region Imports

/* Express */
import express from 'express';

/* Pino */
import pinoHTTP from 'pino-http';

/* PinClutch */
import { logger } from '../logging';
import AuthorizationRoutes from './authorization/authorization';

// #endregion Imports

const application = express();
const apiLogger = logger.child({ module: 'api' });
const httpLogger = pinoHTTP({ logger: apiLogger });

// #region Life-Cycle

export function initializeAPI(port : number) {
  // Logging
  application.use(httpLogger);
  
  // Routes
  application.use('/authorization', AuthorizationRoutes);

  application.listen(
    port, 
    () => apiLogger.info(`API is serving data on port ${port}`)
  );
}

// #endregion Life-Cycle