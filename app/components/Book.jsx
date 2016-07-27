import React, { PropTypes } from 'react';
import Chapter from './Chapter.jsx';

const Book = ({ text }) => {
	const chapters = [];
	for (let i = 0; i < text.length; i++) {
		const chapterText = text[i];
		chapters.push(<Chapter text={chapterText} number={i + 1} key={i + 1} />);
	}
	return <div className="row">{chapters}</div>;
};

Book.propTypes = {
	bookName: PropTypes.string.isRequired,
	text: PropTypes.arrayOf(
		PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
	).isRequired,
};

export default Book;
