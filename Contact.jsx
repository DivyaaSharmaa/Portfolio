import React, { useState } from "react";

const Contacts = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks, ${form.name}! I’ll get back to you soon.`);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div id="contact" className="section">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" value={form.name} onChange={handleChange} placeholder="Your Name" required />
        <input name="email" value={form.email} onChange={handleChange} placeholder="Your Email" required />
        <textarea name="message" value={form.message} onChange={handleChange} placeholder="Your Message" required />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contacts;
