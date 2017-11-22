import React, {Component} from 'react'
import Article from './Article'
import {PropTypes} from 'prop-types'
import toggleOpenArticle from '../decorators/toggleOpenArticle'

class ArticleList extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    };

    render() {
	    const {openArticleId, toggleOpenArticle} = this.props;
        const articleElements = this.props.articles.map((article, index) => <li key = {article.id}>
            <Article article = {article}
                     isOpen = {openArticleId === article.id}
                     toggleOpen = {toggleOpenArticle}
            />
        </li>)
        return (
            <ul>
                {articleElements}
            </ul>
        )
    }
/*

    toggleOpenArticleWitoutCurr(openArticleId) {
        this.setState({ openArticleId })
    }
*/


}

export default toggleOpenArticle(ArticleList);