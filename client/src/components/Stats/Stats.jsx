import { Doughnut } from "react-chartjs-2";
import Chart from "chart.js/auto";
import "./stats.css";
import LineChart from "./LineChart";
import PieChart from "./PieChart";
import PercentageChat from "./PercentageChat";
export default function Stats() {
  return (
    <div className="margin-left stats-container">
      <button className="total">
        ₹45678<span className="amount-type">Total</span>
      </button>
      <button className="income">
        ₹13464<span className="amount-type">Income</span>
      </button>
      <button className="expense">
        ₹346346<span className="amount-type">Expense</span>
      </button>

      <div className="most-trans">Insights</div>
      <div className="line-chart">
        <LineChart />
      </div>
      <div className="pie-chart">
        <PieChart />
      </div>
      <div className="percentage">
        <PercentageChat />
      </div>
      <div className="long-chart">long chat</div>
    </div>
  );
}
