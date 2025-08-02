import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import doctors from '../data/doctors.json';
import './index.css';

const DoctorProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const doctor = doctors.find(d => d.id === parseInt(id));

  if (!doctor) return <p>Doctor not found.</p>;

  return (
    <div className="doctor-profile">
      <img src={doctor.image} alt={doctor.name} />
      <h2>{doctor.name}</h2>
      <p>Specialization: {doctor.specialization}</p>
      <p>Availability: {doctor.availability}</p>
      <p>Next Available Dates: {doctor.schedule.join(', ') || 'N/A'}</p>
      <button onClick={() => navigate(`/book/${doctor.id}`)}>Book Appointment</button>
    </div>
  );
};

export default DoctorProfile;
