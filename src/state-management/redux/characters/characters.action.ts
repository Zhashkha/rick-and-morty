import { CHARACTERS_ACTION_TYPES } from "./characters.types";
import { createAction } from "../../../utils/redux";
import { GetCharactersInfoNormalized } from "../../graphql/normalization/get-characters-info";
import { GetCharactersNormalized } from "../../graphql/normalization/get-characters";
import { FilterCharacter } from "../../graphql/api-generated/graphql";

export const fetchCharactersStart = (page: number, filter?: FilterCharacter) =>
  createAction(CHARACTERS_ACTION_TYPES.FETCH_CHARACTERS_START, {
    page,
    filter
  });

export const fetchCharactersSuccess = (characters: GetCharactersNormalized) =>
  createAction(CHARACTERS_ACTION_TYPES.FETCH_CHARACTERS_SUCCESS, characters);

export const fetchCharactersFailed = (error: Error) =>
  createAction(CHARACTERS_ACTION_TYPES.FETCH_CHARACTERS_FAILED, error);

export const fetchCharactersInfoStart = (filter?: FilterCharacter) =>
  createAction(CHARACTERS_ACTION_TYPES.FETCH_CHARACTERS_INFO_START, filter);

export const fetchCharactersInfoSuccess = (info: GetCharactersInfoNormalized) =>
  createAction(CHARACTERS_ACTION_TYPES.FETCH_CHARACTERS_INFO_SUCCESS, info);

export const fetchCharactersInfoFailed = (error: Error) =>
  createAction(CHARACTERS_ACTION_TYPES.FETCH_CHARACTERS_INFO_FAILED, error);

export const setCharactersPage = (page: number) =>
  createAction(CHARACTERS_ACTION_TYPES.SET_CHARACTERS_PAGE, page);

export const setCharactersFilter = (filter: FilterCharacter) =>
  createAction(CHARACTERS_ACTION_TYPES.SET_CHARACTERS_FILTER, filter);

export const clearCharacters = () =>
  createAction(CHARACTERS_ACTION_TYPES.CLEAR_CHARACTERS);
