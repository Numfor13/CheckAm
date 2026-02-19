import { useState } from "react";
import { useNavigate, Link 
} from "react-router-dom";
import type { FormEvent, ChangeEvent } from "react";

const Signup: React.FC = () => {
  const navigate = useNavigate();

  const [PhoneNumber, setPhoneNumber]  = useState<string>();
  const [ password, setPassword] = useState<string>('')
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value} = e.target;

    if (name === "phone number") setPhoneNumber(value);
    if (name === 'password') setPassword(value);
  };

  const handleSignup = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(PhoneNumber, password);

    alert('Account created');
    navigate("/");
  };

  return (
    <div>
    <h2>Sign up</h2>

    <form onSubmit={handleSignup}>
    <input 
    type="phone number" 
    name='phone number'
    placeholder = 'phone number'
    value = {PhoneNumber}
    onChange={handleChange}
    />

    <input 
    type="password" 
    name='password'
    placeholder = 'password'
    value = {password}
    onChange={handleChange}
    />

    <button type="submit">Create Account</button>
    </form>

    <p>Already have an account? <Link to="/">Login</Link></p>
    </div>

  );
};
export default Signup
