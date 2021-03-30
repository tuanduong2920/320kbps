import { createSlice } from "@reduxjs/toolkit";


const songSlice = createSlice({
  name: "song",
  initialState: {
    currentSong: null,
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
      console.log(state.queueList);
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
    preSong: (state, action) => {
      if (state.currentSong === null) return;
      const currentSongIndex = state.queueList.findIndex(
        (i) => i.id === state.currentSong.id
      );
      if (state.queueList[currentSongIndex - 1] === undefined) return;
      state.currentSong = state.queueList[currentSongIndex - 1];
    }
  },
});


//reducer
const songReducer = songSlice.reducer;

export const songSelector = (state) => state.song;

export const {
  addCurrentSong,
  addQueue,
  addQueueAndPlay,
  nextSong,
  preSong,
  removeSong,
} = songSlice.actions;

export default songReducer;
