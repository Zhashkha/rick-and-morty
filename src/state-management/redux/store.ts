import { compose, createStore, applyMiddleware, Middleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { ApolloClient, InMemoryCache } from "@apollo/client";

import { rootReducer } from "./root.reducer";
import { rootSaga } from "./root.saga";
import { GRAPHQL_API } from "../../utils/constants";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["characters"]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const apolloClient = new ApolloClient({
  uri: GRAPHQL_API,
  cache: new InMemoryCache()
});

const sagaMiddleware = createSagaMiddleware({
  context: {
    apolloClient
  }
});

const middleWares = [
  process.env.NODE_ENV === "development" && logger,
  sagaMiddleware
].filter((middleware): middleware is Middleware => Boolean(middleware));

const composeEnhancer =
  (process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
