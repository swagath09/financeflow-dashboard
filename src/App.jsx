import './App.css';
import { useState} from 'react';
import Transactions from "./transactions";
import Analytics from './Analytics';
import Reports from './Reports';
import Insights from './Insights';
import {
  LayoutDashboard,
  CreditCard,
  BarChart3,
  FileText,
  Sparkles,
  Settings,
  User,
  LogOut,
  Bell,
  Moon,
  ChevronDown,
  Wallet,
  TrendingUp,
  TrendingDown,
  ShoppingCart,
  Calendar,
  Activity,
  Menu
} from "lucide-react";

import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip
} from "chart.js";

ChartJS.register(ArcElement, Tooltip);

import { Line } from "react-chartjs-2";
import {
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

function App() {
  const[show, setShow] = useState(false);
  const data = {
    labels: ["Bills", "Food", "Travel", "Shopping"],
    datasets: [
      {
        data: [1350, 209, 580, 520],
        backgroundColor: [
          "#3b82f6",
          "#22c55e",
          "#f59e0b",
          "#ef4444"
        ],
        borderWidth: 0
      }
    ]
  };

  const lineData = {
    labels: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar"],
    datasets: [
      {
        label: "Balance",
        data: [2500, 5600, 5200, 8700, 11800, 14920],
        borderColor: "#3b82f6",
        backgroundColor: "rgba(59,130,246,0.2)",
        tension: 0.4,
        fill: true
      }
    ]
  };

  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const [sortType, setSortType] = useState("");

  const transactions = [
    { date: "28 Mar 2024", desc: "Salary", category: "Salary", type: "income", amount: 5420 },
    { date: "27 Mar 2024", desc: "Grocery", category: "Food", type: "expense", amount: 89 },
    { date: "26 Mar 2024", desc: "Rent", category: "Bills", type: "expense", amount: 1200 },
    { date: "25 Mar 2024", desc: "Dinner", category: "Food", type: "expense", amount: 45 },
    { date: "24 Mar 2024", desc: "Shopping", category: "Shopping", type: "expense", amount: 320 },
    { date: "22 Mar 2024", desc: "Travel", category: "Travel", type: "expense", amount: 580 }
  ];

  let filteredData = transactions.filter((t) =>
    [t.desc, t.category, t.type].some((value) =>
      value.toLowerCase().includes(search.toLowerCase())
    )
  );

  if (typeFilter !== "all") {
    filteredData = filteredData.filter((t) => t.type === typeFilter);
  }

  if (sortType === "amount") {
    filteredData.sort((a, b) => b.amount - a.amount);
  }

  const [sidebarOpen, setSidebarOpen] = useState(false);
const [dropdownOpen, setDropdownOpen] = useState(false);
const [activePage, setActivePage] = useState("dashboard");

  return (
    <div className="app-container">

      <aside className={`aside ${sidebarOpen ? "active" : ""}`}>
        <div className="brand">
          <div className="logo">F</div>
          <div className="name">FinanceFlow</div>
          
        </div>

        <nav className="nav-menu">

          <button 
            className={activePage === "dashboard" ? "active" : ""}
            onClick={() => setActivePage("dashboard")}
          >
            <LayoutDashboard size={18} />
            Dashboard
          </button>

          <button 
            className={activePage === "transactions" ? "active" : ""}
            onClick={() => setActivePage("transactions")}
          >
            <CreditCard size={18} />
            Transactions
          </button>

          <button 
            className={activePage === "analytics" ? "active" : ""}
            onClick={() => setActivePage("analytics")}
          >
            <BarChart3 size={18} />
            Analytics
          </button>

          <button 
            className={activePage === "reports" ? "active" : ""}
            onClick={() => setActivePage("reports")}
          >
            <FileText size={18} />
            Reports
          </button>

          <button 
            className={activePage === "insights" ? "active" : ""}
            onClick={() => setActivePage("insights")}
          >
            <Sparkles size={18} />
            Insights
          </button>

        </nav>

        <div className="bottom-menu">
          <div className="divider"></div>

          <button>
            <User size={18} />
            Profile
          </button>

          <button>
            <Settings size={18} />
            Settings
          </button>

          <button className="logout">
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </aside>

      {sidebarOpen && (
        <div className="overlay" onClick={() => setSidebarOpen(false)} />
      )}

      <div className="main">

        <header className="navbar">

          <div className="nav-left">
            <div className="menu-btn" onClick={() => setSidebarOpen(!sidebarOpen)}>
              <Menu size={20} />
            </div>

            <div className="brand-mobile">
              <div className="logo">F</div>
              <span>FinanceFlow</span>
            </div>
            <h2>Dashboard</h2>
          </div>

          <div className="nav-right">

            <div className="desktop-icons">
              <div className="icon-btn">
                <Moon size={18} />
              </div>

              <div className="icon-btn">
                <Bell size={18} />
              </div>
            </div>

            <div className="user-wrapper">
              <div className="user-box" onClick={() => setDropdownOpen(!dropdownOpen)}>
                <User size={18} />
                <span className="username">John Doe</span>
                <ChevronDown size={16} />
              </div>

              {dropdownOpen && (
                <div className="dropdown">
                  <p>Switch to Admin</p>
                  <p>Switch to Viewer</p>
                </div>
              )}
            </div>

          </div>

        </header>

        <main className="content">

          {activePage === "dashboard" && (
            <>
              <div className='welcome'>
              <h3>Welcome back, Johe Doe 👋</h3>
              <p>Monitor and understand your financial activity with smart insights</p>
            </div>
            
            <div className="cards">

              <div className="card balance" id='balance1'>
                <div className="card-top">
                  <div className="icon blue"><Wallet size={18} /></div>
                  <span className="badge">Current</span>
                </div>

                <h4>Total Balance</h4>
                <h2>₹24,920.50</h2>
                <p className="positive">+12.5% from last month</p>
              </div>

              <div className="card income">
                <div className="card-top">
                  <div className="icon green"><TrendingUp size={18} /></div>
                  <span className="badge green">Income</span>
                </div>

                <h4>Total Income</h4>
                <h2>₹6,620.00</h2>
                <p className="positive">+8.2% from last month</p>
              </div>

              <div className="card expense">
                <div className="card-top">
                  <div className="icon red"><TrendingDown size={18} /></div>
                  <span className="badge red">Expenses</span>
                </div>

                <h4>Total Expenses</h4>
                <h2>₹2,659.50</h2>
                <p className="negative">-3.1% from last month</p>
              </div>

            </div>

            <div className="charts">

              <div className="chart-box">
                <h4>Balance Trend</h4>

                <Line
                  data={lineData}
                  options={{
                    responsive: true,
                    plugins: {
                      legend: { display: false }
                    }
                  }}
                />
              </div>

              <div className="chart-box">
                <h4>Spending by Category</h4>

                <div className="pie-layout">

                  <div className="pie-chart">
                    <Doughnut
                      data={data}
                      options={{
                        cutout: "65%",
                        maintainAspectRatio: false,
                        plugins: { legend: { display: false } }
                      }}
                    />

                    
                  </div>

                  <div className="legend">
                  </div>

                </div>
              </div>

            </div>

            <div className="table">
              <h3>Recent Transactions</h3>

              <div className="table-controls">

                <input
                  type="text"
                  placeholder="Search..."
                  onChange={(e) => setSearch(e.target.value)}
                />

                <select onChange={(e) => setTypeFilter(e.target.value)}>
                  <option value="all">All</option>
                  <option value="income">Income</option>
                  <option value="expense">Expense</option>
                </select>

                <select onChange={(e) => setSortType(e.target.value)}>
                  <option value="">Sort</option>
                  <option value="amount">Amount</option>
                </select>

              </div>

              <div className='table-wrapper'>
                <table>
                <thead>
                  <tr>
                    <th>DATE</th>
                    <th>DESCRIPTION</th>
                    <th>CATEGORY</th>
                    <th>TYPE</th>
                    <th>AMOUNT</th>
                  </tr>
                </thead>

                <tbody>
                  {filteredData.map((t, index) => (
                    <tr key={index}>
                      <td>{t.date}</td>
                      <td><strong>{t.desc}</strong></td>
                      <td>{t.category}</td>

                      <td>
                        <span className={`tag ${t.type}`}>
                          {t.type}
                        </span>
                      </td>

                      <td className={t.type === "income" ? "green" : "red"}>
                        {t.type === "income" ? "+" : "-"}₹{t.amount}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              </div>
            </div>

            Key Insights
            <div className="insights">
              
              <div className="insight-card">
                <div className="insight-icon blue"><ShoppingCart size={18} /></div>
                <p className="label">Highest Spending</p>
                <h3>Bills</h3>
                <span className="sub">₹1,350</span>
              </div>

              <div className="insight-card">
                <div className="insight-icon green"><Calendar size={18} /></div>
                <p className="label">This Month</p>
                <h3>₹2,659</h3>
                <span className="sub">Total expenses</span>
              </div>

              <div className="insight-card">
                <div className="insight-icon orange"><Activity size={18} /></div>
                <p className="label">Total Transactions</p>
                <h3>10</h3>
                <span className="sub">All time</span>
              </div>

              <div className="insight-card">
                <div className="insight-icon red"><TrendingUp size={18} /></div>
                <p className="label">Avg Transaction</p>
                <h3>₹927</h3>
                <span className="sub">Per transaction</span>
              </div>

            </div>
            </>
          )}

          {activePage === "transactions" && <Transactions />}

          {activePage === "analytics" && <Analytics />}

          {activePage === "reports" && <Reports />}

          {activePage === "insights" && <Insights />}

        </main>
      </div>

    </div>
  )
}

export default App