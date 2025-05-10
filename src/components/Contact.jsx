import { useState } from "react";

function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    license: "",
    message: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!"); // Placeholder for frontend validation demo
  };

  return (
    <section className="p-10 bg-[#778da9] text-[#0d1b2a] dark:bg-[#0d1b2a] dark:text-gray-200">
      <h2 className="text-2xl font-bold mb-6 text-center">Get in Touch</h2>
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4">
        <input
          className="w-full p-2 border rounded placeholder-black dark:placeholder-gray-200"
          type="text"
          name="name"
          placeholder="Name "
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          className="w-full p-2 border rounded placeholder-black dark:placeholder-gray-200"
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          className="w-full p-2 border rounded placeholder-black dark:placeholder-gray-200"
          type="text"
          name="company"
          placeholder="Company"
          value={form.company}
          onChange={handleChange}
          required
        />
        <select
          className="w-full p-2 border rounded  placeholder-black dark:placeholder-gray-200 bg-[#778da9]  dark:bg-[#0d1b2a]"
          name="license"
          value={form.license}
          onChange={handleChange}
          required
        >
          <option value="">Select License Type</option>
          <option value="Office">Microsoft Office</option>
          <option value="Adobe">Adobe Suite</option>
          <option value="Antivirus">Antivirus</option>
        </select>
        <textarea
          className="w-full p-2 border rounded placeholder-black dark:placeholder:text-gray-200"
          name="message"
          placeholder="Message"
          value={form.message}
          onChange={handleChange}
          required
        />
        <button
          className="dark:bg-[#778da9]  bg-[#0d1b2a] text-gray-100 px-4 py-2 rounded"
          type="submit"
        >
          Submit
        </button>
      </form>
    </section>
  );
}

export default ContactForm;
