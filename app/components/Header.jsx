import React from 'react';

const flexboxCenter = {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
};

const Header = () => {
	let style = {
		width: '100%',
		height: '12.5%',
		backgroundColor: '#F7ECD2',
		top: '0%',
		color: '#58371C',
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
		<h4 type={3}>Genesis 1</h4>
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
		<h4>Classic View</h4>
	</div>;

export default Header;
