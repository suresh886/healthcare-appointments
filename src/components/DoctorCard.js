import React from 'react';
import './DoctorCard.css';
import { Link } from 'react-router-dom';

function DoctorCard({ doctor }) {
  return (
    <div className="doctor-card">
      <img src={doctor.profileImage} alt={doctor.name} />
      <h3>{doctor.name}</h3>
      <p>{doctor.specialization}</p>
      <p>Status: <strong>{doctor.availability}</strong></p>
      <Link to={`/doctor/${doctor.id}`}>View Profile</Link>
    </div>
  );
}

export default DoctorCard;
