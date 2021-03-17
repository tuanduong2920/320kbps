import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { SearchbyName } from "../../api/zmp3/SongApi";

export const getSongByName = createAsyncThunk(
  "song/getSongByName",
  async (songName) => {
    try {
      const response = await SearchbyName(songName);
      return response;
    } catch (error) {
      throw error;
    }
  }
);

const songSlice = createSlice({
  name: "song",
  initialState: {
    currentSong: null,
    searchList: {
      list: [],
      visibility: false,
    },
    queueList: [],
  },
  reducers: {
    addCurrentSong: (state, action) => {
      state.currentSong = action.payload;
    },
    addQueueAndPlay: (state, action) => {
      state.currentSong = action.payload;
      let arr = [...state.queueList];
      const itemIndex = arr.findIndex((i) => i.id === action.payload.id);

      if (itemIndex !== -1) {
        state.queueList = arr;
        return;
      }
      arr.unshift(action.payload);
      state.queueList = arr;
    },
    addQueue: (state, action) => {
      let arr = [...state.queueList];
      const itemIndex = arr.findIndex((i) => i.id === action.payload.id);

      if (itemIndex !== -1) {
        return;
      }
      arr.push(action.payload);
      state.queueList = arr;
    },
    removeSong: (state, action) => {
      let arr = [...state.queueList];
      const itemIndex = arr.findIndex((i) => i.id === action.payload);
      arr = [...arr.slice(0, itemIndex), ...arr.slice(itemIndex + 1)];
      state.queueList = arr;
    },
    nextSong: (state) => {
      if (state.currentSong === null) return;
      const currentSongIndex = state.queueList.findIndex(
        (i) => i.id === state.currentSong.id
      );

      if (state.queueList[currentSongIndex + 1] === undefined) return;
      state.currentSong = state.queueList[currentSongIndex + 1];
    },
    addSearchList: (state, action) => {
      const { data } = action.payload;
      if (data === undefined || data.length === 0) {
        state.searchList.list = [];
        return;
      }

      state.searchList.list = data[0].song ? data[0].song : [];
    },
    visibilitySearchList: (state) => {
      state.searchList.visibility = true;
    },
  },
  extraReducers: {
    [getSongByName.fulfilled]: (state, action) => {
      const data = action.payload;
      if (
        data[0] === undefined ||
        data[0].length === 0 ||
        data[0].song === undefined
      ) {
        state.searchList.list = [];
        return;
      }

      state.searchList.list = data[0].song ? data[0].song : [];
    },
  },
});

//reducer
const songReducer = songSlice.reducer;

export const songSelector = (state) => state.song;

export const {
  addCurrentSong,
  addSearchList,
  visibilitySearchList,
  addQueue,
  addQueueAndPlay,
  nextSong,
  removeSong,
} = songSlice.actions;

export default songReducer;
