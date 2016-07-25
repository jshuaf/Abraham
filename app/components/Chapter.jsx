import React, { PropTypes } from 'react';
import Verse from './Verse.jsx';

const Chapter = ({ length, text }) => {
	const verses = [];
	for (let i = 0; i < length; i++) {
		const verseText = text[i];
		verses.push(<Verse text={verseText} number={i} />);
	}
	return <div>{verses}</div>;
};

Chapter.propTypes = {
	length: PropTypes.number.isRequired,
	number: PropTypes.number.isRequired,
	text: PropTypes.arrayOf(
		PropTypes.string.isRequired,
	).isRequired,
};
