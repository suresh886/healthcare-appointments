import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import doctors from '../data/doctors.json';
import './AppointmentForm.css';

function AppointmentForm() {
  const { id } = useParams();
  const doctor = doctors.find(d => d.id === parseInt(id));

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    datetime: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (!doctor) return <p>Doctor not found</p>;

  return (
    <div className="appointment-form">
      <h2>Book Appointment with {doctor.name}</h2>
      {submitted ? (
        <p>Appointment booked successfully!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>Name:
            <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
          </label>
          <label>Email:
            <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
          </label>
          <label>Date & Time:
            <input type="datetime-local" required value={formData.datetime} onChange={(e) => setFormData({ ...formData, datetime: e.target.value })} />
          </label>
          <button type="submit">Book</button>
        </form>
      )}
    </div>
  );
}

export default AppointmentForm;
