import { FILTER_ARTICLES } from '../constants'
import defaultArticles from '../fixtures'

export default (articlesState = defaultArticles, action) => {
	const { type, payload } = action



	switch (type) {
		case FILTER_ARTICLES:
			return articlesState.filter(article => {
				//console.log(new Date(article.date).valueOf(), payload.filter.from.valueOf(), payload.filter.to.valueOf());
				return (new Date(article.date).valueOf() > payload.filter.from.valueOf())&&(new Date(article.date).valueOf() < payload.filter.to.valueOf())
			})
	}

	return articlesState
}


