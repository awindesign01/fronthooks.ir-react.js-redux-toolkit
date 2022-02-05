import React from "react";
import { useTranslation } from "react-i18next";
import { FiTrash } from "react-icons/fi";
import { useSelector } from "react-redux";

const Cart = () => {
	const { t } = useTranslation();
	let addedCourses = useSelector((state) => state.courses.addedCourses);

	const numOff = 0;
	const sumPrices = (datas) => {
		let arTatalPrice = [];
		datas.forEach(({ price }) => {
			arTatalPrice.push(price);
		});
		return arTatalPrice.reduce((acc, curr) => acc + curr, 0);
	};
	return (
		<div className="justify-between w-full h-auto sm:mb-40 sm:flex">
			<div className="mb-2 sm:mb-0 shadow-lg dark:shadow-zinc-700 rounded-lg w-full sm:w-[60%] lg:w-3/4 h-auto bg-white dark:bg-subsidiary-dark lg:flex lg:flex-wrap">
				{addedCourses.map((i) => (
					<div className="flex flex-wrap w-full lg:w-1/2" hey={i.id}>
						<div className="grid w-1/2 h-auto p-2 items-cente palce">
							<img src={i.imageCourse} alt={i.title} className="object-cover w-40 h-40" />
						</div>
						<div className="flex flex-col justify-around w-1/2 h-40 p-2 ">
							<div className="sm:h-auto lg:h-[25vh]">
								<div className="w-full h-auto sm:w-full">
									<p className="my-2 text-xs text-gray-500 dark:text-white before:content-['✔']">
										{t("inf_1")}
									</p>
									<p className="my-2 text-xs text-gray-500 dark:text-white before:content-['✔']">
										{t("inf_2")}
									</p>
								</div>
								<div className="w-full h-auto sm:w-full">
									<p className="my-2 text-xs text-gray-500 dark:text-white before:content-['✔']">
										{t("inf_3")}
									</p>
									<p className="my-2 text-xs text-gray-500 dark:text-white before:content-['✔']">
										{t("inf_4")}
									</p>
								</div>
							</div>
							<div className="flex w-full h-auto">
								<div className="flex items-center justify-between w-1/2 h-auto">
									<button
										disabled
										className="w-8 h-8 text-white bg-purple-400 rounded-md dark:text-white"
									>
										+
									</button>
									<p className="dark:text-white">1</p>
									<button
										// variant="contained"
										className="grid w-8 h-8 text-lg text-white bg-purple-700 rounded-md place-items-center"
									>
										<FiTrash />
									</button>
								</div>
								<div className="flex items-center justify-center w-1/2 h-auto text-xs dark:text-gray-300">
									{t(`priceCours_${i.id}`)}
									<span> </span>
									{t("symbol_price")}
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
			<div className="p-2 sm:sticky top-20 shadow-lg dark:shadow-zinc-700 border-b-4 border-solid border-purple-500 rounded-lg w-full sm:w-1/3 lg:w-1/5 h-[20vh] bg-white dark:bg-subsidiary-dark text-gray-700 dark:text-white flex flex-col justify-around rtl:text-left ltr:text-right">
				<h1>
					{sumPrices(addedCourses).toLocaleString(t("location"))} {t("symbol_price")}
				</h1>
				<p>
					{numOff.toLocaleString(t("location"))} {t("symbol_price")}
				</p>
				<hr className="w-full h-[1px] bg-gray-400" />
				<p>
					{(sumPrices(addedCourses) - numOff).toLocaleString(t("location"))} {t("symbol_price")}
				</p>
				<button className="grid w-full h-8 text-white bg-purple-700 rounded-lg place-items-center">
					{t("button_checkout")}
				</button>
			</div>
		</div>
	);
};

export default Cart;
