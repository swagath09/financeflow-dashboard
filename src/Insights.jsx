import { TrendingUp, TrendingDown, ShoppingCart, Activity, Wallet } from "lucide-react";
import './insights.css'
export default function Insights() {

  const insights = [
    {
      title: "Highest Spending",
      value: "Food",
      amount: "₹1,350",
      desc: "You spent the most on Food this month",
      icon: <ShoppingCart />,
      color: "blue"
    },
    {
      title: "Monthly Change",
      value: "+20%",
      desc: "You spent 20% more than last month",
      icon: <TrendingUp />,
      color: "green",
      trend: "up"
    },
    {
      title: "Total Transactions",
      value: "42",
      desc: "Total transactions this month",
      icon: <Activity />,
      color: "purple"
    },
    {
      title: "Savings Trend",
      value: "-8%",
      desc: "Savings decreased compared to last month",
      icon: <TrendingDown />,
      color: "red",
      trend: "down"
    }
  ];

  return (
    <div className="insights">

      <h2>Smart Insights</h2>

      <div className="insight-grid">
        {insights.map((item, index) => (
          <div className={`insight-card ${item.color}`} key={index}>

            <div className="icon">{item.icon}</div>

            <p className="title">{item.title}</p>

            <h3>
              {item.value} 
              {item.amount && <span> ({item.amount})</span>}
            </h3>

            <p className="desc">{item.desc}</p>

            {item.trend && (
              <span className={`trend ${item.trend}`}>
                {item.trend === "up" ? "↑" : "↓"}
              </span>
            )}

          </div>
        ))}
      </div>

    </div>
  );
}