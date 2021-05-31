import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import giftsReducer from './gift/reducer';
import user from './auth/reducer';

const middleware = [
  ...getDefaultMiddleware(),
];

export const store = configureStore({
    reducer: {
      rewards: giftsReducer,
      auth: user
    },
    middleware,
    devTools: process.env.NODE_ENV === 'development',
});