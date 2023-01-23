import { all, takeLatest, call, put, getContext } from "redux-saga/effects";
import { ApolloClient, NormalizedCacheObject } from "@apollo/client";

import GET_CHARACTERS from "../../graphql/queries/get-characters";
import { Characters } from "../../graphql/api-generated/graphql";

import {
  fetchCharactersSuccess,
  fetchCharactersFailed
} from "./characters.action";
import { CHARACTERS_ACTION_TYPES } from "./characters.types";

function* fetchCharactersStartAsync() {
  try {
    const apolloClient: ApolloClient<NormalizedCacheObject> = yield getContext(
      "apolloClient"
    );
    // const charactersArray = yield call(getCategoriesAndDocuments, "categories");
    // const characters = yield apolloClient.query({query: GET_CHARACTERS});
    const {
      data: { characters }
    }: { data: { characters: Characters } } = yield call(apolloClient.query, {
      query: GET_CHARACTERS
    });
    console.log(characters);
    // normalizer goes here
    const { results } = characters;
    // const charactersArray: {} = [];
    // yield put(fetchCharactersSuccess(charactersArray));
    yield put(fetchCharactersSuccess(results));
  } catch (error) {
    yield put(fetchCharactersFailed(error as Error));
  }
}

function* onfetchCharacters() {
  yield takeLatest(
    CHARACTERS_ACTION_TYPES.FETCH_CHARACTERS_START,
    fetchCharactersStartAsync
  );
}

export function* charactersSaga() {
  yield all([call(onfetchCharacters)]);
}
