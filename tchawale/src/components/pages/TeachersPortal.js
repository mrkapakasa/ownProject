import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function TeachersPortal() {
  const navigate = useNavigate();
  const [showGradingForm, setShowGradingForm] = useState(false);
  const [students, setStudents] = useState([]);
  const [currentStudent, setCurrentStudent] = useState({
    name: '',
    grades: {
      mathematics: '',
      english: '',
      chichewa: '',
      agriculture: '',
      socialStudies: '',
      scienceAndTech: '',
      bibleKnowledge: '',
      expressiveArts: '',
    },
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Check if the value exceeds 100
    if (value > 100) {
      setError(`The score for ${name.replace(/([A-Z])/g, ' $1')} cannot exceed 100.`);
    } else {
      setError('');
      if (name === 'name') {
        setCurrentStudent((prev) => ({ ...prev, name: value }));
      } else {
        // Ensure score doesn't exceed 100
        const score = value > 100 ? 100 : value;
        setCurrentStudent((prev) => ({
          ...prev,
          grades: { ...prev.grades, [name]: score },
        }));
      }
    }
  };

  const calculateGrade = (total) => {
    if (total < 40) return 'F';
    if (total < 50) return 'D';
    if (total < 61) return 'C';
    if (total < 75) return 'B';
    return 'A';
  };

  const calculateTotal = (grades) => {
    return Object.values(grades).reduce((sum, value) => sum + Number(value || 0), 0);
  };

  const saveStudent = () => {
    const totalScore = calculateTotal(currentStudent.grades);
    const grade = calculateGrade(totalScore);

    const newStudent = {
      name: currentStudent.name,
      totalScore,
      grade,
    };

    const updatedStudents = [...students, newStudent].sort((a, b) => b.totalScore - a.totalScore);

    updatedStudents.forEach((student, index) => {
      student.position = index + 1;
    });

    setStudents(updatedStudents);
    setCurrentStudent({
      name: '',
      grades: {
        mathematics: '',
        english: '',
        chichewa: '',
        agriculture: '',
        socialStudies: '',
        scienceAndTech: '',
        bibleKnowledge: '',
        expressiveArts: '',
      },
    });

    setMessage('Student grades saved successfully!');
    setTimeout(() => setMessage(''), 3000);
  };

  useEffect(() => {
    const savedStudents = localStorage.getItem('students');
    if (savedStudents) {
      setStudents(JSON.parse(savedStudents));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('students', JSON.stringify(students));
  }, [students]);

  const resources = [
    {
      title: 'Lesson Plans',
      description: 'Access and manage your daily and weekly lesson plans.',
      bgColor: 'bg-green-100',
      textColor: 'text-green-700',
    },
    {
      title: 'Grading Tools',
      description: 'Track and grade student assignments and exams.',
      bgColor: 'bg-blue-100',
      textColor: 'text-blue-700',
    },
    {
      title: 'Classroom Management',
      description: 'Resources to help you manage your classroom effectively.',
      bgColor: 'bg-yellow-100',
      textColor: 'text-yellow-700',
    },
    {
      title: 'Professional Development',
      description: 'Find training and workshops to enhance your teaching skills.',
      bgColor: 'bg-red-100',
      textColor: 'text-red-700',
    },
  ];

  return (
    <main className="bg-blue-50 min-h-screen flex flex-col items-center">
      {/* Header */}
      <header className="bg-blue-600 text-white w-full py-6 text-center flex justify-between items-center">
        <button
          onClick={() => navigate(-1)} // Navigate to the previous page
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
        >
          Go Back
        </button>
        <div className="flex-grow text-center">
          <h1 className="text-3xl font-bold">Teacher's Portal</h1>
          <p className="text-sm mt-2">Access all the resources you need to manage your classes.</p>
        </div>
      </header>

      {/* Resources Section */}
      {!showGradingForm && (
        <section className="container mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {resources.map((resource, index) => (
            <div
              key={index}
              className={`${resource.bgColor} p-4 rounded-lg shadow hover:shadow-lg transition`}
            >
              <h2 className={`text-lg font-semibold ${resource.textColor}`}>{resource.title}</h2>
              <p className="text-sm text-gray-600 mt-2">{resource.description}</p>
              {resource.title === 'Grading Tools' && (
                <button
                  onClick={() => setShowGradingForm(true)} // Hide other sections and show grading form
                  className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
                >
                  Start Grading
                </button>
              )}
            </div>
          ))}
        </section>
      )}

      {/* Grading Tools Form */}
      {showGradingForm && (
        <section className="w-full bg-white p-6 rounded-lg shadow-md mt-8">
          <h2 className="text-xl font-semibold mb-4">Grading Tools</h2>
          {message && <p className="text-green-600 font-medium mb-4">{message}</p>}
          {error && <p className="text-red-600 font-medium mb-4">{error}</p>}
          <form className="space-y-4">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Student Name</label>
              <input
                type="text"
                name="name"
                value={currentStudent.name}
                onChange={handleInputChange}
                className="w-full border rounded p-2"
              />
            </div>

            {Object.keys(currentStudent.grades).map((subject) => (
              <div key={subject}>
                <label className="block mb-2 text-sm font-medium text-gray-700 capitalize">
                  {subject.replace(/([A-Z])/g, ' $1')}
                </label>
                <input
                  type="number"
                  name={subject}
                  value={currentStudent.grades[subject]}
                  onChange={handleInputChange}
                  className="w-full border rounded p-2"
                  max={100}
                />
              </div>
            ))}

            <button
              type="button"
              onClick={saveStudent}
              className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Save Student Grades
            </button>
          </form>

          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-4">Leaderboard</h3>
            {students.length > 0 ? (
              <table className="w-full border-collapse border border-gray-200">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border p-2">Position</th>
                    <th className="border p-2">Name</th>
                    <th className="border p-2">Total Score</th>
                    <th className="border p-2">Grade</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((student, index) => (
                    <tr key={index} className={index < 3 ? 'bg-yellow-50' : ''}>
                      <td className="border p-2 text-center">{student.position}</td>
                      <td className="border p-2">{student.name}</td>
                      <td className="border p-2 text-center">{student.totalScore}</td>
                      <td className="border p-2 text-center">{student.grade}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>No grades have been entered yet.</p>
            )}
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-blue-600 text-white w-full py-4 text-center">
        <p className="text-sm">© Primary School Portal. All Rights Reserved.</p>
      </footer>
    </main>
  );
}

export default TeachersPortal;
