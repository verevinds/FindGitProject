// @flow
import { combineReducers } from 'redux'
import { CHANGE_SEARCH, REQUESTED, REQUESTED_SUCCEEDED } from './constants'

const initialState = {
	items: {},
	search: '',
	value: 0,
	uploadData: false
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case CHANGE_SEARCH:
			return {
				...state,
				search: action.text
			}
		case REQUESTED:
			return {
				...state,
				uploadData: false
			}
		case REQUESTED_SUCCEEDED:
			return {
				...state,
				items: action.data.items,
				uploadData: true
			}
	}
	return state
}

const CombineReducers = combineReducers({
	github: reducer
})
export default CombineReducers
