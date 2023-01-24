import { createSelector } from "reselect";

import { RootState } from "../root.types";

const selectCharactersReducer = (state: RootState) => state.characters;

export const selectCharacters = createSelector(
  [selectCharactersReducer],
  (charactersReducer) => charactersReducer.characters
);

export const selectCharactersByPage = (page: number) =>
  createSelector([selectCharacters], (characters) => characters[page]);

export const selectIsPageFetched = (page: number) =>
  createSelector([selectCharacters], (characters) => !!characters[page]);

export const selectCharactersFilter = createSelector(
  [selectCharactersReducer],
  (charactersReducer) => charactersReducer.filter
);

export const selectCharactersIsLoading = createSelector(
  [selectCharactersReducer],
  (charactersReducer) => charactersReducer.isLoading
);

export const selectCharactersPagination = createSelector(
  [selectCharactersReducer],
  (charactersReducer) => charactersReducer.pagination
);

export const selectCharactersPageIndex = createSelector(
  [selectCharactersPagination],
  (charactersPagination) => charactersPagination.pageIndex
);
