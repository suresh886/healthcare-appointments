import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DoctorList from './components/DoctorList';
import DoctorProfile from './components/DoctorProfile';
import AppointmentForm from './components/AppointmentForm';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <h1>Healthcare Appointment Booking</h1>
        <Routes>
          <Route path="/" element={<DoctorList />} />
          <Route path="/doctor/:id" element={<DoctorProfile />} />
          <Route path="/book/:id" element={<AppointmentForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
