import { AnyAction } from "redux";

import { CHARACTERS_ACTION_TYPES } from "./characters.types";
import { Character } from "../../graphql/api-generated/graphql";

export type CharactersReducer = {
  characters: {
    [key: number]: Array<Character>;
  };
  pagination: {
    itemsCount: number;
    pagesCount: number;
    itemsPerPage: number;
    pageIndex: number;
  };
  filter: {
    name: string;
    status: string;
    species: string;
    gender: string;
  };
  isLoading: boolean;
  error: Error | null;
};

export const CHARACTERS_INITIAL_STATE: CharactersReducer = {
  characters: {},
  pagination: {
    itemsCount: 0,
    pagesCount: 0,
    itemsPerPage: 20,
    pageIndex: 1
  },
  filter: {
    name: "",
    status: "",
    species: "",
    gender: ""
  },
  isLoading: false,
  error: null
};

export const charactersReducer = (
  state = CHARACTERS_INITIAL_STATE,
  action: AnyAction
) => {
  const { type, payload } = action;

  switch (type) {
    case CHARACTERS_ACTION_TYPES.FETCH_CHARACTERS_START:
      return {
        ...state,
        isLoading: true
      };
    case CHARACTERS_ACTION_TYPES.FETCH_CHARACTERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        characters: { ...state.characters, ...payload }
      };
    case CHARACTERS_ACTION_TYPES.FETCH_CHARACTERS_FAILED:
      return { ...state, isLoading: false, error: payload };
    case CHARACTERS_ACTION_TYPES.FETCH_CHARACTERS_INFO_START:
      return {
        ...state,
        isLoading: true
      };
    case CHARACTERS_ACTION_TYPES.FETCH_CHARACTERS_INFO_SUCCESS:
      return {
        ...state,
        isLoading: false,
        pagination: { ...state.pagination, ...payload }
      };
    case CHARACTERS_ACTION_TYPES.FETCH_CHARACTERS_INFO_FAILED:
      return { ...state, isLoading: false, error: payload };
    case CHARACTERS_ACTION_TYPES.SET_CHARACTERS_PAGE:
      return {
        ...state,
        pagination: { ...state.pagination, pageIndex: payload }
      };
    case CHARACTERS_ACTION_TYPES.SET_CHARACTERS_FILTER:
      return {
        ...state,
        filter: { ...state.filter, ...payload }
      };
    case CHARACTERS_ACTION_TYPES.CLEAR_CHARACTERS:
      return {
        ...state,
        characters: {}
      };
    default:
      return state;
  }
};
