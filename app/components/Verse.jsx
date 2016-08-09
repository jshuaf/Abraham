import React, { PropTypes } from 'react';

const Verse = ({ text, notes, indents, indentIndices, jqIndices }) => {
	// add a space if needed
	if (text[text.length - 1] !== ' ') {
		text += ' ';
	}

	let style = {
		color: '#58371C',
		marginLeft: 0,
	};
	const verse = [];
	const textWords = text.split(' ');
	for (let i = 0; i < indents.length; i++) {
		const indent = indents[i];
		const verseSection = textWords.slice(indentIndices[i], indentIndices[i + 1]).join(' ');

		style.marginLeft = indent * 30;
		if (indent !== 0) {
			verse.push(<br />);
		}
		verse.push(<span style={style} className="verseText" key={i}>{verseSection}</span>);
	}

	return (
		<div className="verse" style={{ display: 'inline' }}>
			{verse}
		</div>
	);
};

Verse.propTypes = {
	text: PropTypes.string.isRequired,
	number: PropTypes.number.isRequired,
};

module.exports = { Verse };
