import React from "react";
import { useTranslation } from "react-i18next";
import Products from "../Products/ui_products";
import titlePages from "../utils/titlePages";

const PageCourses = () => {
	const { t } = useTranslation();
	React.useEffect(() => {
		titlePages(t("courses_title"));
	}, []);
	return (
		<section className="w-full h-auto">
			<Products />
		</section>
	);
};

export default PageCourses;
