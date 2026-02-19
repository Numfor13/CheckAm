import React, { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { useNavigate, Link } from "react-router-dom";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  // const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   setPhoneNumber(e.target.value);
  // };

  // const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   setPassword(e.target.value);
  // };

   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
   e.preventDefault();
   navigate("/dashboard")
  //   console.log("Phone:", phoneNumber);
  //   console.log("Password:", password);
  };


  return (
    <div className="container">
      <h1>LOGIN</h1>

      <form onSubmit={handleSubmit}>
        <p><button type="button">Continue with Google</button></p>
        <p><button type="button">Continue with Facebook</button></p>
        <p><button type="button">Sign in with Apple</button></p>

        <p>Continue with phone number</p>

        <p>
          <input
            type="text"
            placeholder="Phone number*"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </p>

        <p>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </p>

        <p><button type="submit">Sign in</button></p>

        <div>
          <h2>Do you own a business?</h2>
          <p>Create a business account with Check-Am</p>

          <p><button type="button">Log in</button></p>
          <p><button type="button">Sign up</button></p>
        </div>
      </form>
    </div>
  );
};

export default Login;