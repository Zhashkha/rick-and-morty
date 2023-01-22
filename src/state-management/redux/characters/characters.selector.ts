import { createSelector } from "reselect";

import { RootState } from "../root.types";

const selectCharactersReducer = (state: RootState) => state.characters;

export const selectCharacters = createSelector(
  [selectCharactersReducer],
  (charactersReducer) => charactersReducer.characters
);

// export const selectCategoriesMap = createSelector(
//   [selectCategories],
//   (categories) =>
//     categories.reduce((acc, category) => {
//       const { title, items } = category;
//       acc[title.toLowerCase()] = items;
//       return acc;
//     }, {})
// );

export const selectIsLoading = createSelector(
  [selectCharactersReducer],
  (charactersReducer) => charactersReducer.isLoading
);
