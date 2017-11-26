import React, {Component} from 'react'
import ArticleList from './ArticleList'
import ArticlesChart from './ArticlesChart'
import UserForm from './UserForm'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';

class App extends Component {
    state = {
        selected: null,
        from: undefined,
        to: undefined,
    };

    handleDayClick = (day) => {
      const range = DateUtils.addDayToRange(day, this.state);
      this.setState(range);
    };

	handleResetClick = () => {
		this.setState({
      from: undefined,
      to: undefined,
    });
	};

    handleSelect = selected => this.setState({ selected })

    render() {
        const {articles} = this.props;
        const {from, to} = this.state;
	      const modifiers = { start: from, end: to };
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))
        return (
            <div>
                <h1>App name</h1>
              <p>
		            {!from && !to && 'Please select the first day.'}
		            {from && !to && 'Please select the last day.'}
		            {from &&
		            to &&
		            `Selected from ${from.toLocaleDateString()} to
                ${to.toLocaleDateString()}`}{' '}
		            {from &&
		            to && (
                  <button className="link" onClick={this.handleResetClick}>
                    Reset
                  </button>
		            )}
              </p>
                <DayPicker
                  className="Selectable"
                  selectedDays={[from, { from, to }]}
                  modifiers={modifiers}
                  onDayClick={this.handleDayClick}/>
                <UserForm />
                <Select options = {options} value = {this.state.selected} onChange = {this.handleSelect} multi />
                <ArticleList articles = {articles} defaultOpenId = {articles[0].id}/>
                <ArticlesChart articles = {articles} />
            </div>
        )
    }
}

export default App