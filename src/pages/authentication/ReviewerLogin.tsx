import { useState } from "react"



const ReviewerLogin: React.FC = () => {
  const [phoneNumber,setPhoneNumber] = useState("");
  const [password, setPassword] = useState ("");
  const [error, setError] = useState ("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const phoneRegex = /^[0-9]{9}$/;
    if(!phoneRegex.test(phoneNumber)){
      setError("Invalid number. Please enter a 9-digit number");
      return;
    }

    if (!password){
      setError("please enter password")
      return;
    }

    console.log("Reviewer logged in", phoneNumber, password);
    
  };


  return(
    <div
    className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-sm bg-white shadow rounded p-6">
        <h2 className="text-xl font-bold text-green-600 m-4">
          Reviewer login
        </h2>

        <form onSubmit={handleSubmit}>
          <input 
          type="phone Number"
          placeholder="Phone Number"
          className="w-full p-3 border rounded mb-3"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)} 
          />

          <input 
          type="password"
          placeholder="Password"
          className="w-full p-3 border rounded mb-3"
          value={password
          }
          onChange={(e) => setPassword(e.target.value)} 
          />
          <button
          type="submit"
          className="w-full bg-green-600 text-white p-3 rounded">
            Login
          </button>
        </form>
      </div>
    </div>
  );

};

export default ReviewerLogin;