import React from "react";
import "./loadingAnimation.css";

const LoadingAnimation = () => {
	return (
		<section className="fixed top-0 left-0 w-full h-full bg-white grid place-items-center">
			<div className="h-12 w-32 flex justify-between items-center">
				<div className="relative w-5 h-5 rounded-full bg-gray-400 ball1"></div>
				<div className="relative w-5 h-5 rounded-full bg-gray-400 ball2"></div>
				<div className="relative w-5 h-5 rounded-full bg-gray-400 ball3"></div>
				<div className="relative w-5 h-5 rounded-full bg-gray-400 ball4"></div>
				<div className="relative w-5 h-5 rounded-full bg-gray-400 ball5"></div>
			</div>
		</section>
	);
};

export default LoadingAnimation;
