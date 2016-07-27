import React, { PropTypes } from 'react';

const Verse = ({ text }) => {
	// add a space if needed
	if (text[text.length - 1] !== ' ') {
		text += ' ';
	}

	return (
		<div>
			<VerseText text={text} />
		</div>
	);
};

const VerseText = ({ text }) => {
	const style = {
		display: 'inline',
	};
	return <p style={style}>{text}</p>;
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
};

VerseText.propTypes = {
	text: PropTypes.string.isRequired,
};

VerseNote.propTypes = {
	text: PropTypes.string.isRequired,
};

module.exports = { Verse, VerseNote };
