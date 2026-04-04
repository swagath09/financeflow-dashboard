import { useState } from "react";
import './reports.css';
export default function Reports() {
  const [filter, setFilter] = useState("all");
  const [showPreview, setShowPreview] = useState(false);
  const [selectedReport, setSelectedReport] = useState(null);
  const isAdmin = true; 

  const reports = [
    { id: 1, name: "March Report", date: "2026-03-30", type: "Monthly", status: "Ready" },
    { id: 2, name: "Expense Report", date: "2026-03-25", type: "Expense", status: "Pending" }
  ];

  const filtered = reports.filter(r =>
    filter === "all" ? true : r.type === filter
  );

  const handlePreview = (report) => {
    setSelectedReport(report);
    setShowPreview(true);
  };

  const handleDownload = (type) => {
    alert(`Downloaded as ${type}`);
  };

  return (
    <div className="reports">

      <div className="reports-header">
        <h2>Reports</h2>
        {isAdmin && <button className="generate-btn">+ Generate Report</button>}
      </div>

      <div className="summary">
        <div className="card">
          <p>Monthly Income</p>
          <h3>₹45,000</h3>
        </div>

        <div className="card">
          <p>Monthly Expense</p>
          <h3>₹28,000</h3>
        </div>

        <div className="card">
          <p>Savings</p>
          <h3>₹17,000</h3>
        </div>
      </div>

      <div className="filters">
        <select onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All</option>
          <option value="Monthly">Monthly</option>
          <option value="Expense">Expense</option>
        </select>
      </div>

      <div className="reports-table">
        {filtered.map((r) => (
          <div className="report-row" key={r.id}>

            <div>
              <h4>{r.name}</h4>
              <p>{r.date}</p>
            </div>

            <div className="type">{r.type}</div>

            <div className={`status ${r.status.toLowerCase()}`}>
              {r.status}
            </div>

            <div className="actions">
              <button onClick={() => handlePreview(r)}>View</button>
              <button onClick={() => handleDownload("PDF")}>PDF</button>
              <button onClick={() => handleDownload("CSV")}>CSV</button>
            </div>

          </div>
        ))}
      </div>

      {showPreview && (
        <div className="modal">
          <div className="modal-content">
            <h3>{selectedReport?.name}</h3>
            <p>Date: {selectedReport?.date}</p>
            <p>Type: {selectedReport?.type}</p>

            <button onClick={() => setShowPreview(false)}>Close</button>
          </div>
        </div>
      )}

    </div>
  );
}