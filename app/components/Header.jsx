import React from 'react';

import Heading from './Display.jsx';

const flexboxCenter = {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
};

const iconStyle = {
	height: '',
};

const Header = () => {
	let style = {
		width: '100%',
		height: '12.5%',
		backgroundColor: '#F7ECD2',
		top: '0%',
	};
	style = Object.assign(style, flexboxCenter);
	return (
		<div id="header" style={style}>
			<BookInfo />
			<AbrahamLogo />
			<ViewSettings />
		</div>
	);
};

const AbrahamLogo = () => {
	const style = {
		height: '72%',
	};
	return (<img style={style} src="assets/images/logo.svg" alt="Abraham" />);
};

const BookInfo = () =>
	<div
		id="bookInfo"
		style={Object.assign({
			flexDirection: 'column',
			height: '70%',
		}, flexboxCenter)}
	>
		<img
			src="assets/images/book_icon.svg" alt="Pick a book"
			style={{ height: '45%' }}
		/>
		<h3 type={3}>Genesis 1</h3>
	</div>;

const ViewSettings = () =>
	<div
		id="viewSettings"
		style={Object.assign({
			flexDirection: 'column',
			height: '70%',
		}, flexboxCenter)}
	>
		<img
			src="assets/images/gear_icon.svg" alt="Pick a book"
			style={{ height: '45%' }}
		/>
		<h3>Classic View</h3>
	</div>;

export default Header;
