import React from "react";
const Header = ({ links }) => {
	return (
		<header className="header__class">
			{/* <img id="logo" src="../../images/logo.png" /> */}
			{links.map((link) => link.component)}
		</header>
	);
};

export default Header;
