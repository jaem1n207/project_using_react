import { createStore, applyMiddleware } from "redux";
import modules from "./modules";
import loggerMiddleware from "./lib/loggerMiddlware";

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(modules, applyMiddleware(loggerMiddleware));

export default store;
