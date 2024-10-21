import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface MyFavoritesState {
  favorites: string[];
}

const getFavoritesFromLocalStorage = (): string[] => {
  const storedFavorites = localStorage.getItem("favorites");
  return storedFavorites ? JSON.parse(storedFavorites) : [];
};
const initialState: MyFavoritesState = {
  favorites: getFavoritesFromLocalStorage(),
};

export const myFavoritesSlice = createSlice({
  name: "myFavorites",
  initialState,
  reducers: {
    addToMyFavorites(state, action: PayloadAction<string>) {
      if (!state.favorites.includes(action.payload)) {
        state.favorites.push(action.payload);
        localStorage.setItem("favorites", JSON.stringify(state.favorites));
      }
    },
    removeFromMyFavorites: (state, action: PayloadAction<string>) => {
      if (state.favorites.includes(action.payload)) {
        state.favorites = state.favorites.filter(
          (city) => city !== action.payload
        );
        localStorage.setItem("favorites", JSON.stringify(state.favorites));
      }
    },
  },
  selectors: {
    selectCities: (state) => state.favorites,
  },
});

export const { selectCities } = myFavoritesSlice.selectors;
export const { addToMyFavorites, removeFromMyFavorites } =
  myFavoritesSlice.actions;
