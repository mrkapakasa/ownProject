import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

function StudentResources() {
  const navigate = useNavigate();

  const resources = [
    {
      title: 'Assignments',
      description: 'Download and submit your class assignments.',
      link: '/assignments',
      bgColor: 'bg-yellow-100',
      textColor: 'text-yellow-700',
    },
    {
      title: 'Study Materials',
      description: 'Access textbooks, notes, and practice questions.',
      link: '/study-materials',
      bgColor: 'bg-green-100',
      textColor: 'text-green-700',
    },
    {
      title: 'Online Classes',
      description: 'Join live sessions and catch up on recorded lectures.',
      link: '/online-classes',
      bgColor: 'bg-blue-100',
      textColor: 'text-blue-700',
    },
  ];

  return (
    <main className="bg-blue-50 min-h-screen flex flex-col items-center relative">
      {/* Header */}
      <header className="bg-blue-600 text-white w-full py-6 text-center">
        <h1 className="text-3xl font-bold">Student Resources</h1>
        <p className="text-sm mt-2">Empowering students with the tools they need to succeed.</p>
      </header>

      {/* Resources Section */}
      <section className="container mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {resources.map((resource, index) => (
          <div
            key={index}
            className={`${resource.bgColor} p-4 rounded-lg shadow hover:shadow-lg transition`}
          >
            <h2 className={`text-lg font-semibold ${resource.textColor}`}>{resource.title}</h2>
            <p className="text-sm text-gray-600 mt-2">{resource.description}</p>
            <a
              href={resource.link}
              className="text-blue-500 hover:underline mt-4 inline-block"
            >
              Learn More →
            </a>
          </div>
        ))}
      </section>

      {/* Go Back Button */}
      <button
  onClick={() => navigate(-1)} // Navigate to the previous page
  className="absolute top-4 left-4 bg-blue-600 text-white p-2 rounded-full hover:bg-red-700 transition flex items-center justify-center"
>
  <FiArrowLeft size={28} /> {/* Arrow Icon */}
</button>


      {/* Footer */}
      <footer className="bg-blue-600 text-white w-full py-4 text-center">
        <p className="text-sm">© Primary School Portal. All Rights Reserved.</p>
      </footer>
    </main>
  );
}

export default StudentResources;
