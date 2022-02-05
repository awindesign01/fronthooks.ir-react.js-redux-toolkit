import { useTranslation } from "react-i18next";
import { FiHome, FiCode, FiUsers, FiUser } from "react-icons/fi";
import { ImBlog } from "react-icons/im";
import { NavLink } from "react-router-dom";

const activeStyle = {
	position: "relative",
	transitionProperty: "all",
	transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
	transitionDuration: "150ms",
	transform: "translateY(-1.75rem) rotate(45deg)",
	backgroundColor: "#7e22ce",
	color: "#fff",
};

const MenuPhone = () => {
	const { t } = useTranslation();

	const NavLinkApi = [
		{ name: t("blog"), path: "/blog", icon: ImBlog },
		{ name: t("courses"), path: "/courses", icon: FiCode },
		{ name: t("home"), path: "/", icon: FiHome, exact: "true" },
		{ name: t("about-us"), path: "/about-us", icon: FiUsers },
		{ name: t("account"), path: "/account", icon: FiUser },
	];

	const Ui_IconMenuPhone = (path, exact, icon, name) => {
		return (
			<>
				<NavLink
					to={path}
					exact={exact}
					style={({ isActive }) => (isActive ? activeStyle : undefined)}
					className="NavLink rounded-lg w-[50px] h-[50px] bg-white dark:bg-main-dark flex justify-center items-center text-3xl text-purple-700 z-20"
				>
					{icon}
				</NavLink>
				<nav className="nav_text fixed bottom-3 z-10">
					<p className="text text-xs text-gray-500 dark:text-gray-300 font-bold text-center">
						{name}
					</p>
				</nav>
			</>
		);
	};

	return (
		<nav className="sm:hidden fixed bottom-0 left-0 w-full h-16 bg-white dark:bg-main-dark border-t-2 dark:border-zinc-700 z-50">
			<nav className="mx-auto w-[98%] h-[98%] bg-white dark:bg-main-dark rounded-tl-lg rounded-tr-lg shadow-lg flex justify-center items-center">
				<ul className="flex w-full h-full justify-between ">
					{NavLinkApi.map(({ path, exact, icon, name }) => (
						<li
							className="list menu_Phone h-full w-1/6 transition-all flex justify-center items-center"
							key={path}
						>
							{Ui_IconMenuPhone(path, exact, icon, name)}
						</li>
					))}
				</ul>
			</nav>
		</nav>
	);
};

export default MenuPhone;
