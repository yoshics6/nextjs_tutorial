import {
  Action,
  combineReducers,
  AnyAction,
  ThunkAction,
  configureStore,
} from "@reduxjs/toolkit";

import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { loginReducer } from "@/features/admin/login";
import { newsReducer } from "@/features/admin/news";
import { userReducer } from "@/features/admin/user";
import { contactReducer } from "@/features/admin/contact";
import { bannerReducer } from "@/features/admin/banner";
import { testReducer } from "@/features/test";
import { saddleReducer } from "@/features/admin/saddle_stitch";
import { coverPaperReducer } from "@/features/admin/cover_paper";
import { textPaperReducer } from "@/features/admin/text_paper";
import { textNoReducer } from "@/features/admin/text_no";

const combinedReducer: any = combineReducers({
  login: loginReducer,
  news: newsReducer,
  user: userReducer,
  contact: contactReducer,
  banner: bannerReducer,
  teststore: testReducer,
  saddle_stitch: saddleReducer,
  cover_paper: coverPaperReducer,
  text_paper: textPaperReducer,
  text_no : textNoReducer,
});

// BINDING MIDDLEWARE
const bindMiddleware = (middleware: any) => {
  if (process.env.NODE_ENV !== "production") {
    const { composeWithDevTools } = require("redux-devtools-extension");
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

// const reducer = (state, action) => {
const reducer = (state: any, action: any) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
    if (state.count) nextState.count = state.count; // preserve count value on client side navigation
    return nextState;
  } else {
    return combinedReducer(state, action);
  }
};
const makeStore: any = ({ isServer }: any) => {
  if (isServer) {
    //If it's on server side, create a store
    return createStore(reducer, bindMiddleware([thunkMiddleware]));
    // return createStore(rootReducer, bindMiddleware([]));
  } else {
    //If it's on client side, create a store which will persist

    const persistConfig = {
      key: "root",
      storage,
      whitelist: ["counter", "kanyeQuote"],
    };

    const persistedReducer = persistReducer(persistConfig, reducer);

    const store: any = createStore(
      persistedReducer,
      bindMiddleware([thunkMiddleware])
    );
    store.__persistor = persistStore(store);
    return store;
  }
};

type Store = ReturnType<typeof makeStore>;
export type AppState = ReturnType<Store["getState"]>;
export type AppDispatch = Store["dispatch"];
export type RootState = ReturnType<Store["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export const wrapper = createWrapper<Store>(makeStore);
