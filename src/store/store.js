import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "../Slices/TradeData";
const store = configureStore({
	reducer: {
		trade_data: dataReducer,
	},
});
export default store;
