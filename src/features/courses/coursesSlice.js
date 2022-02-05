import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAsyncCourses = createAsyncThunk(
	"courses/getAsyncCourses",
	async (_, { rejectWithValue }) => {
		try {
			const res = await axios.get("http://localhost:8000/courses");
			return res.data;
		} catch (err) {
			return rejectWithValue([], err);
		}
	},
);

export const counterSlice = createSlice({
	name: "courses",
	initialState: {
		courses: [],
		addedCourses: [],
		error: null,
		loading: false,
	},
	extraReducers: {
		// todo comment: extraReducers => get reducers async
		[getAsyncCourses.fulfilled]: (state, action) => {
			state.courses = action.payload;
			state.loading = false;
			state.error = null;
		},
		[getAsyncCourses.pending]: (state, { payload }) => {
			state.courses = [];
			state.loading = true;
			state.error = null;
		},
		[getAsyncCourses.rejected]: (state, { error }) => {
			state.courses = [];
			state.loading = false;
			error = error.message;
		},
	},
	reducers: {
		// todo comment: reducers => get reducers sync
		addCart: (state, action) => {
			const newObject = {
				id: action.payload.id,
				title: action.payload.title,
				imageCourse: action.payload.imageCourse,
				dataAos: action.payload.dataAos,
				dataAosDelay: action.payload.dataAosDelay,
				dataAosEasing: action.payload.dataAosEasing,
				price: action.payload.price,
			};
			state.addedCourses.push(newObject);
		},
	},
});

export default counterSlice.reducer;
export const { addCart } = counterSlice.actions;
