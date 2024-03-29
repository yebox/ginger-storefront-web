import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { GlobalReducer, NavbarReducer, userReducer } from "./Reducers";
import {
  persistStore,
  persistReducer,
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import { createLogger } from "redux-logger";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user", "global", "navbar"],
};

const rootReducer = combineReducers({
  user: userReducer,
  global: GlobalReducer,
  navbar: NavbarReducer
  
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

let middleware = [];

if (process.env.NODE_ENV === "development") {
  const logger = createLogger({
    collapsed: true,
    duration: true,
    level: "warn",
    colors: {
      title: () => "#139BFE",
      prevState: () => "#1C5FAF",
      action: () => "#149945",
      nextState: () => "#A47104",
    },
  });
  middleware = [...middleware, logger];
}

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(middleware),
});

export const persistor = persistStore(store);
