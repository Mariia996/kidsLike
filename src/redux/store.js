import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import user from './auth/reducer';
import tasks from './task/reducer';
import giftsReducer from './gift/reducer';

const middleware = [
  ...getDefaultMiddleware(),
];

export const store = configureStore({
    reducer: {
      auth: user,
      tasks,
      rewards: giftsReducer,
    },
    middleware,
    devTools: process.env.NODE_ENV === 'development',
});