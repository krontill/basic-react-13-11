import React, { Component } from 'react'
import ArticleList from '../ArticleList'

class ArticlesPage extends Component {
    static propTypes = {

    };

    render() {
        console.log('---', 2)
        return (
            <div>
                <h1>Please select article</h1>
                <ArticleList />
            </div>
        )
    }
}

export default ArticlesPage