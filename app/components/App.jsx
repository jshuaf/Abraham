import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';

import Chapter from './Chapter.jsx';

class App extends React.Component {
	render() {
		return (
			<div>
				<Chapter />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('mountPoint'));
