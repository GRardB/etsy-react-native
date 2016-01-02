import * as types from '../actions/game/types';

const initialState = {
  isLoading: true,
  listingOffset: 0,
  listing: {},
  guess: 0
};

export default function game(state = initialState, action = {}) {
  switch (action.type) {
    case types.SET_LOADING:
      return {
        ...state,
        isLoading: true,
        guess: 0,
      };
    case types.SET_LOADED:
      return {
        ...state,
        isLoading: false,
        listing: action.listing,
        listingOffset: state.listingOffset + 1
      };
    case types.SET_GUESS:
      return {
        ...state,
        guess: action.guess
      };
    default:
      return state;
  }
}
