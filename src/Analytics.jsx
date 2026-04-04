import {
  Line,
  Bar,
  Doughnut
} from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Tooltip,
  Legend
);

import './analytics.css'

export default function Analytics() {

  // 🔹 Line Chart (Balance Trend)
  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Balance",
        data: [5000, 7000, 6500, 9000, 12000],
        borderColor: "#3b82f6",
        backgroundColor: "rgba(59,130,246,0.2)",
        tension: 0.4,
        fill: true
      }
    ]
  };

  // 🔹 Bar Chart (Income vs Expense)
  const barData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Income",
        data: [4000, 6000, 5500, 7000, 9000],
        backgroundColor: "#22c55e"
      },
      {
        label: "Expense",
        data: [3000, 4000, 4200, 5000, 6500],
        backgroundColor: "#ef4444"
      }
    ]
  };

  // 🔹 Doughnut Chart (Category)
  const doughnutData = {
    labels: ["Food", "Travel", "Bills", "Shopping"],
    datasets: [
      {
        data: [500, 800, 1200, 600],
        backgroundColor: [
          "#3b82f6",
          "#22c55e",
          "#a855f7",
          "#f59e0b"
        ],
        borderWidth: 0
      }
    ]
  };

  return (
    <div className="analytics">

      {/* 🔹 Top Metrics */}
      <div className="metrics">
        <div className="card">
          <p>Total Income</p>
          <h2>₹45,000</h2>
        </div>

        <div className="card">
          <p>Total Expense</p>
          <h2>₹28,000</h2>
        </div>

        <div className="card">
          <p>Savings</p>
          <h2>₹17,000</h2>
        </div>
      </div>

      {/* 🔹 Charts */}
      <div className="charts">

        {/* Line Chart */}
        <div className="chart-card large">
          <h4>Balance Trend</h4>
          <Line data={lineData} />
        </div>

        {/* Bar Chart */}
        <div className="chart-card">
          <h4>Income vs Expense</h4>
          <Bar data={barData} />
        </div>

        {/* Doughnut Chart */}
        <div className="chart-card">
          <h4>Spending Distribution</h4>
          <Doughnut data={doughnutData} />
        </div>

      </div>
    </div>
  );
}