import { useState, useEffect } from "react";
import "./App.css";
import IndividualDashboard from "./components/IndividualDashboard";
import Portfolio from "./components/Portfolio";
import { CaretDownOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
function App() {
	const [mobile, setMobile] = useState(700);

	const data = useSelector((state) => state.trade_data.data);
	useEffect(() => {
		// console.log(window.innerWidth < 450, window.innerWidth);
		setMobile(window.innerWidth);
		// return () => setMobile(window.innerWidth < 450);
	}, [window.innerWidth]);
	return (
		<div className="App">
			{mobile > 600 ? (
				<>
					<div className="table-collection">
						{data.map((item) => {
							return (
								<IndividualDashboard
									scrip={item.scrip}
									quantity={item.quantity}
									price={item.price}
									avgCost={item.avgCost}
									investedAmount={item.investedAmount}
									portfolio_val={item.portfolio_val}
									unrealizedPL={item.unrealizedPL}
									returnPercent={item.returnPercent}
								/>
							);
						})}
					</div>
					<div className="chart">
						<Portfolio />
					</div>
				</>
			) : (
				<>
					<div className="chart">
						<Portfolio />
					</div>
					<div className="table-collection">
						{data.map((item) => {
							return (
								<IndividualDashboard
									scrip={item.scrip}
									quantity={item.quantity}
									price={item.price}
									avgCost={item.avgCost}
									investedAmount={item.investedAmount}
									portfolio_val={item.portfolio_val}
									unrealizedPL={item.unrealizedPL}
									returnPercent={item.returnPercent}
								/>
							);
						})}
					</div>
				</>
			)}
		</div>
	);
}

export default App;
