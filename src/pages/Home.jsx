import "./Home.css";

export default function Home({ setPage }) {
  return (
    <div className="home">
      <div className="home-content">
        <h1>Book Appointments Easily</h1>
        <p>Find the best doctors near you and book appointments instantly with our smart healthcare system.</p>

        <button 
          className="home-btn"
          onClick={() => setPage("doctors")}>Get Started</button>
      </div>
    </div>
  );
}