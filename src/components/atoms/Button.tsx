import React from "react";

function Button({
	children,
	text,
}: {
	children: React.ReactNode;
	text: string;
}) {
	return (
		<button className="btn rounded-full">
			{children}
			<p className="text-sm mt-0">{text}</p>
		</button>
	);
}

export default Button;
