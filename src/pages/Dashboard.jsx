import { useEffect, useState } from "react";
import "./Dashboard.css";

export default function Dashboard() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("appointments")) || [];
    setAppointments(data);
  }, []);

  return (
    <div className="dashboard">
      <h1>📊 Dashboard</h1>

      {appointments.length === 0 ? (
        <p className="empty">No appointments booked yet.</p>
      ) : (
        <div className="grid">
          {appointments.map((item, index) => (
            <div key={index} className="card dashboard-card">
              <h3>{item.name}</h3>
              <p>{item.specialty}</p>
              <p>📅 {item.date || "N/A"}</p>
              <p>⏰ {item.time || "N/A"}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}