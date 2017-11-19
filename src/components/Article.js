import React, {Component} from 'react'
import CommentsList from './CommentsList';

class Article extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isOpen: props.defaultOpen,
			isOpenComments: false
		}
	}

	componentWillMount() {
		console.log('---', 1)
	}

	componentDidMount() {
		console.log('---', 2)
	}

	componentWillReceiveProps(nextProps) {
		console.log('---', 'receive props :(((');

		if (nextProps.defaultOpen !== this.props.defaultOpen) this.setState({
			isOpen: nextProps.defaultOpen
		})
	}

	componentWillUpdate() {
		console.log('---', 'will update')
	}

	render() {
		const {article} = this.props;
		const body = this.state.isOpen && <section>{article.text}</section>;
		const comments = this.state.isOpenComments && <CommentsList list={article.comments}/>; /*this.state.isOpen &&*/
		let linkComments = '';
		//if (this.state.isOpen && article.comments) { Для варианта когда ссылка на комментарии только при открытой статье
		if (article.comments) {
			linkComments = (
				<a href="#" onClick={this.toggleComments}>
					{this.state.isOpenComments ? 'Close comments' : 'Open comments'}
				</a>)
		}
		return (
			<div>
				<h2>
					{article.title}
					<button onClick={this.handleClick}>
						{this.state.isOpen ? 'close' : 'open'}
					</button>
				</h2>
				{body}
				<h3>creation date: {(new Date(article.date)).toDateString()}</h3>
				{linkComments}
				{comments}
			</div>
		)
	}

	handleClick = () => {
		this.setState({
			isOpen: !this.state.isOpen
		})
	};

	toggleComments = () => {
		this.setState({
			isOpenComments: !this.state.isOpenComments
		});
		return false;
	}
}

export default Article;