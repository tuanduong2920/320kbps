import { createSlice } from "@reduxjs/toolkit";
import SC from 'soundcloud';

const soundcloundSlice = createSlice({
  name: "soundCloud",
  initialState: {
    searchList: {
      list: [],
      visibility: false,
    },
  },
  reducers: {
    test: () => {
      try{
        SC.connect();
        console.log("sound clound test");
      }
      catch(e){
        console.log(e);
      }
      
      
    },
    // visibilitySearchList,
  },
});

const soundCloudReducer = soundcloundSlice.reducer;
export const soundCloudSelector = (state) => state.soundCloudSearch;

export const { test } = soundcloundSlice.actions;

export default soundCloudReducer;
