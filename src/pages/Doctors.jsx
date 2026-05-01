import { doctors } from "../data/doctors";
import DoctorCard from "../components/DoctorCard";

export default function Doctors({ setPage, setSelectedDoctor }) {
  const handleSelect = (doc) => {
    setSelectedDoctor(doc);
    setPage("booking");
  };

  return (
    <div className="grid">
      {doctors.map((doc) => (
        <DoctorCard key={doc.id} doc={doc} onSelect={handleSelect} />
      ))}
    </div>
  );
}