import toast from "react-hot-toast";

const Custome = (img, title, text, cartText) => {
	return toast.custom((t) => (
		<div
			className={`${
				t.visible ? "animate-enter" : "animate-leave"
			} p-1 pb-[5px] max-w-md w-full h-16 bg-green-500 shadow-lg shadow-green-300 rounded-lg pointer-events-auto flex flex-row justify-center items-center ring-1 ring-white ring-opacity-5`}
		>
			<div className="w-full h-full rounded-full flex flex-wrap justify-around">
				<div className="w-1/5 h-full grid place-items-center">
					<div className="w-12 h-12 rounded-full bg-red-500">
						<img src={img} alt={title} className="w-full h-full rounded-lg" />
					</div>
				</div>
				<div className="p-1 w-4/5 h-full text-sm text-white">
					<p>
						{text}
						<span> </span>
						{cartText}
					</p>
				</div>
				<div className="w-full h-1 bg-white rounded-full">
					<div className="relative w-0 h-full bg-green-700 animate-load"></div>
				</div>
			</div>
		</div>
	));
};

export default Custome;
