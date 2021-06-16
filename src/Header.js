import React from "react";
import "./App.css";
const Header = ({ links }) => {
	return (
		<header className="header__class">
			{/* <img id="logo" src="../../images/logo.png" /> */}
			{links.map((link) => link.component)}
		</header>
	);
};

export default Header;
