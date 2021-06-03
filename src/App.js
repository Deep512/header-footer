// import Footer from "./lib/components/Footer";
// function App() {
// 	return (
// 		<div className="App">
// 			<Footer />
// 		</div>
// 	);
// }

// export default App;

import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import "./App.scss";

const Header = ({ links }) => {
	return (
		<header className="header__class">
			{/* <img id="logo" src="../../images/logo.png" /> */}
			{links.map(({ name, link }, idx) => (
				<NavLink
					key={idx}
					to={link}
					activeStyle={{ fontWeight: "bold" }}
					style={{ marginTop: "10px" }}
				>
					{name}
				</NavLink>
			))}
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
