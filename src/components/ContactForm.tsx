"use client";
import React from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [contactNo, setContactNo] = React.useState("");
  const [services, setServices] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [message, setMessage] = React.useState("");

  const handleSubmit = <T extends React.SyntheticEvent>(e: T) => {
    e.preventDefault();

    const serviceID = "service_ya5xagd";
    const templateID = "template_r70sf0r";

    const params = {
      name,
      email,
      contactNo,
      services,
      subject,
      message,
    };

    emailjs
      .send(serviceID, templateID, params)
      .then(() => {
        console.log("sent");
      })
      .catch((err) => {
        console.log("notsent");
      });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="bg-white rounded-md border border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="bg-white rounded-md border border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
      />
      <input
        type="number"
        placeholder="Contact Number"
        value={contactNo}
        onChange={(e) => setContactNo(e.target.value)}
        className="bg-white rounded-md border border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
      />
      <select
        value={services}
        onChange={(e) => setServices(e.target.value)}
        className="bg-white rounded-md border border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
      >
        <option value="">Select Services</option>
        <option value="dryvan">Dryvan</option>
        <option value="flatbed">Flatbed</option>
        <option value="reefer">Reefer</option>
      </select>
      <input
        type="text"
        placeholder="Subject (Optional)"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        className="bg-white rounded-md border border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
      />
      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="bg-white rounded-md border border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
      />
      <button
        type="submit"
        className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded-md"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
