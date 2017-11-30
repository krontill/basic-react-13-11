import {DELETE_ARTICLE, FILTER_ARTICLES} from '../constants'
import defaultArticles from '../fixtures'

export default (articlesState = defaultArticles, action) => {
	const {type, payload} = action

	switch (type) {
		case DELETE_ARTICLE:
			return articlesState.filter(article => article.id !== payload.id);
		case FILTER_ARTICLES:
			if (!payload.filter.from || !payload.filter.to) {
				return articlesState;
			}
			return articlesState.filter(article => {
				return (new Date(article.date).valueOf() > payload.filter.from.valueOf()) && (new Date(article.date).valueOf() < payload.filter.to.valueOf())
			})
	}

	return articlesState
}