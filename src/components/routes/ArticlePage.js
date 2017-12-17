import React, { Component } from 'react'
import Article from '../Article'

class ArticlePage extends Component {
    render() {
        return (
            <div>
                <Article id={this.props.match.params.id} isOpen key={this.props.match.params.id} />
            </div>
        )
    }
}

export default ArticlePage