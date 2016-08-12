import React, { PropTypes } from 'react';

const Verse = ({ rawText, indents, indentIndices }) => {
	// add a space if needed
	const text = rawText[rawText.length - 1] === ' ' ? rawText : `${rawText} `;

	let style = {
		color: '#58371C',
		marginLeft: 0,
		fontSize: '2rem',
	};

	const verse = [];
	const textWords = text.split(' ');
	for (let i = 0; i < indents.length; i++) {
		const indent = indents[i];
		const verseSection = textWords.slice(indentIndices[i], indentIndices[i + 1]).join(' ');

		style.marginLeft = indent * 30;
		if (indent !== 0) {
			verse.push(<br key={i + 0.5} />);
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
	rawText: PropTypes.string.isRequired,
	indents: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
	indentIndices: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
	number: PropTypes.number.isRequired,
};

module.exports = { Verse };
