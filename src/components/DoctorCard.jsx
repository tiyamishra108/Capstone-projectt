export default function DoctorCard({ doc, onSelect }) {
  return (
    <div className="card">
      <h3>{doc.name}</h3>
      <p>{doc.specialty}</p>
      <button className="btn" onClick={() => onSelect(doc)}>
        Book
      </button>
    </div>
  );
}