import React, { PropTypes } from 'react';
import { Verse } from './Verse.jsx';

const Chapter = ({ text, details, notes }) => {
	const verses = [];
	for (let verseIndex = 0; verseIndex < text.length; verseIndex++) {
		verses.push(<Verse
			rawText={text[verseIndex]}
			notes={notes[verseIndex]}
			key={verseIndex}
			number={verseIndex + 1}
			indents={details.indents[verseIndex]}
			indentIndices={details.indentIndices[verseIndex]}
			jqIndices={details.jqIndices[verseIndex]}
		/>);
	}

	const style = {
		textAlign: 'left',
		lineHeight: '370%',
	};

	return (
		<div className="seven columns offset-by-two-and-one-half" style={style}>
			{verses}
		</div>
	);
};

const indicesArrayPropType = PropTypes.arrayOf(
	PropTypes.arrayOf(PropTypes.number.isRequired).isRequired
).isRequired;


Chapter.propTypes = {
	number: PropTypes.number.isRequired,
	text: PropTypes.arrayOf(
		PropTypes.string.isRequired
	).isRequired,
	details: PropTypes.shape({
		indents: indicesArrayPropType,
		indentIndices: indicesArrayPropType,
		jqIndices: indicesArrayPropType,
	}).isRequired,
	notes: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string.isRequired).isRequired),
};

export default Chapter;
