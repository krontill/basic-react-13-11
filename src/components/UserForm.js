import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './UserForm.css';

class UserForm extends Component {
    static propTypes = {

    };

    state = {
        user: '',
        text: ''
    }

    handleChange = (ev, filed) => {
        const {value} = ev.target;
        console.log(filed);
        this.setState({
            [filed]: value.length < 100 ? value : this.state.user
        })
    };

    handleChangeUser = (ev) => {
        this.handleChange(ev, 'user');
    };

    handleChangeText = (ev) => {
	    this.handleChange(ev, 'text');
    };

    render() {
        console.log('---', this.state)
        const {user, text} = this.state;
	      const userValid = !((0 < user.length) && (user.length < 10));
	      const textValid = !((0 < text.length) && (text.length < 20));
        return (
            <form>
                <div>
                    Username: <input value = {user} onChange = {this.handleChangeUser} className={!userValid ? 'input--invalid': ''}/>
                    {!userValid? <div className="error">Имя должно быть больше 10 символов</div>:''}
                </div>
                <div>
                    Text: <textarea name="text" id="text" onChange = {this.handleChangeText} value={text}/>
	                  {!textValid? <div className="error">Текст должен быть больше 20 символов</div>:''}
                </div>
            </form>
        )
    }
}

export default UserForm