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
	}
};

Filters.propTypes = {
	filter: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
	filter: state.filter
});

export default connect(mapStateToProps, {
	changeFilter: filter
})(Filters)