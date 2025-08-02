import React, { useState, useEffect } from 'react';
import DoctorCard from './DoctorCard/index.js';
import './index.css';
import doctorsData from '../data/doctors.json';

const DoctorList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredDoctors, setFilteredDoctors] = useState([]);

  useEffect(() => {
    setFilteredDoctors(doctorsData);
  }, []);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    const filtered = doctorsData.filter((doctor) =>
      doctor.name.toLowerCase().includes(term) ||
      doctor.specialization.toLowerCase().includes(term)
    );
    setFilteredDoctors(filtered);
  };

  return (
    <div className="doctor-list-container">
      <h1 className="title">Find a Doctor</h1>
      <input
        type="text"
        placeholder="Search by name or specialization..."
        value={searchTerm}
        onChange={handleSearch}
        className="search-input"
      />

      <div className="doctor-cards-container">
        {filteredDoctors.length > 0 ? (
          filteredDoctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))
        ) : (
          <p className="no-results">No doctors found.</p>
        )}
      </div>
    </div>
  );
};

export default DoctorList;
