import React from 'react';
import './DoctorCard.css';
import { useNavigate } from 'react-router-dom';

const DoctorCard = ({ doctor }) => {
  const navigate = useNavigate();

  return (
    <div className="doctor-card" onClick={() => navigate(`/doctor/${doctor.id}`)}>
      <img src={doctor.image} alt={doctor.name} />
      <h3>{doctor.name}</h3>
      <p>{doctor.specialization}</p>
      <span className={`availability ${doctor.availability.replace(' ', '').toLowerCase()}`}>
        {doctor.availability}
      </span>
    </div>
  );
};

export default DoctorCard;
