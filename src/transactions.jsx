import React, { useState } from "react";
import "./transactions.css";

const transactionsData = [
  {
    id: 1,
    date: "2026-04-01",
    description: "Swiggy Order",
    category: "Food",
    amount: 450,
    type: "expense",
    status: "Completed",
  },
  {
    id: 2,
    date: "2026-04-02",
    description: "Salary",
    category: "Income",
    amount: 25000,
    type: "income",
    status: "Completed",
  },
  {
    id: 3,
    date: "2026-04-03",
    description: "Uber Ride",
    category: "Travel",
    amount: 320,
    type: "expense",
    status: "Pending",
  },
];

export default function Transactions() {
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");

  const filtered = transactionsData.filter((t) => {
    return (
      t.description.toLowerCase().includes(search.toLowerCase()) &&
      (typeFilter === "all" || t.type === typeFilter)
    );
  });

  return (
    <div className="container">
      <div className="header">
        <h2>Transactions</h2>
        <div className="controls">
          <input
            placeholder="Search transactions..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <select onChange={(e) => setTypeFilter(e.target.value)}>
            <option value="all">All</option>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
          <button className="add-btn">+ Add</button>
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="empty">
          <p>No transactions yet</p>
          <span>Start by adding your first transaction</span>
          <button>Add Transaction</button>
        </div>
      ) : (
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Description</th>
                <th>Category</th>
                <th>Amount</th>
                <th>Type</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((t) => (
                <tr key={t.id}>
                  <td>{t.date}</td>
                  <td>{t.description}</td>
                  <td>{t.category}</td>
                  <td>₹{t.amount}</td>
                  <td>
                    <span
                      className={
                        t.type === "income" ? "income" : "expense"
                      }
                    >
                      {t.type}
                    </span>
                  </td>
                  <td>
                    <span className={`status ${t.status.toLowerCase()}`}>
                      {t.status}
                    </span>
                  </td>
                  <td className="actions">
                    <button>✏️</button>
                    <button>🗑️</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="load-more">
            <button>Load More</button>
          </div>
        </div>
      )}
    </div>
  );
}


