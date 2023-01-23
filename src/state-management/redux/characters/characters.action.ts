import { CHARACTERS_ACTION_TYPES } from "./characters.types";
import { createAction } from "../../../utils/redux";
import { CharactersInfoNormalized } from "../../graphql/normalization/get-characters-info";
import { CharactersNormalized } from "../../graphql/normalization/get-characters";

export const fetchCharactersStart = (page: number) =>
  createAction(CHARACTERS_ACTION_TYPES.FETCH_CHARACTERS_START, page);

export const fetchCharactersSuccess = (characters: CharactersNormalized) =>
  createAction(CHARACTERS_ACTION_TYPES.FETCH_CHARACTERS_SUCCESS, characters);

export const fetchCharactersFailed = (error: Error) =>
  createAction(CHARACTERS_ACTION_TYPES.FETCH_CHARACTERS_FAILED, error);

export const fetchCharactersInfoStart = () =>
  createAction(CHARACTERS_ACTION_TYPES.FETCH_CHARACTERS_INFO_START);

export const fetchCharactersInfoSuccess = (info: CharactersInfoNormalized) =>
  createAction(CHARACTERS_ACTION_TYPES.FETCH_CHARACTERS_INFO_SUCCESS, info);

export const fetchCharactersInfoFailed = (error: Error) =>
  createAction(CHARACTERS_ACTION_TYPES.FETCH_CHARACTERS_INFO_FAILED, error);

export const setCharactersPage = (page: number) =>
  createAction(CHARACTERS_ACTION_TYPES.SET_CHARACTERS_PAGE, page);

export const setCardExpanded = (page: number) =>
  createAction(CHARACTERS_ACTION_TYPES.SET_CHARACTERS_PAGE, page);
