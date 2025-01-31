

import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false); // Loading state for button

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading

    try {
      const response = await axios.post('http://localhost:5000/send-message', formData);
      if (response.data.success) {
        toast.success('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' }); // Clear the form
      } else {
        toast.error('Failed to send message.');
      }
    } catch (error) {
      console.error(error);
      toast.error('An error occurred. Please try again.');
    } finally {
      setLoading(false); // End loading
    }
  };

  return (
    <section
      id="contact"
      className={`py-20 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Contact Me
        </h2>
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
          <div className="mb-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}
              required
            />
          </div>
          <div className="mb-4">
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className={`w-full p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}
              rows="5"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={loading} 
            className={`w-full px-6 py-3 rounded-lg text-white ${loading ? 'bg-blue-300 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}`}
          >
            {loading ? 'Sending...' : 'Send Message'} 
          </button>
        </form>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Contact;
