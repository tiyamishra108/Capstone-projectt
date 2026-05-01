export default function Dashboard() {
  const bookings = JSON.parse(localStorage.getItem("appointments")) || [];

  return (
    <div className="container">
      <h2>Your Appointments</h2>

      {bookings.length === 0 ? (
        <p>No appointments yet</p>
      ) : (
        bookings.map((b, i) => (
          <div key={i} className="card">
            <p><strong>{b.name}</strong></p>
            <p>{b.specialty}</p>
            <p>{b.date}</p>
          </div>
        ))
      )}
    </div>
  );
}