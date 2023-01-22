import { CHARACTERS_ACTION_TYPES } from "./characters.types";
import { createAction } from "../../../utils/redux";

export const fetchCharactersStart = () =>
  createAction(CHARACTERS_ACTION_TYPES.FETCH_CHARACTERS_START);

export const fetchCharactersSuccess = (charactersArray: {}) =>
  createAction(
    CHARACTERS_ACTION_TYPES.FETCH_CHARACTERS_SUCCESS,
    charactersArray
  );

export const fetchCharactersFailed = (error: Error) =>
  createAction(CHARACTERS_ACTION_TYPES.FETCH_CHARACTERS_FAILED, error);
