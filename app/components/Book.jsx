import React, { PropTypes } from 'react';
import Chapter from './Chapter.jsx';

const Book = ({ text, details, notes }) => {
	console.log(text, details, notes);
	const chapters = [];
	for (let i = 0; i < text.length; i++) {
		const chapterText = text[i];
		const chapterDetails = {
			indents: details.indents[i],
			indentIndices: details.indentIndices[i],
			jqIndices: details.jqIndices[i],
		};
		const chapterNotes = notes[i];
		chapters.push(<Chapter
			text={chapterText}
			details={chapterDetails}
			notes={chapterNotes}
			number={i + 1} key={i + 1}
		/>);
	}
	return <div className="row">{chapters}</div>;
};

const indicesArrayPropType = PropTypes.arrayOf(
	PropTypes.arrayOf(PropTypes.arrayOf(
		PropTypes.number.isRequired
	).isRequired).isRequired
);

Book.propTypes = {
	bookName: PropTypes.string.isRequired,
	text: PropTypes.arrayOf(
		PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
	).isRequired,
	notes: PropTypes.arrayOf(
		PropTypes.arrayOf(PropTypes.arrayOf(
			PropTypes.string.isRequired).isRequired
		).isRequired
	).isRequired,
	details: PropTypes.shape({
		indents: indicesArrayPropType,
		indentIndices: indicesArrayPropType,
		jqIndices: indicesArrayPropType,
	}).isRequired,
};

export default Book;
