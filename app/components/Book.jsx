import React, { PropTypes } from 'react';
import Chapter from './Chapter.jsx';

class Book extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentBook: 1,
		};
	}
	render() {
		const chapters = [];
		for (let i = 0; i < this.props.text.length; i++) {
			const chapterText = this.props.text[i];
			const chapterDetails = {
				indents: this.props.details.indents[i],
				indentIndices: this.props.details.indentIndices[i],
				jqIndices: this.props.details.jqIndices[i],
			};
			const chapterNotes = this.props.notes[i];
			chapters.push(<Chapter
				text={chapterText}
				details={chapterDetails}
				notes={chapterNotes}
				number={i + 1} key={i + 1}
			/>);
		}
		return <div className="row">{chapters}</div>;
	}
}

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
