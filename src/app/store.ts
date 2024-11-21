import { configureStore } from '@reduxjs/toolkit';
import { optCharRecognitionApi } from '@src/features/queries/ocr-query';

export const store = configureStore({
  reducer: {
    [optCharRecognitionApi.reducerPath]: optCharRecognitionApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(optCharRecognitionApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
