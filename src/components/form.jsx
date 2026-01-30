/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaEnvelope, FaCheck, FaTimes } from "react-icons/fa";

const Modal = ({ message, error, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-50">
      <div className="glass-strong rounded-2xl p-8 max-w-sm mx-4 text-center animate-slide-up">
        <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 ${
          error ? "bg-red-500/20" : "bg-green-500/20"
        }`}>
          {error ? (
            <FaTimes className="text-red-400 text-xl" />
          ) : (
            <FaCheck className="text-green-400 text-xl" />
          )}
        </div>
        {message && <p className="text-white text-base mb-6">{message}</p>}
        {error && <p className="text-red-400 text-base mb-6">{error}</p>}
        <button
          onClick={onClose}
          className="btn-primary text-sm"
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

  const initialFormData = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setMessage(null);
    setError(null);

    try {
      const response = await fetch("https://email-6mjn.vercel.app/api/v1/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setMessage("Message sent successfully! I'll get back to you soon.");
        setFormData(initialFormData);
      } else {
        setError(result.error || "Failed to send message.");
      }
    } catch {
      setError("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeModal = () => {
    setMessage(null);
    setError(null);
  };

  const inputClasses =
    "w-full px-4 py-3 rounded-lg bg-dark-700 border border-white/5 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-accent-purple/50 focus:ring-1 focus:ring-accent-purple/20 transition-all duration-200";

  return (
    <>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className={inputClasses}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className={inputClasses}
            required
          />
        </div>
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          className={inputClasses}
          required
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          className={`${inputClasses} h-32 resize-none`}
          required
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Sending...
            </>
          ) : (
            <>
              Send Message
              <FaEnvelope className="text-sm" />
            </>
          )}
        </button>
      </form>

      {(message || error) && (
        <Modal message={message} error={error} onClose={closeModal} />
      )}
    </>
  );
};
