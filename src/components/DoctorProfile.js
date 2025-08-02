import React from 'react';
import { useParams, Link } from 'react-router-dom';
import doctors from '../data/doctors.json';
import './DoctorProfile.css';

function DoctorProfile() {
  const { id } = useParams();
  const doctor = doctors.find(d => d.id === parseInt(id));

  if (!doctor) return <p>Doctor not found</p>;

  return (
    <div className="doctor-profile">
      <img src={doctor.profileImage} alt={doctor.name} />
      <h2>{doctor.name}</h2>
      <p>Specialization: {doctor.specialization}</p>
      <p>Status: {doctor.availability}</p>
      <h4>Schedule:</h4>
      <ul>
        {doctor.schedule.length ? doctor.schedule.map((s, index) => (
          <li key={index}>{s}</li>
        )) : <li>No available slots</li>}
      </ul>
      <Link to={`/book/${doctor.id}`} className="btn">Book Appointment</Link>
    </div>
  );
}

export default DoctorProfile;
