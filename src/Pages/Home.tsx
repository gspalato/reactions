import React from "react";


export const Home: React.FC = () => {
	return (
		<>
			<div className="flex h-full w-full justify-center items-center">
				<div className="flex flex-col h-auto object-scale-down m-0 justify-center items-center">
					<h1 className="text-8xl font-semibold"
						style={{ fontFamily: "Inter" }}>Hello!</h1>
					<p className="font-body text-lg font-semibold"
						style={{ fontFamily: "Karla" }}>Welcome to <i>reactions</i>.</p>
				</div>
			</div>
		</>
	);
}