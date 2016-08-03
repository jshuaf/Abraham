import React, { PropTypes } from 'react';

const Verse = ({ text, indent }) => {
	// add a space if needed
	if (text[text.length - 1] !== ' ') {
		text += ' ';
	}
	const style = {
		display: 'inline',
		color: '#58371C',
	};

	return (
		<p style={style}>{text}</p>
	);
};

const VerseNote = ({ text }) => {
	const style = {
	};
	return (
		<div style={style}>
			<p>{text}</p>
		</div>
	);
};

Verse.propTypes = {
	text: PropTypes.string.isRequired,
	number: PropTypes.number.isRequired,
	indent: PropTypes.string.isRequired,
};

VerseNote.propTypes = {
	text: PropTypes.string.isRequired,
};

module.exports = { Verse, VerseNote };
