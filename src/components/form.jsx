/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaEnvelope } from "react-icons/fa";

// Modal Component
const Modal = ({ message, error, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-blue-400 p-6 rounded-lg shadow-lg text-white text-center">
        {message && <p>{message}</p>}
        {error && <p>{error}</p>}
        <button
          onClick={onClose}
          className="mt-4 bg-[#0D1B2A]   text-white px-4 py-2 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  // Define the initial form data structure
  const initialFormData = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setMessage(null);
    setError(null);

    try {
      const response = await fetch("https://email-6mjn.vercel.app/api/v1/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setMessage("Email sent successfully!");
        setFormData(initialFormData); // Reset form after successful submission
      } else {
        setError(result.error || "Failed to send email.");
      }
    } catch (error) {
      setError("Failed to send email. Please try again.");
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeModal = () => {
    setMessage(null);
    setError(null);
  };

  return (
    <>
      <form className="mt-3" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-4 mb-3 rounded bg-gray-700 text-white"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-4 mb-3 rounded bg-gray-700 text-white"
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full p-4 mb-3 rounded bg-gray-700 text-white"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          className="w-full p-4 mb-3 rounded bg-gray-700 text-white h-32"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-blue-400 hover:bg-blue-500 text-white py-3 rounded flex justify-center items-center"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
          <span className="ml-2">
            <FaEnvelope />
          </span>
        </button>
      </form>

      {/* Render Modal if message or error exists */}
      {(message || error) && (
        <Modal message={message} error={error} onClose={closeModal} />
      )}
    </>
  );
};