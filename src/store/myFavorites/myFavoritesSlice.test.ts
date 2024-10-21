import { myFavoritesSlice, addToMyFavorites, removeFromMyFavorites } from './index';
import { MyFavoritesState } from './index'; 

describe('myFavoritesSlice', () => {
  let initialState: MyFavoritesState;

  beforeEach(() => {
    initialState = {
      favorites: []
    };
    jest.spyOn(Storage.prototype, 'getItem').mockReturnValue(null); 
    jest.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should handle initial state', () => {
    expect(myFavoritesSlice.reducer(undefined, { type: 'unknown' })).toEqual({
      favorites: [],
    });
  });

  it('should add a city to favorites', () => {
    const city = 'New York';
    const action = addToMyFavorites(city);
    const newState = myFavoritesSlice.reducer(initialState, action);
    
    expect(newState.favorites).toContain(city);
    expect(localStorage.setItem).toHaveBeenCalledWith('favorites', JSON.stringify([city]));
  });

  it('should not add a duplicate city to favorites', () => {
    initialState.favorites = ['New York'];
    const action = addToMyFavorites('New York');
    const newState = myFavoritesSlice.reducer(initialState, action);
    
    expect(newState.favorites).toEqual(['New York']); 
    expect(localStorage.setItem).toHaveBeenCalledTimes(0); 
  });

  it('should remove a city from favorites', () => {
    initialState.favorites = ['New York', 'Los Angeles'];
    const action = removeFromMyFavorites('New York');
    const newState = myFavoritesSlice.reducer(initialState, action);
    
    expect(newState.favorites).not.toContain('New York');
    expect(newState.favorites).toContain('Los Angeles');
    expect(localStorage.setItem).toHaveBeenCalledWith('favorites', JSON.stringify(['Los Angeles']));
  });

  it('should do nothing when removing a city not in favorites', () => {
    initialState.favorites = ['Los Angeles'];
    const action = removeFromMyFavorites('New York');
    const newState = myFavoritesSlice.reducer(initialState, action);

    expect(newState.favorites).toEqual(['Los Angeles']);
    expect(localStorage.setItem).toHaveBeenCalledTimes(0);
  });
});