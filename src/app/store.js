import { configureStore } from '@reduxjs/toolkit';

import songReducer from '../features/songSlice/songSlice';

export default configureStore({
  reducer: {
    song: songReducer
  },
});
