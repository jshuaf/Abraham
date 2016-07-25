import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';

import Book from './Book.jsx';

class App extends React.Component {
	render() {
		return (
			<div>
				<Book />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('mountPoint'));
