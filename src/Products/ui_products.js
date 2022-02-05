import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { BsClockHistory } from "react-icons/bs";
import { FiArrowLeft } from "react-icons/fi";
import AOS from "aos";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { addCart, getAsyncCourses } from "../features/courses/coursesSlice";
import LoadingAnimationAsync from "../components/loadingAnimationAsync/loadingAnimationAsync";
import Custome from "../components/customeToastfy/custome";
import { Link } from "react-router-dom";

const Products = () => {
	const { courses, error, loading, addedCourses } = useSelector((state) => state.courses);
	const dispatch = useDispatch();
	const { t } = useTranslation();
	AOS.init();

	useEffect(() => {
		dispatch(getAsyncCourses());
	}, []);

	if (loading) return <LoadingAnimationAsync />;
	if (error) return <p>{error}</p>;

	return (
		<section className="w-full h-auto flex flex-row flex-wrap justify-between">
			{courses.map((p) => (
				<div
					className="mb-6 w-full h-auto lg:h-44 xl:h-52 sm:w-[48%] bg-white dark:bg-subsidiary-dark border-b-4 border-solid border-purple-500 rounded-xl shadow-lg dark:shadow-zinc-700 lg:flex z-0"
					data-aos={`${p.dataAos}`}
					data-aos-easing={p.dataAosEasing}
					data-aos-delay={p.dataAosDelay}
					key={p.id}
				>
					<div className="mx-auto mb-1 lg:mb-0 w-full lg:w-1/2 h-60 lg:h-full rounded-lg">
						<img
							src={p.imageCourse}
							alt={p.title}
							className="w-full h-full object-cover rounded-lg"
						/>
					</div>
					<div className="lg:px-2 mx-auto mt-1 w-11/12 lg:w-1/2 h-60 lg:h-44 xl:h-52 rounded-lg text-gray-700 dark:text-gray-300 font-bold flex flex-col justify-between">
						<div className="w-full h-[20%] flex items-center">
							<h1 className="text-[18px] lg:text-sm dark:text-white rtl:text-right ltr:text-left">
								{t(`name_course_${p.id}`)}
							</h1>
						</div>
						<div className="w-full h-[30%] flex rtl:flex-col ltr:flex-col-reverse justify-between items-start text-gray-500 dark:text-gray-400">
							<div className="flex items-center">
								<BsClockHistory className="text-2xl lg:text-xl rtl:ml-2 ltr:mr-2 text-main-site-color " />
								<p className="lg:text-sm">
									{t(`time`)} :<span> </span>
									{t(`totalTimeLearn_${p.id}`)}
									<span> </span>
									{t("hours")}
								</p>
							</div>
							<div className="flex lg:text-sm rtl:flex-row ltr:flex-row items-center text-main-site-color dark:text-purple-600 group">
								<a href="#">{t("information_courses")}</a>
								<FiArrowLeft className="text-xl lg:text-lg rtl:mr-2 ltr:ml-2 transform transition-all rtl:group-hover:-translate-x-2 ltr:group-hover:translate-x-2 ltr:rotate-180" />
							</div>
						</div>
						<div className="w-full h-[30%] flex rtl:flex-row ltr:flex-row justify-between items-center">
							<div>
								{addedCourses.find((i) => i.id === p.id) ? (
									<Link to="/shoping-cart">
										<Button
											variant="contained"
											className="w-36 lg:w-32 h-12 lg:h-9 lg:text-sm bg-gradient-to-tl from-purple-900 to-purple-700 rounded-lg"
										>
											<p className="text-white lg:text-xs font-bold">{t("continue_shopping")}</p>
										</Button>
									</Link>
								) : (
									<Button
										onClick={() => {
											dispatch(addCart(p));
											const text = t(`name_course_${p.id}`);
											const cartText = t("toastify_text");
											// todo comment: Custome is function for customizer toastify
											Custome(p.imageCourse, p.title, text, cartText);
										}}
										variant="contained"
										className="w-36 lg:w-32 h-12 lg:h-9 lg:text-sm bg-gradient-to-tl from-purple-900 to-purple-700 rounded-lg"
									>
										<p className="text-white lg:text-xs font-bold">{t("course_registration")}</p>
									</Button>
								)}
							</div>
							<div className="w-auto lg:text-sm flex flex-row-reverse">
								{t(`name_course_${p.id}`) === t(`name_course_5`) ? (
									<div>
										<div className="mx-auto w-3/4 bg-red-500 text-white rounded-full text-center">
											<p>{t(`priceCours_5_off_text`)}</p>
										</div>
										<div className="flex flex-row-reverse line-through text-gray-400">
											<p className="rtl:mr-2 ltr:ml-2">{t("symbol_price")}</p>
											<p> {t(`priceCours_${p.id}`)}</p>
										</div>
									</div>
								) : (
									<>
										<p className="rtl:mr-2 ltr:ml-2">{t("symbol_price")}</p>
										<p> {t(`priceCours_${p.id}`)}</p>
									</>
								)}
							</div>
						</div>
					</div>
				</div>
			))}
		</section>
	);
};

export default Products;
