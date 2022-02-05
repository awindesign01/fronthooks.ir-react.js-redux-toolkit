import Footer from "./ui_footer";
import Header from "./ui_header";
import MenuPhone from "./ui_menuPhone";

const index = ({ children }) => {
	return (
		<>
			<Header />
			<div className="w-full h-full flex flex-col justify-between items-center">
				<div className="w-full h-auto">{children}</div>
				<div className="w-full h-auto">
					<Footer />
				</div>
			</div>
			<MenuPhone />
		</>
	);
};

export default index;
