import { all, takeLatest, call, put } from "redux-saga/effects";

// import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import {
  fetchCharactersSuccess,
  fetchCharactersFailed
} from "./characters.action";
import { CHARACTERS_ACTION_TYPES } from "./characters.types";

function* fetchCharactersStartAsync() {
  try {
    // const charactersArray = yield call(getCategoriesAndDocuments, "categories");
    const charactersArray: {} = [];
    yield put(fetchCharactersSuccess(charactersArray));
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
