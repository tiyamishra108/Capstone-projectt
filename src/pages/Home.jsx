export default function Home({ setPage }) {
  return (
    <div className="container">
      <h1>Book Appointments Easily</h1>
      <p>Find the best doctors near you</p>
      <button className="btn" onClick={() => setPage("doctors")}>
        Explore Doctors
      </button>
    </div>
  );
}