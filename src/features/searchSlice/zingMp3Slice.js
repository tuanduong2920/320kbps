import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { SearchbyName } from "../../api/zmp3/SongApi";
import { myProxy } from "../../env";

export const getSongByName = createAsyncThunk(
  "mp3/getSongByName",
  async (songName) => {
    try {
      const response = await SearchbyName(songName);
      console.log("response", response);
      if (
        response[0] === undefined ||
        response[0].length === 0 ||
        response[0].song === undefined
      ) {
        return;
      }
      const data = response[0].song ? response[0].song : [];
      const arrRes =  data.map((i) => {
        return {
          id: i.id,
          name: i.name,
          artist: i.artist,
          thumb: `https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/${i.thumb}`,
          src:`${myProxy}stream/?url=http://api.mp3.zing.vn/api/streaming/audio/${i.id}/320`
        };
      });
      return arrRes;
    } catch (error) {
      throw error;
    }
  }
);

const zingMp3Slice = createSlice({
  name: "mp3",
  initialState: {
    searchList: {
      list: [],
      visibility: false,
    },
  },
  reducers: {
 
    visibilitySearchList: (state) => {
      state.searchList.visibility = true;
    },
  },
  extraReducers: {
    [getSongByName.fulfilled]: (state, action) => {
      
      state.searchList.list = action.payload;
    },
  },
});

const mp3Reducer = zingMp3Slice.reducer;
export const mp3Selector = (state) => state.mp3Search;

export const { visibilitySearchList } = zingMp3Slice.actions;

export default mp3Reducer;
