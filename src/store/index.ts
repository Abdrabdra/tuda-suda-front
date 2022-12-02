//library
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";

//reducer
import authReducer from "./reducers/auth/auth.slice";

//rtk
import homeApi from "./rtk-api/home-rtk/homeApi";
import userApi from "./rtk-api/user-rtk/userApi";
import postApi from "./rtk-api/post-rtk/postApi";

const rootReducer = combineReducers({
  auth: authReducer,

  [homeApi.reducerPath]: homeApi.reducer,
  [userApi.reducerPath]: userApi.reducer,
  [postApi.reducerPath]: postApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      homeApi.middleware,
      userApi.middleware,
      postApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
