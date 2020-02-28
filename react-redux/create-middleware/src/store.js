import { createStore, applyMiddleware } from "redux";
import modules from "./modules";

import { createLogger } from "redux-logger";
import ReduxThunk from "redux-thunk";
import denderMiddleware from "redux-pender";

/* const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
 */

const logger = createLogger();

const store = createStore(
  modules,
  applyMiddleware(logger, ReduxThunk, denderMiddleware())
);

export default store;
