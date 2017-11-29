import React, { Component } from 'react'
import PropTypes from 'prop-types';
import DateRange from './DateRange'
import SelectFilter from './Select'
import {connect} from 'react-redux'
import {filter} from '../../AC/index'

class Filters extends Component {
    static propTypes = {
    };

    render() {
        return (
            <div>
                <SelectFilter articles = {this.props.articles}/>
                <DateRange filter={this.props.filter} changeFilter={this.props.changeFilter}/>
            </div>
        )
    }
}

Filters.defaultProps = {
	filter: {
		from: null,
		to: null
	},
	articles: []
};

Filters.propTypes = {
	filter: PropTypes.object.isRequired,
	articles: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
	filter: state.filter,
	articles: state.articles
});

export default connect(mapStateToProps, {
	changeFilter: filter
})(Filters)