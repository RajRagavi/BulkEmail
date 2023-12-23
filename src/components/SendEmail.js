import React, { useState } from 'react';
import axios from 'axios';

const SendEmail = () => {
  const [formData, setFormData] = useState({
    to: '',
    cc: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make a POST request to your backend endpoint for sending emails
   // Change the endpoint in SendEmail.js to match the server route
const response = await axios.post('http://localhost:5000/api/getbill', formData);
      console.log(response.data);
    } catch (error) {
      console.error('Send Email error:', error.response.data);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Send Email</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="to" className="form-label">To:</label>
          <input
            type="email"
            id="to"
            name="to"
            value={formData.to}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="cc" className="form-label">CC:</label>
          <input
            type="email"
            id="cc"
            name="cc"
            value={formData.cc}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="subject" className="form-label">Subject:</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="form-control"
            required
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary">Send</button>
      </form>
    </div>
  );
};

export default SendEmail;
