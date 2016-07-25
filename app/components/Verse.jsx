import React, { PropTypes } from 'react';

const Verse = ({ text }) => {
	const style = {};
	return <p style={style}>{text}</p>;
};

Verse.propTypes = {
	text: PropTypes.string.isRequired,
	number: PropTypes.number.isRequired,
};

export default Verse;
