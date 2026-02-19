import React, { useState } from "react";
import type { ChangeEvent,FormEvent } from "react";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () =>{
  const [phoneNumber, setPhoneNumber] = useState<string> ("");
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value)
  };

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const phoneRegex = /^[0-9]{9}$/;

    if (!phoneRegex.test(phoneNumber)) {
      setError("Please enter a valid 9-digit phone number.")
      return;
    }
    //console.log("searching for:" , phoneNumber);

    setError("");
    navigate(`/vendor/${phoneNumber}`)
    
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <h1 className="text-2xl font-old mb-6 text-green-600">
        CheckAm
      </h1>

      <form onSubmit={handleSearch} className="w-full max-w-sm">
        <input 
        type="text"
        placeholder="Enter vendor phone number"
        value={phoneNumber}
        onChange={handleChange}
        className="w-full p-3 border rounded mb-3"
        />

        {error && (
          <p className="text-red-500 text-sm- mb-2">{error}</p>
        )}

        <button
        type="submit"
        className="w-full bg-green-600 text-white p-3 rounded"
        >Search 
        </button>
      </form>
    </div>
  );
};

export default Home;