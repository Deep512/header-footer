import React, { useState, useEffect } from "react";

import "./App.css";

const Header = ({ links }) => {
	return (
		<header className="header__class">
			{/* <img id="logo" src="../../images/logo.png" /> */}
			{links.map((link) => link.component)}
		</header>
	);
};

const Footer = (props) => {
	return (
		<footer className="footer__class">
			<p>Copyright &copy; Myntra Ltd.</p>
		</footer>
	);
};

export { Header, Footer };
