import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import doctors from '../data/doctors.json';
import './index.css';

const AppointmentForm = () => {
  const { id } = useParams();
  const doctor = doctors.find(d => d.id === parseInt(id));
  const [form, setForm] = useState({ name: '', email: '', datetime: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (!doctor) return <p>Doctor not found.</p>;

  return (
    <div className="appointment-form">
      <h2>Book an Appointment with {doctor.name}</h2>
      {submitted ? (
        <p className="confirmation">Appointment confirmed for {form.name} on {form.datetime}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <input name="name" placeholder="Your Name" onChange={handleChange} required />
          <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
          <input name="datetime" type="datetime-local" onChange={handleChange} required />
          <button type="submit">Confirm Appointment</button>
        </form>
      )}
    </div>
  );
};

export default AppointmentForm;
