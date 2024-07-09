// import { createSlice } from "@reduxjs/toolkit";

// // const InitialState =
// const tradeDataslice = createSlice({
// 	name: "tradeData",
// 	InitialState: {
// 		data: [

// 		],
// 	},
// 	reducers: {
// 		// buy: (state, action) => {
// 		// 	// state[1] = {};
// 		// },
// 	},
// });

// export default tradeDataslice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	data: [
		{
			scrip: "AADR",
			quantity: 430,
			price: 50.3,
			avgCost: 41.75,
			investedAmount: 17952.07,
			portfolio_val: 22.06,
			unrealizedPL: 3676.93,
			returnPercent: 20.48,
		},
		{
			scrip: "MFEM",
			quantity: 210,
			price: 23.2,
			avgCost: 22.5,
			investedAmount: 4725.84,
			portfolio_val: 5.81,
			unrealizedPL: 146.16,
			returnPercent: 3.09,
		},
		{
			scrip: "JPEM",
			quantity: 328,
			price: 52.5,
			avgCost: 56.7,
			investedAmount: 18597.6,
			portfolio_val: 22.86,
			unrealizedPL: -1377.6,
			returnPercent: -7.41,
		},
		{
			scrip: "KEMQ",
			quantity: 801,
			price: 20.4,
			avgCost: 22.24,
			investedAmount: 17811.04,
			portfolio_val: 21.89,
			unrealizedPL: -1470.64,
			returnPercent: -8.26,
		},
		{
			scrip: "KLDW",
			quantity: 523,
			price: 32.9,
			avgCost: 26.32,
			investedAmount: 13765.36,
			portfolio_val: 16.92,
			unrealizedPL: 3441.34,
			returnPercent: 25.0,
		},
		{
			scrip: "KOIN",
			quantity: 335,
			price: 25.4,
			avgCost: 25.4,
			investedAmount: 8509,
			portfolio_val: 10.46,
			unrealizedPL: 0,
			returnPercent: 0.0,
		},
	],
};

const dataSlice = createSlice({
	name: "data",
	initialState,
	reducers: {},
});

export default dataSlice.reducer;
