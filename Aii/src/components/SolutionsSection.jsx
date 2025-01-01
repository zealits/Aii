import React from 'react';

const SolutionsSection = () => {
  const solutions = [
    {
      name: "Healthcare",
      icon: "https://cdn-icons-png.flaticon.com/512/901/901186.png",
      items: [
        "AI-powered diagnostic tools",
        "Patient data management",
        "Telemedicine solutions",
      ],
    },
    {
      name: "Finance",
      icon: "https://cdn-icons-png.flaticon.com/512/2088/2088606.png",
      items: [
        "Risk assessment systems",
        "Fraud detection",
        "Automated trading platforms",
      ],
    },
    {
      name: "Retail",
      icon: "https://cdn-icons-png.flaticon.com/512/3591/3591075.png",
      items: [
        "Personalized shopping experiences",
        "Inventory management systems",
        "AI-driven demand forecasting",
      ],
    },
    {
      name: "Manufacturing",
      icon: "https://cdn-icons-png.flaticon.com/512/2731/2731238.png",
      items: [
        "Smart factory automation",
        "Predictive maintenance",
        "Supply chain optimization",
      ],
    },
    {
      name: "Education",
      icon: "https://cdn-icons-png.flaticon.com/512/3077/3077674.png",
      items: [
        "AI-powered learning platforms",
        "Virtual classrooms",
        "Personalized curriculum design",
      ],
    },
    {
      name: "Transportation",
      icon: "https://cdn-icons-png.flaticon.com/512/853/853074.png",
      items: [
        "Fleet management solutions",
        "Route optimization",
        "Autonomous vehicle systems",
      ],
    },
  ];

  return (
    <section id="solutions" className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
      <h2 className="text-4xl md:text-6xl text-center font-extrabold text-black mb-6 tracking-tight drop-shadow-sm">
      Industry-Specific Solutions
</h2>

        {/* <h2 className="text-4xl font-bold text-center text-blue-800 mb-8">Industry-Specific Solutions</h2> */}
        <p className="text-center  text-lg text-gray-600 leading-relaxed mb-12 max-w-3xl mx-auto">
          Whether you're in healthcare, finance, retail, or manufacturing, Aii Ventures delivers technology-driven solutions that cater to your unique business needs.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <img src={solution.icon} alt={`${solution.name} Icon`} className="h-10 w-10 mr-3" />
                <h3 className="text-xl font-semibold text-gray-700">{solution.name}</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                {solution.items.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
