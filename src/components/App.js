import React from 'react'
import ArticleList from './ArticleList'
import {PropTypes} from 'prop-types'

function App({ articles }) {
    return (
        <div>
            <h1>App name</h1>
            <ArticleList articles = {articles} />
        </div>
    )
}

App.propTypes = {
	articles: PropTypes.array.isRequired
};

export default App