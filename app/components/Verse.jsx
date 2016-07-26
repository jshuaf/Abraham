import React, { PropTypes } from 'react';

const Verse = ({ text }) => {
	// add a space if needed
	if (text[text.length - 1] !== ' ') {
		text += ' ';
	}

	// check for notes in verse
	const noteMatcher = /\{([^}]+)\}/ig;
	const notes = [];
	const matches = text.match(noteMatcher);
	if (matches) {
		for (let i = 0; i < matches.length; i++) {
			const match = matches[i];
			notes.push(<VerseNote text={match} />);
			text = text.replace(match, '');
		}
	}

	return (
		<div>
			<VerseText text={text} />
			{matches}
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
	return (
		<div>
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

export default Verse;
