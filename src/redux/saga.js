// @flow
import { delay, put, call, takeLatest } from 'redux-saga/effects'
import * as axios from 'axios'
import { requestGithub, onRequestSuccess } from './actionCreators'
import { FETCH_PROJECT } from './constants'

export function* watchFetch() {
	yield takeLatest(FETCH_PROJECT, fetchAsync)
}

function* fetchAsync(props) {
	try {
		yield delay(1000)
		yield put(requestGithub())
		const response = yield call(() =>
			axios.get(`https://api.github.com/search/repositories?q=${props.search}`)
		)
		yield put(onRequestSuccess(response.data))
	} catch (e) {
		console.log(e)
	}
}
