import React, { useState, useEffect } from 'react';
import doctors from '../data/doctors.json';
import DoctorCard from './DoctorCard';

function DoctorList() {
  const [search, setSearch] = useState('');

  const filteredDoctors = doctors.filter(doc =>
    doc.name.toLowerCase().includes(search.toLowerCase()) ||
    doc.specialization.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search doctors..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {filteredDoctors.map(doc => (
          <DoctorCard key={doc.id} doctor={doc} />
        ))}
      </div>
    </div>
  );
}

export default DoctorList;
