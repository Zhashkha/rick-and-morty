import { combineReducers } from "redux";

import { charactersReducer } from "./characters/characters.reducer";

export const rootReducer = combineReducers({
  characters: charactersReducer
});
