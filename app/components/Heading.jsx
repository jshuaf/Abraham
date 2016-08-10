import React from 'react';

class Heading extends React.Component {
	render() {
		let fontSize;
		switch (this.props.type) {
		case 1: {
			fontSize = '2.5rem';
			break;
		} case 2: {
			fontSize = '2rem';
			break;
		} default: {
			fontSize = '1.5rem';
			break;
		}
		}
		return (
			<h1 fontSize={fontSize} className="heading">{this.props.children}</h1>
		);
	}
}

Heading.propTypes = {
	type: React.PropTypes.number.isRequired,
	children: React.PropTypes.any,
};

export default Heading;
