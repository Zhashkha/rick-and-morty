import { AnyAction } from "redux";

import { CHARACTERS_ACTION_TYPES } from "./characters.types";

export const CHARACTERS_INITIAL_STATE = {
  characters: [],
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
      return { ...state, isLoading: false, categories: payload };
    case CHARACTERS_ACTION_TYPES.FETCH_CHARACTERS_FAILED:
      return { ...state, isLoading: false, error: payload };
    default:
      return state;
  }
};
