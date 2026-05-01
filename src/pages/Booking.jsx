export default function Booking({ doctor, setPage }) {
  if (!doctor) return <h2>No doctor selected</h2>;

  const handleBooking = () => {
    const bookings = JSON.parse(localStorage.getItem("appointments")) || [];

    bookings.push({
      name: doctor.name,
      specialty: doctor.specialty,
      date: new Date().toLocaleString(),
    });

    localStorage.setItem("appointments", JSON.stringify(bookings));
    setPage("dashboard");
  };

  return (
    <div className="container">
      <h2>Booking for {doctor.name}</h2>
      <button className="btn" onClick={handleBooking}>
        Confirm Appointment
      </button>
    </div>
  );
}