import "./DoctorCard.css";

export default function DoctorCard({ doc, onSelect }) {
  return (
    <div className="card doctor-card">
      
    
      <div className="doctor-header">
        <img 
          src={doc.image} 
          alt={doc.name} 
          className="doctor-img"/>

        <div>
          <h3>{doc.name}</h3>
          <p className="specialty">{doc.specialty}</p>
        </div>
      </div>

   
      <div className="doctor-info">
        <span>⭐ {doc.rating}</span>
        <span>💼 {doc.experience}</span>
        <span>📍 {doc.location}</span>
      </div>

      <div className="doctor-footer">
        <span className="fee">₹{doc.consultationFee}</span>
        <span className="availability">{doc.availability}</span>
      </div>

      <button 
        className="btn book-btn"
        onClick={() => onSelect(doc)}>
        Book Appointment
      </button>
    </div>
  );
}