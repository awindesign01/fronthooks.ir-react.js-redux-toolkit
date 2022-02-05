import "../loadingAnimation/loadingAnimation.css";

const LoadingAnimationAsync = () => {
	return (
		<section className="fixed top-0 left-0 mx-auto w-32 h-12 bg-white grid place-items-center">
			<div className="h-full w-full flex justify-between items-center">
				<div className="relative w-5 h-5 rounded-full bg-gray-400 ball1"></div>
				<div className="relative w-5 h-5 rounded-full bg-gray-400 ball2"></div>
				<div className="relative w-5 h-5 rounded-full bg-gray-400 ball3"></div>
				<div className="relative w-5 h-5 rounded-full bg-gray-400 ball4"></div>
				<div className="relative w-5 h-5 rounded-full bg-gray-400 ball5"></div>
			</div>
		</section>
	);
};

export default LoadingAnimationAsync;
