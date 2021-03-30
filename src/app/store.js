import { configureStore } from "@reduxjs/toolkit";

import songReducer from "../features/songSlice/songSlice";
import mp3SearchReducer from "../features/searchSlice/zingMp3Slice";
import soundCloudReducer from "../features/searchSlice/soundCloudSlice";
import youTubeReducer from "../features/searchSlice/youTubeSlice";

export default configureStore({
  reducer: {
    song: songReducer,
    mp3Search: mp3SearchReducer,
    soundCloudSearch: soundCloudReducer,
    youTubeSearch: youTubeReducer
  },
});
