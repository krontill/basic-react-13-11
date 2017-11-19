import React, {Component} from 'react';

class Comment extends Component {
	render() {
		const {user, text} = this.props;
		return (
			<div className="comment">
				<div>{user}</div>
				<div>{text}</div>
			</div>
		)
	}
}

export default Comment;
