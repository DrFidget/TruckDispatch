"use client";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import { cn } from "@/lib/utils";

const ContactForm = ({ className }: { className?: string }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [services, setServices] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [showSuccess, setShowSuccess] = useState(false); // State for success popup

  const handleSubmit = <T extends React.SyntheticEvent>(e: T) => {
    e.preventDefault();

    const serviceID = "service_ya5xagd";
    const templateID = "template_r70sf0r";
    const userID = "QK9BqEv_8ZfN_1Dz5";

    const params = {
      name,
      email,
      contactNo,
      services,
      subject,
      message,
    };

    emailjs
      .send(serviceID, templateID, params, userID)
      .then(() => {
        console.log("Email sent");
        setShowSuccess(true); // Show success popup
      })
      .catch((err) => {
        console.log("Email not sent", err);
      });
  };

  return (
    <div className={cn("", className)}>
      {showSuccess && (
        <div className="bg-green-200 border-green-600 text-green-900 border-l-4 p-4 mt-4">
          Email sent successfully!
        </div>
      )}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-white rounded-md border border-gray-300 shadow-sm focus:border-primary focus:ring-primary py-3 px-5"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-white rounded-md border border-gray-300 shadow-sm focus:border-primary focus:ring-primary py-3 px-5"
        />
        <input
          type="number"
          placeholder="Contact Number"
          value={contactNo}
          onChange={(e) => setContactNo(e.target.value)}
          className="bg-white rounded-md border border-gray-300 shadow-sm focus:border-primary focus:ring-primary py-3 px-5"
        />
        <select
          value={services}
          onChange={(e) => setServices(e.target.value)}
          className="bg-white rounded-md border border-gray-300 shadow-sm focus:border-primary focus:ring-primary py-3 px-5"
        >
          <option value="">Select Services</option>
          <option value="Dry Van">Dry Van</option>
          <option value="Flat Bed">Flat Bed</option>
          <option value="Reefer">Reefer</option>
        </select>
        <input
          type="text"
          placeholder="Subject (Optional)"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="bg-white rounded-md border border-gray-300 shadow-sm focus:border-primary focus:ring-primary py-3 px-5"
        />
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="bg-white rounded-md border border-gray-300 shadow-sm focus:border-primary focus:ring-primary py-3 px-5"
        />
        <button
          type="submit"
          className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
