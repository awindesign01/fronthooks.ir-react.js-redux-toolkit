import React from "react";
import banner from "../../Assets/banner.png";
import { useTranslation } from "react-i18next";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const FirstBanner = () => {
	let navigate = useNavigate();
	const { t } = useTranslation();
	return (
		<>
			<article className="mb-6 2xl:mb-20 w-full h-auto sm:flex sm:justify-between">
				<div className="sm:w-1/2 h-auto">
					<img src={banner} alt={banner} />
				</div>
				<div className="sm:w-1/2 h-auto text-center sm:flex sm:flex-col sm:justify-center">
					<div className="w-auto h-16 xl:h-20 grid place-items-center">
						<h1 className="text-2xl sm:text-xl lg:text-2xl xl:text-3xl font-bold text-gray-900 dark:text-gray-200">
							{t("first_text")}
						</h1>
					</div>
					<div className="w-auto h-12 xl:h-16 grid place-items-center">
						<p className="sm:text-sm xl:text-base font-bold text-gray-700 dark:text-gray-500">
							{t("second_text")}
						</p>
					</div>
					<div className="w-auto h-auto">
						<Button
							onClick={() => navigate("/courses")}
							variant="contained"
							className="w-36 lg:w-32 h-12 sm:h-10 bg-gradient-to-tl from-purple-900 to-purple-700 rounded-lg"
						>
							<p className="text-white rtl:sm:text-base ltr:sm:text-xs font-bold">
								{t("text_button_banner")}
							</p>
						</Button>
					</div>
					<div className="w-auto h-16 xl:h-16 grid place-items-center">
						<p className="text-sm sm:text-xs xl:text-sm font-bold text-gray-500 dark:text-gray-600">
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
				</div>
			</article>
		</>
	);
};

export default FirstBanner;
