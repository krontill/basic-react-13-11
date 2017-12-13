import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import CommentList from '../CommentList'
import Comment from '../Comment'
import {articleSelector, articlesLoadingSelector, filtratedArticlesSelector} from "../../selectors";
import {connect} from "react-redux";
import {loadAllArticles, loadArticleById, loadArticleComments} from "../../AC";
import PropTypes from "prop-types";
import Loader from './../common/Loader';
import {NavLink} from 'react-router-dom';

class CommentsPage extends Component {
    componentDidMount() {
        this.props.loadAllArticles()
    }
    componentWillReceiveProps({ isOpen, article, loadArticleComments }) {
        if (!this.props.isOpen && isOpen && !article.commentsLoading && !article.commentsLoaded) {
            loadArticleComments(article.id)
        }
    }

    render() {
        const {articles, loading} = this.props;
        console.log('---', this.props.match);
        // console.log('articles', articles);
        // console.log('loading', loading);
        if (loading) return <Loader/>
        if (!articles.length) return <h3>No Articles</h3>
        const articleElements = articles.map((article) => <li key={article.id}>
            Article: <NavLink activeStyle={{color: 'red'}} to={`/comments/${article.id}`}>{article.title}</NavLink>
            <ol>{/*{console.log(article.comments)}*/}
                {article.comments.length > 0 ? <h4>Comments id:</h4> : <h4>No comments</h4>}
                {article.comments.length > 0 ? article.comments.map((comment) => <li key={comment}>
                    <NavLink activeStyle={{color: 'red'}} to={`/comments/${comment}`}>{comment}</NavLink>
                </li>) : null}
            </ol>
        </li>);
        return (
            <div>
                {articleElements}
                {/*<CommentList /> */}{/*id articles*/}
                <Route path={`${this.props.match.path}/:id`} children={this.getComment}/>
            </div>
        )
    }

    getComment = ({match}) => {
        if (!match) return <h1>Please select comments</h1>
        console.log(match.params.id);

        const article = loadArticleById(match.params.id);
        console.dir('article', article);
        const comments = loadArticleComments(article);
        console.dir('comments', comments);
        return comments.map(id => <li key = {id}>{console.log('id', id)}<Comment id = {id} /></li>);
        // return comments.map(id => <li key = {id}><Comment id = {id} /></li>)
        // return <Comment id={match.params.id} key={match.params.id}/>
        // console.log('CommentList...', match.params.id);
        // return <CommentList article = {loadArticleById(match.params.id)} key = {match.params.id}/>
    }
}

CommentsPage.defaultProps = {
    articles: []
};

CommentsPage.propTypes = {
    articles: PropTypes.array.isRequired
};

export default connect(state => {
    return {
        articles: filtratedArticlesSelector(state),
        loading: articlesLoadingSelector(state)
    }
}, {loadAllArticles, loadArticleComments, loadArticleById})(CommentsPage)
// export default CommentsPage