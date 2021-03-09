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
    currentSong: {},
    searchList: {
      list: [],
      visibility: false,
    },
    playList: [],
  },
  reducers: {
    addCurrentSong: (state, action) => {
      state.currentSong = action.payload;
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

//action creator
// export const getSongByName = (songName) => async (dispath) => {
//     try {
//         const response = await axios.get(`${httpProxy}fetch/http://ac.mp3.zing.vn/complete?type=artist,song,key,code&num=500&query=${songName}`)
//         console.log("songList", response);
//         if (response.status === 200) {
//             dispath(addSearchList(response.data));

//         }

//     }
//     catch (e) {
//         console.log('getSongErr', e);
//     }
// }

//reducer
const songReducer = songSlice.reducer;

export const songSelector = (state) => state.song;

export const {
  addCurrentSong,
  addSearchList,
  visibilitySearchList,
} = songSlice.actions;

export default songReducer;
