import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./root-reducer";
import {middleware} from "./middleware";

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            immutableCheck: false,
            serializableCheck: false,
            thunk: true,
        }).concat(middleware),
    devTools: false,
});

export type RootState = ReturnType<typeof store.getState>

export { store };
