import React, {Component} from 'react'
import Article from './Article'
import {PropTypes} from 'prop-types'

export default class ArticleList extends Component {
    state = {
        openArticleId: null
    }

    static propTypes = {
        articles: PropTypes.array.isRequired
    };

    render() {
        const articleElements = this.props.articles.map((article, index) => <li key = {article.id}>
            <Article article = {article}
                     isOpen = {this.state.openArticleId === article.id}
                     toggleOpen = {this.toggleOpenArticle}
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

    toggleOpenArticle = openArticleId => this.setState({ openArticleId })
}