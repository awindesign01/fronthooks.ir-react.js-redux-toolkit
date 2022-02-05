import React from "react";
import { useTranslation } from "react-i18next";
import { FiUser } from "react-icons/fi";
import titlePages from "../utils/titlePages";

const PageAccount = () => {
	const { t } = useTranslation();
	React.useEffect(() => {
		titlePages(t("account_title"));
	}, []);
	return (
		<div className="w-full h-auto sm:h-[47vh] xl:h-[44.5vh]">
			<div className="p-3 mx-auto rounded-lg shadow-lg dark:shadow-zinc-700 text-black w-full sm:w-3/4 h-auto bg-white dark:bg-subsidiary-dark tracking-wide font-bold sm:flex sm:justify-around items-center">
				<div className="w-full sm:w-1/5">
					<div className="mx-auto w-24 h-24 border-[3px] border-solid border-purple-500 dark:border-purple-400 rounded-full text-4xl text-purple-500 dark:text-purple-400 grid place-items-center">
						<FiUser />
					</div>
				</div>
				<div className="w-full sm:w-2/3 text-center sm:rtl:text-right sm:ltr:text-left ">
					<h1 className="text-gray-900 dark:text-white">{t("account_name")}</h1>
					<p className="text-gray-500 dark:text-gray-300 tracking-wider">
						{t("account_email").replace(t("account_email").slice(3, 8), "----")}
					</p>
				</div>
			</div>
		</div>
	);
};

export default PageAccount;
