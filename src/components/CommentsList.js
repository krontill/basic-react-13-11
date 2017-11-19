import React, {Component} from 'react';
import Comment from './Comment';

class CommentsList extends Component {
	render() {
		const {list} = this.props;
		let commentsList = '';
		if (list) {
			commentsList = list.map((comment) => {
				return <Comment key={comment.id} user={comment.user} text={comment.text}/>
			});
		}
		return (
			<div className="comments-list">{commentsList}</div>
		)
	}
}

export default CommentsList;