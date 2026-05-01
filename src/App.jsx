import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Doctors from "./pages/Doctors";
import Booking from "./pages/Booking";
import Dashboard from "./pages/Dashboard";

export default function App() {
  const [page, setPage] = useState("home");
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  return (
    <>
      <Navbar setPage={setPage} />

      {page === "home" && <Home setPage={setPage} />}
      
      {page === "doctors" && (
        <Doctors 
          setPage={setPage} 
          setSelectedDoctor={setSelectedDoctor} 
        />
      )}

      {page === "booking" && (
        <Booking 
          doctor={selectedDoctor} 
          setPage={setPage} 
        />
      )}

      {page === "dashboard" && <Dashboard />}
    </>
  );
}