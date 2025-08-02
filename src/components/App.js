import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DoctorCard from './components/DoctorCard';
import DoctorProfile from './components/DoctorProfile';
import AppointmentForm from './components/AppointmentForm';
import doctors from './data/doctors.json';
import './App.css';

const App = () => {
  const [search, setSearch] = useState('');

  const filteredDoctors = doctors.filter(doctor =>
    doctor.name.toLowerCase().includes(search.toLowerCase()) ||
    doctor.specialization.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Router>
      <div className="app">
        <h1>Healthcare Appointment Booking</h1>
        <Routes>
          <Route path="/" element={
            <>
              <input
                type="text"
                placeholder="Search by name or specialization"
                onChange={e => setSearch(e.target.value)}
              />
              <div className="doctor-list">
                {filteredDoctors.map(doc => <DoctorCard key={doc.id} doctor={doc} />)}
              </div>
            </>
          } />
          <Route path="/doctor/:id" element={<DoctorProfile />} />
          <Route path="/book/:id" element={<AppointmentForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
