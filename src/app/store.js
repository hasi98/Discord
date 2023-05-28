import { configureStore } from "@reduxjs/toolkit";
import channelReducer from "../features/channalSlice";

export const store = configureStore({
  reducer: {
    channel: channelReducer,
  },
});