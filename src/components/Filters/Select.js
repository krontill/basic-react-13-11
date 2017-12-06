import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import { connect } from 'react-redux'
import { changeSelection } from '../../AC'
import {createArticlesSelector} from '../../selectors'

import 'react-select/dist/react-select.css'

class SelectFilter extends Component {
    static propTypes = {
        articles: PropTypes.object.isRequired
    };

    handleChange = selected => this.props.changeSelection(selected.map(option => option.value))

    render() {
        const { articles, selected } = this.props
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))

        return <Select
            options={options}
            value={selected}
            onChange={this.handleChange}
            multi
        />
    }
}

const createMapStateToProps = () => {
	const articleSelector = createArticlesSelector();

	return (state, ownProps) => ({
		selected: state.filters.selected,
		articles: articleSelector(state.articles, ownProps)
	})
};

export default connect(createMapStateToProps, { changeSelection })(SelectFilter)