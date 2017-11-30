import React, { Component } from 'react'
import PropTypes from 'prop-types';
import DateRange from './DateRange'
import SelectFilter from './Select'

class Filters extends Component {
    static propTypes = {
    };

	filterArticles = () => {
		return this.props.filterArticles(this.props.filter);
  }

    render() {
        return (
            <div>
                <SelectFilter articles = {this.props.articles}/>
                <DateRange filter={this.props.filter} changeFilter={this.props.changeFilter}/>
                <button onClick={this.filterArticles}>Filter Articles</button>
            </div>
        )
    }
}

Filters.propTypes = {
	filter: PropTypes.object.isRequired,
	articles: PropTypes.array.isRequired,
	changeFilter: PropTypes.func.isRequired
};

export default Filters