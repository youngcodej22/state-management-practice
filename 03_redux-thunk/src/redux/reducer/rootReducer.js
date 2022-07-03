import store from "../store/store";
import { combineReducers } from "redux";
import subscriberReducer from "./subscribers/reducer";
import viewsReducer from "./views/reducer";
import commentsReducer from "./comments/reducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const persistConfig = {
  key: 'root',
  // key: "views",
  storage,
  // whitelist: ["views"],
};

const rootReducer = persistReducer(
  persistConfig,
  combineReducers({
    // subscriberReducer: subscriberReducer,
    // subscriberReducer // 하나로 가능
    subscriber: subscriberReducer,
    views: viewsReducer,
    comments: commentsReducer,
  })
);

export default rootReducer;
