import React from 'react';
import Verse from './Verse.jsx';

const Chapter = ({ length }) => {
	const verses = [];
	for (let i = 0; i < length; i++) {
		verses.push(<Verse />);
	}
	return <div>{verses}</div>;
};

Chapter.propTypes = {
	length: React.PropTypes.number.isRequired,
	chapter: React.PropTypes.number.isRequired,
};
