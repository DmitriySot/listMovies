import { atom } from 'recoil';
import { localStorageEffect } from 'recoil/helper';

export const PERSIST_KEY = 'persist:common';

interface CommonProps {
  selectedMovie: number;
  favoriteMovies: number[];
}

const initialState: CommonProps = {
  selectedMovie: 1,
  favoriteMovies: [],
};

export const moviesAtom = atom<CommonProps>({
  key: 'commonState',
  default: initialState,
  effects_UNSTABLE: [localStorageEffect(PERSIST_KEY)],
});
