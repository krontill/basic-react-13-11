import {FILTER} from '../constants'

const initialState = {
	from: null,
	to: null
};

export default (filter = initialState, action) => {
	return action.type === FILTER ? {...action.payload.newFilter} : filter;
}