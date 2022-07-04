import { configureStore, combineReducers } from "@reduxjs/toolkit";
import subscriberReducer from "../reducer/subscribers/reducer";
import viewsReducer from "../reducer/views/reducer";
import commentsReducer from "../reducer/comments/reducer";
import { persistStore } from "redux-persist";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import logger from "redux-logger";

// const composeEnhancers = composeWithDevTools({
//   // Specify name here, actionsDenylist, actionsCreators and other options if needed
//   trace: true,
//   traceLimit: 25,
// });

// middleware
// spread operator: 배열을 벗겨내고 안에 요소만 넣어주기 위해

// if (process.env.NODE_ENV !== "production") {
//   middleware.push(logger);
// }

const persistConfig = {
  key: "root",
  // key: "views",
  storage,
  // whitelist: ["views"],
};

/**
 * ! configureStore에서는
 * ! composeWithDevTools
 * ! applyMiddleware
 * ! thunk
 * ! combineReducers
 * ! 모두 toolkit 안에 있어서 import 안함
 */

const rootReducer = combineReducers({
  subscriber: subscriberReducer,
  views: viewsReducer,
  comments: commentsReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  // combineReducer와 동일하다
  reducer: {
    persistedReducer,
  },
  middleware: [logger]
});

export const persistor = persistStore(store);
export default store;
