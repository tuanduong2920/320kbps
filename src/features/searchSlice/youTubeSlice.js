import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { SearchByName } from "../../api/youtube/YouTubeApi";
import { localhost } from "../../env";

export const getSongByName = createAsyncThunk(
  "youTube/getSongByName",
  async (string) => {
    try {
      const { items } = await SearchByName(string);
      const arrItems = items.map((i) => {
        return {
          id: i.id.videoId,
          name: i.snippet.title,
          artist: i.snippet.channelTitle,
          thumb: i.snippet.thumbnails.medium.url,
          src:`${localhost}yt/audio/?id=${i.id.videoId}`
        };
      });

      return arrItems;
    } catch (e) {
      return [];
    }
  }
);

const youTubeSlice = createSlice({
  name: "soundCloud",
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

const youTubeReducer = youTubeSlice.reducer;
export const youTubeSelector = (state) => state.youTubeSearch;

export const { visibilitySearchList } = youTubeSlice.actions;

export default youTubeReducer;
