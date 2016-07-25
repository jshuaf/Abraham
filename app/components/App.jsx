import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';

import Book from './Book.jsx';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			bookName: null,
			bookText: null,
		};
	}
	componentDidMount() {

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
