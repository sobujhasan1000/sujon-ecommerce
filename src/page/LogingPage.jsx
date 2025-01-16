import { useState } from "react";

const LogingPage = () => {
  // Dynamic form fields configuration
  const fields = [
    {
      id: "email",
      label: "Email",
      type: "email",
      placeholder: "Enter your email",
    },
    { id: "name", label: "Name", type: "text", placeholder: "Enter your name" },
    {
      id: "phone",
      label: "Phone Number",
      type: "tel",
      placeholder: "Enter your phone number",
    },
    {
      id: "password",
      label: "Password",
      type: "password",
      placeholder: "Enter your password",
    },
  ];

  const [formData, setFormData] = useState({});

  // Handle input change dynamically
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Logs the dynamic form data
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url('https://source.unsplash.com/random/1920x1080/?technology,login')`,
      }}
    >
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {fields.map((field) => (
            <div key={field.id}>
              <label
                className="block text-sm font-medium mb-1"
                htmlFor={field.id}
              >
                {field.label}
              </label>
              <input
                type={field.type}
                id={field.id}
                placeholder={field.placeholder}
                className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-500"
                onChange={handleChange}
                required
              />
            </div>
          ))}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white font-bold rounded hover:bg-blue-600 focus:outline-none"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LogingPage;
