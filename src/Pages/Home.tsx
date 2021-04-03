import React from "react";


export const Home: React.FC = () => {
	return (
		<>
			<div className="flex h-full w-full justify-center items-center">
				<div className="flex flex-col h-auto object-scale-down m-0 justify-center items-center">
					<h1 className="font-display text-8xl font-semibold">Hello!</h1>
					<p className="font-body text-lg">Welcome to <b>reactions</b>.</p>
				</div>
			</div>
		</>
	);
}