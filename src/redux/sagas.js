import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import * as types from './actionTypes';
import { getRecipes } from './api';

export function* onLoadRecipeAsync({ query }) {
  try {
    console.log('🚀 - onLoadRecipeAsync:', query);
    const response = yield call(getRecipes, query);
    yield put({ type: types.FETCH_RECIPE_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: types.FETCH_RECIPE_FAIL, payload: error });
  }
}

export function* onLoadRecipe() {
  console.log('onLoadRecipe', 16);
  yield takeLatest(types.FETCH_RECIPE_START, onLoadRecipeAsync);
}

const recipeSaga = [fork(onLoadRecipe)];

export default function* rootSaga() {
  yield all([...recipeSaga]);
}
