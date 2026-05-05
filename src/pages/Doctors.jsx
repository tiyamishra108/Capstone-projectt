import DoctorCard from "../components/DoctorCard";
import { doctors } from "../data/doctors";

export default function Doctors({ setPage, setSelectedDoctor }) {

  const handleSelect = (doctor) => {
    console.log("CLICK WORKING:", doctor); // 👈 MUST PRINT
    setSelectedDoctor(doctor);
    setPage("booking");
  };

  return (
    <div className="grid">
      {doctors.map((doc) => (
        <DoctorCard
          key={doc.id}
          doc={doc}
          onSelect={handleSelect}   // ✅ CRITICAL LINE
        />
      ))}
    </div>
  );
}