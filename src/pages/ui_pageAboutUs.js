import React from "react";
import { useTranslation } from "react-i18next";
import titlePages from "../utils/titlePages";

const PageAboutUs = () => {
	const { t } = useTranslation();
	React.useEffect(() => {
		titlePages(t("aboutus_title"));
	}, []);
	const boxItems = [
		{
			firstTitle: "Senior Front-end developer",
			secondTitle: "Next.js and React.js Developer in Calaq Calaq",
			text: "Calaq group are mainly focusing on analysis the effect of dailynews from any sources such as Telegram, Twitter on stock marketfluctuations. As front-end developer in this team, myresponsibility is developing UI platform using React and next.jsto optimise the efficiency and boost performance of AIdeveloper.",
			num1: t("box_1_num_1"),
			num2: t("box_1_num_2"),
		},
		{
			firstTitle: "Front-end Consultant",
			secondTitle: "Front-end team consultant in Tack-size startup",
			text: "I focused on reviewing the code, selecting up-to-date and optimized tools, choosing useful libraries for React.js logic and component-based styles frameworks.",
			num1: t("box_1_num_1"),
			num2: t("box_1_num_2"),
		},
		{
			firstTitle: "Front-end developer",
			secondTitle: "Next.js Developer in Decooj startup",
			text: "Decooj stratup was focusing on providing easiest way to sell the furniture related needs.Decooj web application has three main users, including merchant, typical users, and admin.Merchant can build their platform and upload all the furnitures to sell. Besides, they can make order to other merchants to buy materials utilized in their industry.the users can easily add their needs to cart, buy and set delivery time.All These lovely process takes place in Decooj PWA.",
			num1: t("box_3_num_1"),
			num2: t("box_3_num_2"),
		},
		{
			firstTitle: "Freelancer React.js developer",
			secondTitle: "React.js Developer in Winatalent website",
			text: "Acting as a React.js freelancer in winatalent website, focusing on foreign projects",
			num1: t("box_3_num_1"),
			num2: t("box_3_num_2"),
		},
		{
			firstTitle: "Freelancer Front-end developer",
			secondTitle: "Freelancer Front-end Developer at Fiverr, Upwork  website",
			text: "Acting as a freelancer Front-end, focusing on Iranian projects inclduing; React.js, vanilla Js projects",
			num1: t("box_5_num_1"),
			num2: t("box_5_num_2"),
		},
		{
			firstTitle: "Freelancer MATLAB developer",
			secondTitle: "Petroleum Engineer MATLAB developer",
			text: "as Petroleum Engineer, I was focusing on simulating, optimizing of oil wells problems. these projects mainly incldued Complex Mathematics problems, handling by MATLAB programming software ",
			num1: t("box_5_num_1"),
			num2: t("box_5_num_2"),
		},
	];
	return (
		<section className="w-full h-auto text-left">
			{boxItems.map((i) => (
				<>
					<div className="p-3 mx-auto border-l-[3px] border-solid border-purple-500 rounded-lg shadow-lg text-black w-full sm:w-3/4 lg:w-1/2 h-auto bg-white dark:bg-subsidiary-dark tracking-wide font-bold">
						<div>
							<p className="text-xs text-purple-500 dark:text-pruple-300 dark:text-opacity-60">
								from {i.num1} to {i.num2}
							</p>
						</div>
						<div className="mt-2">
							<h1 className="text-sm text-purple-600 dark:text-white">{i.firstTitle}</h1>
						</div>
						<div>
							<h2 className="text-xs text-gray-700 dark:text-gray-300 dark:text-opacity-70">
								{i.secondTitle}
							</h2>
						</div>
						<div className="mt-4">
							<p className="text-sm text-gray-500 font-medium">{i.text}</p>
						</div>
					</div>
					<hr className="my-6 mx-auto w-1/2 sm:w-1/5 h-[2px] bg-purple-700 bg-opacity-70 " />
				</>
			))}
		</section>
	);
};

export default PageAboutUs;
