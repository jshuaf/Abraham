import React from 'react';

import Heading from './Heading.jsx';

const Header = () => {
	const style = {
		width: '100%',
		height: '12.5%',
		backgroundColor: '#F7ECD2',
		top: '0%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	};
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
	return <img style={style} src="assets/images/logo.svg" alt="Abraham" />;
};

const BookInfo = () =>
	<div id="bookInfo" style={{ display: 'flex' }}>
		<img src="assets/images/book_icon.svg" alt="Pick a book" />
		<Heading type={1}>Genesis 1</Heading>
	</div>;

const ViewSettings = () =>
	<div id="viewSettings">
		<img src="assets/images/gear_icon.svg" alt="Settings" />
		<Heading type={1}>Classic View</Heading>
	</div>;

export default Header;
