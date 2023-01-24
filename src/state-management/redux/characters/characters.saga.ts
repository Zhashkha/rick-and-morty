import { AnyAction } from "redux";
import { all, takeLatest, call, put, getContext } from "redux-saga/effects";
import { ApolloClient, NormalizedCacheObject } from "@apollo/client";

import GET_CHARACTERS from "../../graphql/queries/get-characters";
import GET_CHARACTERS_INFO from "../../graphql/queries/get-characters-info";
import { Character, Info, Maybe } from "../../graphql/api-generated/graphql";
import {
  fetchCharactersSuccess,
  fetchCharactersFailed,
  fetchCharactersInfoSuccess,
  fetchCharactersInfoFailed
} from "./characters.action";
import { CHARACTERS_ACTION_TYPES } from "./characters.types";
import { charactersInfoNormalize } from "../../graphql/normalization/get-characters-info";
import { charactersNormalize } from "../../graphql/normalization/get-characters";

function* fetchCharactersStartAsync({
  payload: { page: pageIndex, filter }
}: AnyAction) {
  try {
    const apolloClient: ApolloClient<NormalizedCacheObject> = yield getContext(
      "apolloClient"
    );

    const {
      data: {
        characters: { results }
      }
    }: { data: { characters: { results: Maybe<Array<Maybe<Character>>> } } } =
      yield call(apolloClient.query, {
        query: GET_CHARACTERS,
        variables: {
          page: pageIndex,
          filter
        }
      });

    yield put(fetchCharactersSuccess(charactersNormalize(pageIndex, results)));
  } catch (error) {
    yield put(fetchCharactersFailed(error as Error));
  }
}

function* fetchCharactersInfoStartAsync({ payload: filter }: AnyAction) {
  try {
    const apolloClient: ApolloClient<NormalizedCacheObject> = yield getContext(
      "apolloClient"
    );

    const {
      data: {
        characters: { info }
      }
    }: { data: { characters: { info: Maybe<Info> } } } = yield call(
      apolloClient.query,
      {
        query: GET_CHARACTERS_INFO,
        variables: {
          filter
        }
      }
    );

    yield put(fetchCharactersInfoSuccess(charactersInfoNormalize(info)));
  } catch (error) {
    yield put(fetchCharactersInfoFailed(error as Error));
  }
}

function* onfetchCharacters() {
  yield takeLatest(
    CHARACTERS_ACTION_TYPES.FETCH_CHARACTERS_START,
    fetchCharactersStartAsync
  );
}

function* onfetchCharactersInfo() {
  yield takeLatest(
    CHARACTERS_ACTION_TYPES.FETCH_CHARACTERS_INFO_START,
    fetchCharactersInfoStartAsync
  );
}

export function* charactersSaga() {
  yield all([call(onfetchCharacters), call(onfetchCharactersInfo)]);
}
