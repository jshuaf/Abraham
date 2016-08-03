import React from 'react';
import ReactDOM from 'react-dom';
import request from 'request';

import Book from './Book.jsx';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			bookName: '',
			bookText: [],
			bookDetails: {},
			bookNotes: [],
		};
	}
	componentDidMount() {
		request({
			url: 'http://localhost:4000/book',
			method: 'post',
			json: true,
			body: { bookNumber: 1 },
		}, (error, response, body) => {
			this.setState(body);
		});
	}
	render() {
		return (
			<div>
				<Book
					bookName={this.state.bookName}
					text={this.state.bookText}
					details={this.state.bookDetails}
					notes={this.state.bookNotes}
				/>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('mountPoint'));
