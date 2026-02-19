import { useState } from "react";

const ReviewerSignup: React.FC = () => {
  const [form, setForm] = useState({
    phoneNumber: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if ( !form.phoneNumber || !form.password) {
      alert("All fields required");
      return;
    }
    
     const phoneRegex = /^[0-9]{9}$/;
    if(!phoneRegex.test(form.phoneNumber)){
      alert("Invalid number. Please enter a 9-digit number");
      return;
    }

    console.log("Reviewer signup", form);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-sm bg-white shadow rounded p-6">
        <h2 className="text-xl font-bold text-green-600 mb-4">
          Reviewer Sign Up
        </h2>

        <form onSubmit={handleSubmit}>
          
          <input
            name="email"
            placeholder="Email"
            className="w-full p-3 border rounded mb-3"
            onChange={(e) =>
              setForm({ ...form, phoneNumber: e.target.value })
            }
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            className="w-full p-3 border rounded mb-3"
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
          />

          <button
            type="submit"
            className="w-full bg-green-600 text-white p-3 rounded"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};


export default ReviewerSignup;