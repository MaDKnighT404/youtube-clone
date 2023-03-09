import { configureStore } from '@reduxjs/toolkit';
import { YoutubeSlice } from './Slices/YoutubeSlice';

export const store = configureStore({
  reducer: {
    youtubeApp: YoutubeSlice.reducer
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;