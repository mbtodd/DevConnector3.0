import { SET_ALERT, REMOVE_ALERT } from '../actions/types';

const initialState = [];

export default function name(state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		// Removed '' around SET_ALERT
		case SET_ALERT:
			return [
				...state,
				payload
			];
		case REMOVE_ALERT:
			return state.filter(alert => alert.id !== payload);
		default:
			return state;
	}
}
