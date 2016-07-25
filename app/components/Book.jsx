import React, { PropTypes } from 'react';
import Chapter from './Chapter.jsx';

const Book = ({ length, text }) => {
	const chapters = [];
	for (let i = 0; i < length; i++) {
		const chapterText = text[i];
		chapters.push(<Chapter text={chapterText} number={i} key={i} />);
	}
	return <div>{chapters}</div>;
};

Book.propTypes = {
	length: PropTypes.number.isRequired,
	number: PropTypes.number.isRequired,
	bookName: PropTypes.string.isRequired,
	text: PropTypes.arrayOf(
		PropTypes.arrayOf(PropTypes.shape({
			verseText: PropTypes.string.isRequired,
		}).isRequired).isRequired
	).isRequired,
};
