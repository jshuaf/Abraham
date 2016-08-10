import React from 'react';

import Heading from './Heading.jsx';

class Header extends React.Component {
	render() {
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
	}
}

class AbrahamLogo extends React.Component {
	render() {
		const style = {
			height: '72%',
		};
		return <img style={style} src="assets/images/logo.svg" alt="Abraham" />;
	}
}

class BookInfo extends React.Component {
	render() {
		return (
			<div id="bookInfo" style={{ display: 'flex' }}>
				<img src="assets/images/book_icon.svg" alt="Pick a book" />
				<Heading type={1}>Genesis 1</Heading>
			</div>
		);
	}
}

class ViewSettings extends React.Component {
	render() {
		return (
			<div id="bookInfo">
				<img src="assets/images/gear_icon.svg" alt="Settings" />
				<Heading type={1}>Classic View</Heading>
			</div>
		);
	}
}

export default Header;
