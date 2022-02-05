import React from "react";
import { useTranslation } from "react-i18next";
import titlePages from "../utils/titlePages";

const PageBlog = () => {
	const { t } = useTranslation();
	React.useEffect(() => {
		titlePages(t("blog_titles"));
	}, []);
	return (
		<div className="w-full h-auto sm:h-[47vh] xl:h-[44.5vh]">
			<p className="text-gray-500 dark:text-white">{t("blog_title")}</p>
		</div>
	);
};

export default PageBlog;
