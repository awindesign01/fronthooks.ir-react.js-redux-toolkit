import React from "react";
import "./App.css";
import { useTranslation } from "react-i18next";
import cookies from "js-cookie";
import { languages } from "./language";
import Layout from "./layout/layout";
import MainRoutes from "./routes/mainRoutes";
import { Toaster } from "react-hot-toast";

function App() {
	const currLangCode = cookies.get("i18next") || "en";
	const currLang = languages.find((l) => l.code === currLangCode);
	const { t } = useTranslation();

	const align = () => {
		if (document.cookie.slice(8) === "fa") {
			document.body.dir = currLang.dir || "ltr";
		} else if (document.cookie.slice(8) === "en") {
			document.body.dir = currLang.dir || "rtl";
		}
	};
	React.useEffect(() => {
		align();
	}, [currLang, t]);

	return (
		<section>
			<Layout>
				<Toaster position="top-left" reverseOrder={false} />
				<main className="mt-20 mb-20 sm:mb-0 mx-auto w-[95%] xl:w-[1170px]">
					<MainRoutes />
				</main>
			</Layout>
		</section>
	);
}

export default React.memo(App);
