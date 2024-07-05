function Navbar() {
	return (
		<nav className="text-neutral-500">
			<div className="flex items-center gap-3">
				<a href="/blog">
					<p className="text-sm hover:text-black ease-in duration-200">Blog</p>
				</a>
				<a href="/experience">
					<p className="text-sm hover:text-black ease-in duration-200">
						Experience
					</p>
				</a>
				<a href="/projects">
					<p className="text-sm hover:text-black ease-in duration-200">
						Projects
					</p>
				</a>  
				<a href="/contact">
					<p className="text-sm hover:text-black ease-in duration-200">
						Contact
					</p>
				</a>
			</div>
		</nav>
	);
}

export default Navbar;
