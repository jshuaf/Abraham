import React, { PropTypes } from 'react';
import Verse from './Verse.jsx';

const Chapter = ({ text }) => {
	const verses = [];
	for (let i = 0; i < text.length; i++) {
		const verseText = text[i];
		verses.push(<Verse text={verseText} number={i + 1} />);
	}
	return <div>{verses}</div>;
};

Chapter.propTypes = {
	number: PropTypes.number.isRequired,
	text: PropTypes.arrayOf(
		PropTypes.string.isRequired
	).isRequired,
};

export default Chapter;
