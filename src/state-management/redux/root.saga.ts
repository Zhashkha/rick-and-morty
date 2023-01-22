import { all, call } from "redux-saga/effects";

import { charactersSaga } from "./characters/characters.saga";

export function* rootSaga() {
  yield all([call(charactersSaga)]);
}
