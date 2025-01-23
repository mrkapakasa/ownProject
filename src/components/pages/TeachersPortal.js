import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function ParentDashboard() {
  const navigate = useNavigate(); // For navigation
  const [students, setStudents] = useState([]); // Stores all saved student data
  const [searchName, setSearchName] = useState(''); // Stores the inputted name in the search bar
  const [searchResult, setSearchResult] = useState(null); // Stores the search result
  const [errorMessage, setErrorMessage] = useState(''); // Stores error messages

  useEffect(() => {
    // Load saved students from localStorage
    const savedStudents = localStorage.getItem('students');
    if (savedStudents) {
      setStudents(JSON.parse(savedStudents));
    }
  }, []);

  const handleSearch = () => {
    // Find a student whose name matches the search query
    const student = students.find(
      (student) => student.name.toLowerCase() === searchName.toLowerCase().trim()
    );

    if (student) {
      setSearchResult(student);
      setErrorMessage('');
    } else {
      setSearchResult(null);
      setErrorMessage('No student found with that name.');
    }
  };

  return (
    <main className="bg-red-50 min-h-screen flex flex-col items-center">
      {/* Header */}
      <header className="bg-red-600 text-white w-full py-6 flex items-center justify-between px-4">
        <div className="text-center flex-grow">
          <h1 className="text-3xl font-bold">Parent Dashboard</h1>
          <p className="text-sm mt-2">Search for your child's academic progress.</p>
        </div>
      </header>

      {/* Search Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Search for Your Child</h2>
          <div className="flex items-center gap-4 mb-4">
            <input
              type="text"
              placeholder="Enter your child's name"
              value={searchName}
              onChange={(e) => setSearchName(e.target.value)}
              className="w-full border rounded p-2"
            />
            <button
              onClick={handleSearch}
              className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition"
            >
              Search
            </button>
          </div>
          {errorMessage && <p className="text-red-600 font-medium">{errorMessage}</p>}
        </div>
      </section>

      {/* Results Section */}
      {searchResult && (
        <section className="container mx-auto px-4 py-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Results for: {searchResult.name}</h2>
            <table className="w-full border-collapse border border-gray-200">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-2">Subject</th>
                  <th className="border p-2">Score</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(searchResult.grades).map(([subject, score]) => (
                  <tr key={subject}>
                    <td className="border p-2 capitalize">{subject.replace(/([A-Z])/g, ' $1')}</td>
                    <td className="border p-2 text-center">{score || 'N/A'}</td>
                  </tr>
                ))}
                <tr>
                  <td className="border p-2 font-bold">Total Score</td>
                  <td className="border p-2 text-center font-bold">{searchResult.totalScore}</td>
                </tr>
                <tr>
                  <td className="border p-2 font-bold">Grade</td>
                  <td className="border p-2 text-center font-bold">{searchResult.grade}</td>
                </tr>
                <tr>
                  <td className="border p-2 font-bold">Position</td>
                  <td className="border p-2 text-center font-bold">{searchResult.position}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-red-600 text-white w-full py-4 text-center">
        <p className="text-sm">© Primary School Portal. All Rights Reserved.</p>
      </footer>

      {/* Go Back Button */}
      <button
        onClick={() => navigate(-1)} // Navigate back to the previous page
        className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700 transition fixed bottom-4 left-4"
      >
        Go Back
      </button>
    </main>
  );
}

export default ParentDashboard;