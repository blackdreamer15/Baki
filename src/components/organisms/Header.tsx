import React from "react";
import Logo from "../atoms/Logo.tsx";
import Navbar from "../molecules/Navbar";

function Header() {
	return (
		<header className="fixed w-full h-[7vh] nav-container bg-red-500">
			<div className="flex justify-between items-center max-w-3xl mx-auto h-full px-6 py-3">
				<Logo />
				<Navbar />
			</div>
		</header>
	);
}

export default Header;
