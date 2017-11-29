import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import PropTypes from 'prop-types'

import 'react-day-picker/lib/style.css'

class DateRange extends Component {

	handleDayClick = (day) => {
		return this.props.changeFilter(DateUtils.addDayToRange(day, this.props.filter));
	}

    render() {
        const { from, to } = this.props.filter;
        const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`
        return (
            <div className="date-range">
                <DayPicker
                    selectedDays={ day => DateUtils.isDayInRange(day, { from, to }) }
                    onDayClick={ this.handleDayClick }
                />
                {selectedRange}
            </div>
        )
    }

}

DateRange.propTypes = {
	filter: PropTypes.object.isRequired,
	changeFilter: PropTypes.func.isRequired
};

export default DateRange