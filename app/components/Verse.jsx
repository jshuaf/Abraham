import React, { PropTypes } from 'react';

const Verse = ({ text }) => {
	const style = {
		display: 'inline',
	};
	// add a space if needed
	if (text[text.length - 1] !== ' ') {
		text += ' ';
	}
	return <p style={style}>{text}</p>;
};

Verse.propTypes = {
	text: PropTypes.string.isRequired,
	number: PropTypes.number.isRequired,
};

export default Verse;
