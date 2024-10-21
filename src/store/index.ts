import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { myFavoritesSlice } from "src/store/myFavorites";


export const store = configureStore({
  reducer: combineSlices(myFavoritesSlice),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
