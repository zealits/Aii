import React from "react";
import "./AboutSection.css";

const AboutSection = () => {
  return (
    <section id="about" className="relative py-32 overflow-hidden bg-gradient-to-b from-white">
      {/* More visible background elements */}
      {/* <div className="absolute top-0 left-0 w-[800px] h-[800px] rounded-full bg-gray-300/60 -translate-x-1/2 -translate-y-1/2 blur-xl animate-float"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-gray-300/60 translate-x-1/2 translate-y-1/2 blur-xl animate-float-delayed"></div> */}

      {/* Enhanced additional background elements */}
      {/* <div className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-gray-200/50 blur-lg animate-float"></div>
      <div className="absolute bottom-1/4 left-1/3 w-56 h-56 rounded-full bg-gray-200/50 blur-lg animate-float-delayed"></div> */}

      <div className="container relative mx-auto px-6 md:px-8">
        {/* Enhanced title section */}
        <div className="max-w-4xl mx-auto text-center mb-24">
          {/* More prominent top decorative element */}
          {/* <div className="flex justify-center items-center gap-4 mb-8">
            <div className="w-40 h-[5px] bg-gradient-to-r from-blue-600 to-blue-500 rounded-full shadow-sm"></div>
          </div> */}

          <h2 className="text-4xl md:text-6xl font-extrabold text-black mb-6 tracking-tight drop-shadow-sm">
    About Aii Ventures
</h2>

        </div>

        {/* Content sections with bolder side markers */}
        <div className="max-w-4xl mx-auto space-y-20">
          <div className="relative group">
            <div className="absolute left-0 w-[6px] h-full bg-gradient-to-b from-transparent via-gray-600 to-transparent rounded-full group-hover:via-gray-700 transition-all duration-500 shadow-lg"></div>
            <p className="text-xl text-gray-800 leading-relaxed pl-12 transition-all duration-500 group-hover:text-gray-900">
              We specialize in delivering consulting services with a strong focus on emerging technologies like AI and
              Cloud. Our customized, industry-specific solutions help businesses achieve digital and operational
              transformation.
            </p>
          </div>

          <div className="relative group">
            <div className="absolute left-0 w-[6px] h-full bg-gradient-to-b from-transparent via-gray-600 to-transparent rounded-full group-hover:via-gray-700 transition-all duration-500 shadow-lg"></div>
            <p className="text-xl text-gray-800 leading-relaxed pl-12 transition-all duration-500 group-hover:text-gray-900">
              Our team works closely with clients to understand their unique needs, providing innovative solutions that
              drive growth and efficiency. We believe in leveraging technology to streamline processes and create
              long-term value.
            </p>
          </div>

          <div className="relative group">
            <div className="absolute left-0 w-[6px] h-full bg-gradient-to-b from-transparent via-gray-600 to-transparent rounded-full group-hover:via-gray-700 transition-all duration-500 shadow-lg"></div>
            <p className="text-xl text-gray-800 leading-relaxed pl-12 transition-all duration-500 group-hover:text-gray-900">
              Aii Ventures is committed to staying at the forefront of technological advancements, continuously adapting
              our strategies to meet the evolving demands of the digital landscape. Our goal is to empower businesses to
              embrace the future with confidence and success.
            </p>
          </div>
        </div>

        {/* Enhanced bottom decorative elements */}
        {/* <div className="flex justify-center items-center gap-8 mt-24">
          <div className="w-32 h-[3px] bg-gradient-to-r from-transparent via-blue-500 to-transparent shadow-sm"></div>
          <div className="w-4 h-4 rounded-full bg-blue-600 animate-pulse shadow-lg shadow-blue-200"></div>
          <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse delay-300 shadow-md shadow-blue-200"></div>
          <div className="w-4 h-4 rounded-full bg-blue-600 animate-pulse delay-700 shadow-lg shadow-blue-200"></div>
          <div className="w-32 h-[3px] bg-gradient-to-l from-transparent via-blue-500 to-transparent shadow-sm"></div>
        </div> */}
      </div>
    </section>
  );
};

export default AboutSection;
