import {INCREMENT, DELETE_ARTICLE, FILTER, FILTER_ARTICLES} from '../constants'

export function increment() {
    const action = { type: INCREMENT }
    return action
}

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: { id }
    }
}

export function filter(newFilter) {
	const action = { type: FILTER, payload: {newFilter}}
	return action
}

export function filterArticles(filter) {
	return {
		type: FILTER_ARTICLES,
		payload: { filter }
	}
}