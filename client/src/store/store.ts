import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from 'redux-persist';
import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice";
import loaderReducer from "./features/loadingSlice";
import firebaseReducer from "./features/firebaseSlice";
import storage from "redux-persist/lib/storage";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import historyReducer from "./features/historySlice";

const persistConfig = {
    key: 'root',
    timeout: 300, 
    storage,
    whitelist: ['user'],
    manualPersist: true // Add manual persist flag
};

const reducer = combineReducers({
    user: userReducer,
    loader: loaderReducer,
    firebase: firebaseReducer,
    session: historyReducer
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});



export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;
