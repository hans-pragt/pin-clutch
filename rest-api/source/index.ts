// #region Imports

/* dotenv */
import { configDotenv } from 'dotenv';

/* PinClutch */
import { initializeAPI } from './api';

// #endregion Imports

// #region Configuration

configDotenv();

// #endregion Configuration

// #endregion API

const port : number = Number(process.env.PORT);
initializeAPI(port);

// #endregion API