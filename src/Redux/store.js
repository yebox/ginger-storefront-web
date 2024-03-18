import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { GlobalReducer, userReducer } from "./Reducers";
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
  whitelist: ["user", "global"],
};

const rootReducer = combineReducers({
  user: userReducer,
  global: GlobalReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

var logger = null;

if (process.env.NODE_ENV === "development") {
  logger = createLogger({
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
}

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(logger),
});

export const persistor = persistStore(store);
