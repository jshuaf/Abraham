import Chapter from './Chapter.jsx';
import Verse from './Verse.jsx';
import React from 'react';
import ReactDOM from 'react-dom';

class Abraham extends React.Component {
	render() {
		return (
			<div>
				<Chapter />
				<Verse />
			</div>
		);
	}
}

ReactDOM.render(<Abraham />, document.getElementById('mountPoint'));
