import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import rootReducer from "../reducer/rootReducer";
import { persistStore } from "redux-persist";
import logger from "redux-logger";
import { printState } from "../middlewares/middlewares";
import thunk from "redux-thunk";

const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsDenylist, actionsCreators and other options if needed
  trace: true,
  traceLimit: 25,
});

// middleware
// spread operator: 배열을 벗겨내고 안에 요소만 넣어주기 위해
const middleware = [logger, thunk, printState];

if (process.env.NODE_ENV !== "production") {
  middleware.push(logger);
}

// store
const store = createStore(
  rootReducer,
  /* preloadedState, */
  // ! option설정 안할 경우 (trace같은)
  // composeWithDevTools(
  //   applyMiddleware(...middleware)
  //   // other store enhancers if any
  // )
  composeEnhancers(
    applyMiddleware(...middleware)
    // other store enhancers if any
  )
);

export const persistor = persistStore(store);
export default store;
