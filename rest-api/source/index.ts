// #region Imports

/* PinClutch */
import { initializeAPI } from './api';

// #endregion Imports

// #endregion API

const port : number = Number(process.env.PORT);
initializeAPI(port);

// #endregion API