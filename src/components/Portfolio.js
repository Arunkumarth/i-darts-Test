import React from "react";
import { Pie } from "@ant-design/charts";
import { CaretDownOutlined } from "@ant-design/icons";
// import "../App.css";
const Portfolio = () => {
	const data = [
		{ type: "Mutual Funds", value: 45 },
		{ type: "ETFs", value: 55 },
	];

	const config = {
		data,
		angleField: "value",
		colorField: "type",
		radius: 0.5,
		innerRadius: 0.7,
	};

	return (
		<>
			<div className="portfolio">
				<div className="heading">Portfolio</div>
				<div className="filter">
					Asset-wise
					<CaretDownOutlined />
				</div>
			</div>
			<div>
				<Pie {...config} />
			</div>
		</>
	);
};

export default Portfolio;
