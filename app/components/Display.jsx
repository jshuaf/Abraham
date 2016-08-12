import React from 'react';

const Heading = ({ type, children }) => {
	let fontSize;
	switch (type) {
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
		<h1 fontSize={fontSize} className="heading">{children}</h1>
	);
};

Heading.propTypes = {
	type: React.PropTypes.number.isRequired,
	children: React.PropTypes.any,
};

export default Heading;
