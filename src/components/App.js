import React, {Component} from 'react'
import ArticleList from './ArticleList'
import UserForm from './UserForm'
import Filters from './Filters'
import Counter from './Counter'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {filter} from '../AC/index'

class App extends Component {
		state = {
			items: []
		};
		filterArticles = (filter) => {
			this.setState({
				items: this.props.articles.filter(article => {
					return (new Date(article.date).valueOf() > filter.from.valueOf())&&(new Date(article.date).valueOf() < filter.to.valueOf())
				})
			})
		};
    render() {
    	let {items} = this.state;
	    if(items.length === 0) {
		    items = this.props.articles
	    }
        return (
            <div>
                <h1>App name</h1>
                <Counter />
                <UserForm />
                <Filters articles = {this.props.articles} filter={this.props.filter} changeFilter={this.props.changeFilter} filterArticles={this.filterArticles}/>
                <ArticleList articles={items}/>
            </div>
        )
    }
}

App.defaultProps = {
	filter: {
		from: null,
		to: null
	},
	articles: []
};

App.propTypes = {
	filter: PropTypes.object.isRequired,
	articles: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
	filter: state.filter,
	articles: state.articles
});

export default connect(mapStateToProps, {
	changeFilter: filter
})(App)