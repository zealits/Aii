import React, { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [popup, setPopup] = useState({ visible: false, message: "", isError: false });

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      const result = await response.json();
      if (response.ok) {
        setPopup({ visible: true, message: result.message, isError: false });
        setFormData({ name: "", email: "", message: "" }); // Reset the form
      } else {
        setPopup({ visible: true, message: "Error: " + result.message, isError: true });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setPopup({ visible: true, message: "Failed to send message. Please try again.", isError: true });
    }
  };
  

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-blue-50 to-blue-100">
      <div className="container mx-auto px-6 lg:px-16">
        <h2 className="text-4xl md:text-6xl text-center font-extrabold text-black mb-6 tracking-tight drop-shadow-sm">
          Get in Touch
        </h2>
        {/* <h2 className="text-5xl font-extrabold text-center text-blue-900 mb-8">Get in Touch</h2> */}
        <p className="text-center text-lg text-gray-700 mb-12">
          Let's collaborate and create something amazing. We're here to help and answer any questions you might have.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
          {/* Contact Information */}
          <div className="bg-white p-10 shadow-2xl rounded-2xl flex flex-col">
            <h3 className="text-3xl font-semibold text-black-900 mb-8">Contact Information</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our team is dedicated to providing you with the best possible support. Feel free to reach out through any
              of the methods below, and we will respond as quickly as possible. Whether you have questions, need
              assistance, or want to collaborate, we're here for you.
            </p>
            {/* <p className="text-gray-600 mb-6 leading-relaxed">
              Office Hours: Monday to Friday, 9 AM - 6 PM (EST)
            </p> */}
            <ul className="space-y-6 flex-grow">
              {/* <li className="flex items-center">
                <div className="p-3 bg-blue-100 rounded-full mr-4">
                  <img src="https://cdn-icons-png.flaticon.com/512/726/726443.png" alt="Phone Icon" className="h-6 w-6" />
                </div>
                <span className="text-lg text-gray-800">+1 (800) 123-4567</span>
              </li> */}
              <li className="flex items-center">
                <div className="p-3 bg-blue-100 rounded-full mr-4">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
                    alt="Email Icon"
                    className="h-6 w-6"
                  />
                </div>
                <span className="text-lg text-gray-800">info@aiiventure.com</span>
              </li>
              <li className="flex items-center">
                <div className="p-3 bg-blue-100 rounded-full mr-4">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/684/684908.png"
                    alt="Location Icon"
                    className="h-6 w-6"
                  />
                </div>
                <span className="text-lg text-gray-800">30 N Gould St Ste R, Sheridan, WY 82801 USA</span>
              </li>
            </ul>
          </div>
          {/* Contact Form */}
          <form className="bg-white p-10 shadow-2xl rounded-2xl flex flex-col" onSubmit={handleSubmit}>
            <h3 className="text-3xl font-semibold text-black-900 mb-8">Send Us a Message</h3>
            {/* Name */}
            <div className="mb-8 flex-grow">
              <label htmlFor="name" className="block text-gray-700 font-medium mb-3">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500"
                placeholder="Enter your full name"
                required
              />
            </div>
            {/* Email */}
            <div className="mb-8 flex-grow">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-3">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500"
                placeholder="Enter your email address"
                required
              />
            </div>
            {/* Message */}
            <div className="mb-8 flex-grow">
              <label htmlFor="message" className="block text-gray-700 font-medium mb-3">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500"
                placeholder="Write your message here..."
                required
              ></textarea>
            </div>
            {/* Submit Button */}
            <div className="text-right">
              <button
                type="submit"
                className="bg-gradient-to-r from-black to-gray-900 text-white px-8 py-4 rounded-xl shadow-lg hover:from-gray-800 hover:to-black hover:scale-105 transition-transform duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>

      {popup.visible && (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div className={`p-6 bg-white rounded-xl shadow-lg ${popup.isError ? "border-red-500" : "border-green-500"} border`}>
      <p className={`text-lg ${popup.isError ? "text-red-600" : "text-green-600"}`}>{popup.message}</p>
      <button
        onClick={() => setPopup({ visible: false, message: "", isError: false })}
        className="mt-4 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800"
      >
        Close
      </button>
    </div>
  </div>
)}

    </section>
  );
};

export default ContactSection;
