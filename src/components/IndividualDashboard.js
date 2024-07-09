import { Progress } from "antd";
import {
	MenuOutlined,
	DollarOutlined,
	DatabaseOutlined,
	CaretUpOutlined,
	CaretDownOutlined,
} from "@ant-design/icons";
import "../styles/individual-dashboard.css";
export default function IndividualDashboard({
	scrip,
	quantity,
	price,
	avgCost,
	investedAmount,
	portfolio_val,
	unrealizedPL,
	returnPercent,
}) {
	return (
		<div className="ind-container">
			<div className="ind-head">
				<div>
					<MenuOutlined />
				</div>
				<div>
					<h6 className="text-l-gray">{scrip}</h6>
					<span className="text-dollar-gray">$</span>
					<span className="text-blue">{price}</span>
				</div>
				<div>
					<h1 className="text-green">iShares</h1>
					<p className="text-small">by Someone</p>
					<h2 className="text-black-bold">MSCI EAFE Index</h2>
					<h6> Developed by Market Equity</h6>
				</div>
			</div>
			<div className="ind-details">
				<div className="text-light">
					<DatabaseOutlined />
					Quantity
				</div>
				<div className="text-black">{quantity}</div>
				<div className="text-light">@Avg.Cost</div>
				<div className="text-black">${avgCost}</div>
				<div className="text-light">
					<DollarOutlined />
					Invested Amt
				</div>
				<div className="text-black">${investedAmount}</div>
			</div>
			<div className="ind-marketValue">
				<div className="f-start text-black">Market Value</div>
				<div className="f-end text-black">${price * quantity}</div>
				<div className="f-start text-light">% of portfolio value </div>
				<div className="f-end text-black">{portfolio_val}%</div>
				<div className="full-width">
					<Progress
						percent={portfolio_val}
						status="active"
						showInfo={false}
						strokeColor={"green"}
					/>
				</div>
			</div>
			<div className="ind-pl">
				<div className="f-start text-black">Unrealized P/L</div>
				<div className="f-end text-black">${unrealizedPL}</div>
				<div className="f-start text-light">% Return</div>
				<div className="f-end text-black">
					{returnPercent > 0 ? (
						<CaretUpOutlined style={{ color: "green" }} />
					) : (
						<CaretDownOutlined style={{ color: "red" }} />
					)}
					{/* <CaretDownOutlined /> */}
					{/* style={{ color: 10 > 50 ? "green" : "red" }} */}
					{returnPercent}%
				</div>
				<div>
					<Progress
						percent={returnPercent}
						strokeColor={returnPercent > 0 ? "green" : "red"}
						showInfo={false}
					/>
				</div>
			</div>
			<div className="ind-actions">
				<button className="actions">BUY</button>
				<button className="actions">SELL</button>
			</div>
		</div>
	);
}
