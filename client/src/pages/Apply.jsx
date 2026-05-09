import { useState } from "react";
import { useParams } from "react-router-dom";

const Apply = () => {
  const { id } = useParams();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Application Submitted Successfully!");

    setFormData({
      name: "",
      email: "",
      phone: "",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white px-6">
      
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-xl"
      >
        <h1 className="text-4xl font-bold text-center mb-8">
          Apply for School #{id}
        </h1>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border p-4 rounded-xl mb-5"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border p-4 rounded-xl mb-5"
          required
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="w-full border p-4 rounded-xl mb-5"
          required
        />

        <button className="w-full bg-gradient-to-r from-blue-600 to-purple-700 text-white py-4 rounded-xl text-lg font-semibold hover:scale-105 transition">
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default Apply;