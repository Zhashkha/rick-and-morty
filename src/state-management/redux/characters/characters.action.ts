import { CHARACTERS_ACTION_TYPES } from "./characters.types";
import { createAction } from "../../../utils/redux";
import { Character, Maybe } from "../../graphql/api-generated/graphql";

export const fetchCharactersStart = () =>
  createAction(CHARACTERS_ACTION_TYPES.FETCH_CHARACTERS_START);

export const fetchCharactersSuccess = (
  characters: Maybe<Maybe<Character>[]> | undefined
) => createAction(CHARACTERS_ACTION_TYPES.FETCH_CHARACTERS_SUCCESS, characters);

export const fetchCharactersFailed = (error: Error) =>
  createAction(CHARACTERS_ACTION_TYPES.FETCH_CHARACTERS_FAILED, error);
