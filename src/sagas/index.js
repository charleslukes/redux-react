import {takeEvery, call, put} from 'redux-saga/effects'

export default function* watcherSaga() {
  yield takeEvery('DATA_REQUESTED', workerSage);
}

function* workerSage() {
  try {
    const payload = yield call(getData);
    yield put({ type: 'DATA_LOADED', payload});
  } catch (error) {
    yield put({ type: 'API_ERROR', payload: error});    
  }
}

async function getData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  return await response.json();
}
