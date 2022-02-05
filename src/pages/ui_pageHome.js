import React from 'react';
import Products from "../Products/ui_products";
import { useTranslation } from "react-i18next";
import Icon1 from "../Assets/Icons/practical.svg";
import Icon2 from "../Assets/Icons/time.svg";
import Icon3 from "../Assets/Icons/mentor.svg";
import Icon4 from "../Assets/Icons/quality.svg";
import Icon5 from "../Assets/Icons/refund.svg";
import banner2 from "../Assets/front-course-title.svg";
import FirstBanner from "../components/firstBanner/ui_firstBanner";
import img from "../Assets/frontend-intro.svg";
import titlePages from "../utils/titlePages";

const PageHome = () => {
	const { t } = useTranslation();
	React.useEffect(() => {
		titlePages(t("home_title"));
	}, []);
	const inforamtionCourses = [
		{ title: t("inforamtion_courses_1_title"), text: t("inforamtion_courses_1_text"), icon: Icon1 },
		{ title: t("inforamtion_courses_2_title"), text: t("inforamtion_courses_2_text"), icon: Icon2 },
		{ title: t("inforamtion_courses_3_title"), text: t("inforamtion_courses_3_text"), icon: Icon3 },
		{ title: t("inforamtion_courses_4_title"), text: t("inforamtion_courses_4_text"), icon: Icon4 },
		{ title: t("inforamtion_courses_5_title"), text: t("inforamtion_courses_5_text"), icon: Icon5 },
	];

	const inforamtionStatistics = [
		{ text: t("statistics_histoy"), num: t("statistics_histoy_num") },
		{ text: t("statistics_student"), num: t("statistics_student_num") },
		{ text: t("statistics_satisfaction"), num: t("statistics_satisfaction_num") },
	];

	return (
		<section className="w-full h-auto">
			<FirstBanner />
			<article className="flex flex-wrap justify-around">
				{inforamtionCourses.map((i, index) => (
					<div
						className="px-4 mb-5 border-b-4 border-solid border-purple-500 bg-white dark:bg-subsidiary-dark rounded-lg shadow-md w-[48%] sm:w-[31%] lg:w-[18%] h-56 flex flex-col justify-evenly items-center text-center"
						key={index}
					>
						<img src={i.icon} alt={i.title} className="w-10" />
						<h2 className="text-lg text-gray-700 dark:text-gray-200 font-bold">{i.title}</h2>
						<p className="text-sm text-gray-500 dark:text-gray-400 font-bold">{i.text}</p>
					</div>
				))}
			</article>
			<article className="mb-6  w-full h-16 grid place-items-center">
				<img src={banner2} alt="" />
			</article>
			<article className="mb-6 w-full h-auto">
				<Products />
			</article>
			<article className="mb-6 w-full h-auto sm:h-auto lg:flex lg:flex-row-reverse lg:items-center">
				<div className="w-full lg:w-2/3 h-auto">
					<h1 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">{t("WIF")}</h1>
					<p className="mb-6 text-sm text-gray-700 dark:text-gray-300 leading-loose">
						{t("frontend_intro")}
					</p>
					<p className="mb-6 text-sm sm:text-xs font-bold text-gray-500">
						{t("roadmap_article_text")}
						<br className="lg:hidden" />
						<span> </span>
						<a
							href="https://fronthooks.ir/learning-path"
							className="text-blue-600 dark:text-opacity-70"
						>
							{t("roadmap_article_link")}
						</a>
					</p>
				</div>
				<div className="w-full lg:w-1/3 h-auto">
					<img src={img} alt="frontend-intro" />
				</div>
			</article>
			<article className="sm:mt-10 w-full h-[50vh] sm:h-[15vh] flex flex-col sm:flex-row justify-evenly items-center">
				<div className="w-full sm:w-1/2 lg:w-1/3 h-auto">
					<h1 className="text-2xl font-bold text-gray-900 dark:text-white">
						{t("statistics_text")}
					</h1>
					<p className="text-sm text-gray-700 dark:text-gray-500">{t("statistics_update")}</p>
				</div>
				<div className="w-full sm:w-1/2 lg:w-2/3 h-auto sm:flex sm:justify-between">
					{inforamtionStatistics.map((i, index) => (
						<div
							className="px-4 my-3 w-full sm:w-[31%] lg:w-[32%] h-14 sm:h-24 lg:h-14 bg-white dark:bg-subsidiary-dark rounded-lg shadow-lg dark:shadow-zinc-700 flex sm:flex-col lg:flex-row justify-between sm:justify-around lg:justify-between items-center sm:text-center"
							key={index}
						>
							<p className="font-bold text-gray-900 dark:text-white">{i.num}</p>
							<h1 className="sm:text-xs font-bold text-purple-700 dark:text-purple-400">
								{i.text}
							</h1>
						</div>
					))}
				</div>
			</article>
		</section>
	);
};

export default PageHome;
