import * as types from './types';

export function setLoading() {
  return {
    type: types.SET_LOADING
  };
}

export function setLoaded(listing) {
  return {
    type: types.SET_LOADED,
    listing
  };
}

export function setGuess(guess) {
  return {
    type: types.SET_GUESS,
    guess
  };
}
