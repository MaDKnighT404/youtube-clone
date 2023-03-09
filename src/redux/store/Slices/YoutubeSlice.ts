import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { InitialState } from '../../../Types';

const initialState: InitialState = {
  videos: [],
  currentPlaying: null,
  searchTerm: '',
  searchResults: [],
  nextPageToken: null,
  recommendedVideos: [],
};

export const YoutubeSlice = createSlice({
  name: 'youtubeApp',
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});
