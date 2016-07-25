import React from 'react';

const Verse = (props) => {
	const style = {};
	return <p style={style}>{props.text}</p>;
};

Verse.propTypes = {
	text: React.PropTypes.string.isRequired,
};

export default Verse;
