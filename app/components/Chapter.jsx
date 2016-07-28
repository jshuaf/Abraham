import React, { PropTypes } from 'react';
import { Verse, VerseNote } from './Verse.jsx';

const Chapter = ({ text }) => {
	const verses = [];
	const noteMatcher = /\{([^}]+)\}/ig;
	const notes = [];
	for (let verseIndex = 0; verseIndex < text.length; verseIndex++) {
		let verseText = text[verseIndex];
		let textIndent = '0%';

		// check for notes in verse
		const matches = verseText.match(noteMatcher);
		if (matches) {
			for (let i = 0; i < matches.length; i++) {
				const match = matches[i];
				verseText = verseText.replace(match, '');
				notes.push(<VerseNote
					text={match.substr(match.indexOf('{') + 1, match.indexOf('}') - 1)}
				/>);
			}
		}
		if (verseIndex % 5 === 4) {
			verses.push(<br></br>);
			textIndent = '10%';
		} else if (verseIndex === 0) {
			textIndent = '10%';
		}
		verses.push(<Verse text={verseText} number={verseIndex + 1} indent={textIndent} />);
	}

	const style = {
		textAlign: 'left',
		lineHeight: '300%',
	};

	return (
		<div className="six columns offset-by-one" style={style}>
			{verses}
			{notes}
		</div>
	);
};

Chapter.propTypes = {
	number: PropTypes.number.isRequired,
	text: PropTypes.arrayOf(
		PropTypes.string.isRequired
	).isRequired,
};

export default Chapter;
