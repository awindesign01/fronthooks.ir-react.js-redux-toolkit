import { configureStore } from "@reduxjs/toolkit";
import coursesSlice from "./courses/coursesSlice";

export const store = configureStore({
	reducer: {
		courses: coursesSlice,
	},
});
