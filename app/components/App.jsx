import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
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
		};
	}
	componentDidMount() {
		request({
			url: 'http://localhost:4000/book',
			method: 'post',
			json: true,	 // <--Very important!!!
			body: { bookNumber: 1 },
		}, (error, response, body) => {
			// console.log(response, body);
		});
	}
	render() {
		return (
			<div>
				<Book bookName={this.state.bookName} text={this.state.bookText} />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('mountPoint'));
