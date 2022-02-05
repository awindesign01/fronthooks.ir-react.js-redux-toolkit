import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Cart from "../components/cart/cart";
import titlePages from "../utils/titlePages";

const PageCart = () => {
	const { t } = useTranslation();
	let addedCourses = useSelector((state) => state.courses.addedCourses);
	React.useEffect(() => {
		titlePages(t("cart_title"));
	}, []);
	return (
		<>
			{addedCourses.length === 0 ? (
				<div className="w-full h-auto sm:h-[47vh] xl:h-[44.5vh]">
					<div className="flex items-center justify-start w-full h-10 px-2 mx-auto my-1 bg-red-500 rounded-lg sm:w-3/4 sm:h-12">
						<p className="text-white">{t("cart_non_products")} 😐</p>
					</div>
					<Link to="/courses">
						<div className="flex items-center justify-start w-full h-10 px-2 mx-auto my-1 bg-purple-500 rounded-lg sm:w-3/4 sm:h-12">
							<p className="text-white">{t("cart_go_products")} 😍</p>
						</div>
					</Link>
				</div>
			) : (
				<Cart />
			)}
		</>
	);
};

export default PageCart;
