import React from "react";
import { Route, Routes } from "react-router-dom";
import PageHome from "../pages/ui_pageHome";
import PageCourses from "../pages/ui_pageCourses";
import PageBlog from "../pages/ui_pageBlog";
import PageAboutUs from "../pages/ui_pageAboutUs";
import PageCart from "../pages/ui_pageCart";
import PageAccount from "../pages/ui_pageAccount";

const MainRoutes = () => {
	return (
		<Routes>
			<Route index path="/" element={<PageHome />} />
			<Route path="/courses" element={<PageCourses />} />
			<Route path="/blog" element={<PageBlog />} />
			<Route path="/about-us" element={<PageAboutUs />} />
			<Route path="/shoping-cart" element={<PageCart />} />
			<Route path="/account" element={<PageAccount />} />
		</Routes>
	);
};

export default MainRoutes;
