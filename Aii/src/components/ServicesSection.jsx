import React from 'react';

const services = [
  {
    title: 'AI Consulting',
    description: 'Leverage artificial intelligence to revolutionize your processes and drive smarter business decisions.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 text-white mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    gradient: 'from-blue-500 to-blue-400',
  },
  {
    title: 'Cloud Solutions',
    description: 'Empower your business with scalable and secure cloud infrastructure for seamless operations.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 text-white mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    gradient: 'from-purple-500 to-purple-400',
  },
  {
    title: 'Industry Solutions',
    description: 'Tailored strategies for specific industries to unlock unique opportunities and overcome challenges.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 text-white mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 12l9-3-9-3-9 3 9 3zm0 0v8m0-8L4 9m7 3l7-3" />
      </svg>
    ),
    gradient: 'from-teal-500 to-teal-400',
  },
  {
    title: 'Digital Transformation',
    description: 'Upgrade your business with end-to-end digital solutions to enhance efficiency and drive innovation.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 text-white mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    gradient: 'from-green-500 to-green-400',
  },
  {
    title: 'Education & Training',
    description: 'Empower your team with skill-building workshops and certifications tailored to modern tech landscapes.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 text-white mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6M12 9v6M3 21h18" />
      </svg>
    ),
    gradient: 'from-yellow-500 to-yellow-400',
  },
  {
    title: 'Cybersecurity Services',
    description: 'Protect your digital assets with advanced security solutions tailored to your business needs.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 text-white mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M6.8 19h10.4l-.545-6.409A4 4 0 0012 8H9.955a4 4 0 00-3.609 4.136L6.8 19z" />
      </svg>
    ),
    gradient: 'from-red-500 to-red-400',
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-bl from-indigo-100 via-white to-blue-50 -z-10"></div>

      <div className="container mx-auto px-6 mb-16 text-center">
        <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4">What We Offer</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Explore our range of services designed to empower businesses and accelerate growth with modern technology solutions.
        </p>
      </div>

      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-center">
          {services.map((service, index) => (
            <div key={index} className="relative w-full md:w-1/3 p-4">
              <div className="transform transition duration-500 hover:scale-105">
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-full shadow-lg opacity-50`}></div>
                <div className="relative z-10 p-8 text-center">
                  {service.icon}
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed p-4 md:p-0">{service.description}</p>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
