import React from 'react';

const flexboxCenter = {
	display: 'flex',
	alignItems: 'center',
};

const Header = () => {
	const headerStyle = {
		width: '100%',
		height: '12.5%',
		top: '0%',
		color: '#58371C',
		justifyContent: 'center',
	};
	let headerItemsStyle = {
		width: '30%',
		height: '100%',
		justifyContent: 'space-between',
	};
	Object.assign(headerStyle, flexboxCenter);
	Object.assign(headerItemsStyle, flexboxCenter);
	return (
		<div id="header" style={headerStyle}>
			<div id="headerItems" style={headerItemsStyle}>
				<BookInfo />
				<AbrahamLogo />
				<ViewSettings />
			</div>
			<div id="headerBackground" />
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
			height: '80%',
			justifyContent: 'space-between',
		}, flexboxCenter)}
	>
		<img
			src="assets/images/book_icon.svg" alt="Pick a book"
			style={{ height: '45%' }}
		/>
		<h4 type={3}>Genesis 1</h4>
	</div>;

const ViewSettings = () =>
	<div
		id="viewSettings"
		style={Object.assign({
			flexDirection: 'column',
			height: '80%',
			justifyContent: 'space-between',
		}, flexboxCenter)}
	>
		<img
			src="assets/images/gear_icon.svg" alt="Pick a book"
			style={{ height: '45%' }}
		/>
		<h4>Classic View</h4>
	</div>;

export default Header;
