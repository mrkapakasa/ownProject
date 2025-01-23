import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

function ParentDashboard() {
  const navigate = useNavigate();

  // Sample data for students
  const [students] = useState([
    {
      username: 'john_doe',
      name: 'John Doe',
      subjects: [
        { name: 'Mathematics', grade: 'A' },
        { name: 'English', grade: 'B+' },
        { name: 'Science', grade: 'A-' },
      ],
      position: 3,
    },
    {
      username: 'jane_smith',
      name: 'Jane Smith',
      subjects: [
        { name: 'Mathematics', grade: 'B' },
        { name: 'English', grade: 'A' },
        { name: 'Science', grade: 'B+' },
      ],
      position: 1,
    },
    {
      username: 'peter_parker',
      name: 'Peter Parker',
      subjects: [
        { name: 'Mathematics', grade: 'A+' },
        { name: 'English', grade: 'A' },
        { name: 'Science', grade: 'A+' },
      ],
      position: 2,
    },
  ]);

  // State to manage search input and results
  const [searchInput, setSearchInput] = useState('');
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [error, setError] = useState('');

  // Handle the search functionality
  const handleSearch = () => {
    const student = students.find((s) => s.username === searchInput.trim().toLowerCase());
    if (student) {
      setSelectedStudent(student);
      setError('');
    } else {
      setSelectedStudent(null);
      setError('No student found with that username.');
    }
  };

  return (
    <div className="bg-pink-100 p-6 rounded-lg shadow-md">
      {/* Backward Arrow Only */}
      <button
        onClick={() => navigate(-1)} // Navigate to the previous page
         className="absolute top-4 left-4 bg-blue-600 text-white p-2 rounded-full hover:bg-red-700 transition flex items-center justify-center"
      >
        <FiArrowLeft size={28} /> {/* Only the backward arrow */}
      </button>

      <h2 className="text-2xl font-bold text-red-600 mb-4">Parent Dashboard</h2>
      <p className="text-gray-700 mb-6">
        Search for your child’s performance using their username.
      </p>

      {/* Search Bar */}
      <div className="flex items-center space-x-4 mb-6">
        <input
          type="text"
          placeholder="Enter child’s username"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
        />
        <button
          onClick={handleSearch}
          className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
        >
          Search
        </button>
      </div>

      {error && <p className="text-red-600 mb-4">{error}</p>}

      {/* Student Details */}
      {selectedStudent && (
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-gray-800 mb-2">{selectedStudent.name}</h3>
          <p className="text-gray-600 mb-4">Position: {selectedStudent.position}</p>
          <h4 className="text-lg font-semibold text-gray-700 mb-2">Subjects:</h4>
          <ul className="list-disc pl-5 text-gray-700">
            {selectedStudent.subjects.map((subject, index) => (
              <li key={index}>
                {subject.name}: <span className="font-semibold">{subject.grade}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ParentDashboard;
