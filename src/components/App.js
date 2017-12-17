import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Route, Switch, NavLink, Redirect} from 'react-router-dom'
import ArticlesPage from './routes/ArticlesPage'
import ArticlePage from './routes/ArticlePage'
import CommentsPage from './routes/CommentsPage'
import UserForm from './UserForm'
import Filters from './Filters'
import Counter from './Counter'
import Menu, {MenuItem} from './Menu'

class App extends Component {
    static childContextTypes = {
        username: PropTypes.string,
        dictionary: PropTypes.object,
        lang: PropTypes.string
    }

    getChildContext() {
        return {
            username: this.state.user,
            dictionary: this.state.dictionary,
            lang: this.state.lang
        }
    }

/*
    getTranslation = (lang, dictionary, text) => () => {
        if(lang === 'en') {
            return text;
        } else if (lang === 'ru') {
            return dictionary[text];
        }
    };
*/

    state = {
        user: '',
        lang: 'en',
        dictionary: {
            'App name': 'Название приложения',
            'Main menu': 'Главное меню'
        }
    };

    handleUserChange = user => this.setState({ user })

    switchLang = (lang) => () => this.setState({lang});

    render() {
        console.log('---', 1, this.state.lang)
        return (
            <div>
                <h1>{this.state.lang === 'en' ? 'App name': this.state.dictionary['App name']}</h1>
                <button onClick={this.switchLang('ru')}>ru</button>
                <button onClick={this.switchLang('en')}>en</button>
                <UserForm value = {this.state.user} onChange = {this.handleUserChange}/>
                <Menu>
                    <MenuItem url="/counter">Counter</MenuItem>
                    <MenuItem url="/articles">Articles</MenuItem>
                    <MenuItem url="/filters">Filters</MenuItem>
                    <MenuItem url="/comments/1">Comments</MenuItem>
                </Menu>
                <Switch>
                    <Redirect from="/" exact to="/articles"/>
                    <Route path="/counter" component={Counter} strict exact/>
                    <Route path="/filters" component={Filters}/>
                    <Route path="/articles/new" render={() => <h1>New Article</h1>}/>
                    <Route path="/articles" component={ArticlesPage}/>
                    <Route path="/article/:id" component={ArticlePage}/>
                    <Route path="/comments" component = {CommentsPage}/>
                    <Route path="/error" component = {() => <h1>Oooops!</h1>}/>
                    <Route path="*" render={() => <h1>Not found</h1>}/>
                </Switch>
            </div>
        )
    }
}

export default App