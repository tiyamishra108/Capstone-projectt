export default function Navbar({ setPage }) {
  return (
    <div className="navbar">
      <h2>HealthCare+</h2>
      <div>
        <button onClick={() => setPage("home")}>Home</button>
        <button onClick={() => setPage("doctors")}>Doctors</button>
        <button onClick={() => setPage("dashboard")}>Dashboard</button>
      </div>
    </div>
  );
}