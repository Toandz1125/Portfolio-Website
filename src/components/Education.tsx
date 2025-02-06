import React from 'react';
import AnimatedSection from './AnimatedSection';

export default function Education() {
  const education = [
    {
      degree: "Master of Science in Computer Science",
      institution: "Stanford University",
      year: "2018",
      courses: ["Advanced Algorithms", "Machine Learning", "Distributed Systems"]
    },
    {
      degree: "Bachelor of Science in Software Engineering",
      institution: "MIT",
      year: "2016",
      courses: ["Data Structures", "Web Development", "Computer Networks"]
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-3xl font-bold text-center mb-16">Education</h2>
        </AnimatedSection>
        
        <div className="max-w-3xl mx-auto">
          {education.map((edu, index) => (
            <AnimatedSection key={index} direction={index % 2 === 0 ? "left" : "right"}>
              <div className="mb-12 last:mb-0">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">{edu.degree}</h3>
                  <span className="text-blue-600 font-medium">{edu.year}</span>
                </div>
                <p className="text-gray-600 mb-3">{edu.institution}</p>
                <div className="flex flex-wrap gap-2">
                  {edu.courses.map((course, idx) => (
                    <span key={idx} className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}