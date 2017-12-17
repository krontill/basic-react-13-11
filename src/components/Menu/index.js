import React, { Component, Fragment } from 'react'
import MenuItem from './MenuItem'
import PropTypes from "prop-types";

//console.log('---', React.Fragment)
class Menu extends Component {
    static propTypes = {

    };
    static contextTypes = {
        dictionary: PropTypes.object,
        lang: PropTypes.string
    }

    render() {
        return (
            <Fragment>
                <h2>{this.context.lang === 'en' ? 'Main menu': this.context.dictionary['Main menu']}:</h2>
                {this.props.children}
            </Fragment>
        )
    }
}

export {MenuItem}
export default Menu