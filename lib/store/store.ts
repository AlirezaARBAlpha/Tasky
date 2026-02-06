import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import taskReducer from '../features/taskSlice/taskSlice';
import authReducer from "../features/authSlice/authSlice";

const rootReducer = combineReducers({
  tasks: taskReducer,
  auth: authReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["tasks", "auth"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;