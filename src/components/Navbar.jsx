import "./Navbar.css";

export default function Navbar({ setPage, currentPage }) {
  return (
    <nav className="navbar">
      
      <h2 className="logo">🏥 HealthCare+</h2>

      <div className="nav-links">
        <button
          className={currentPage === "home" ? "active" : ""}
          onClick={() => setPage("home")}>Home</button>

        <button
          className={currentPage === "doctors" ? "active" : ""}
          onClick={() => setPage("doctors")}>Doctor</button>

        <button
          className={currentPage === "dashboard" ? "active" : ""}
          onClick={() => setPage("dashboard")}>Dashboard</button>
      </div>
    </nav>
  );
}