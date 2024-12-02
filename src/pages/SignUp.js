import React, { useContext, useState } from "react";
import phoneimage from "../assets/signup.jpg";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router";
import { FirebaseContext } from "../context/FirebaseProvider";

const SignUp = () => {
  const { signup, signInWithGoogle } = useContext(FirebaseContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(email, password);
      alert(
        "Account created! Please check your email for a confirmation link."
      );

      navigate("/login");
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  const handleGoogleSignUp = async () => {
    try {
      await signInWithGoogle();
      navigate("/home");
    } catch (error) {
      console.error("Error with Google sign-up:", error);
    }
  };

  return (
    <div className="mt-6 mx-4 lg:mx-24 flex flex-col items-center md:flex-row justify-center md:mt-14">
      <div className="w-full flex items-center justify-center mb-6">
        <img src={phoneimage} alt="Phone with Cart" className="w-full" />
      </div>

      <div className="w-full flex flex-col justify-center px-4 md:ml-10">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Create an account
        </h2>
        <p className="text-gray-600 mb-6 text-center">
          Enter your details below
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email or Phone Number"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
          <button
            type="submit"
            className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition"
          >
            Create Account
          </button>
        </form>

        <div className="text-center my-4">or</div>

        <button
          onClick={handleGoogleSignUp}
          className="w-full flex items-center justify-center border border-gray-300 py-2 rounded-md hover:bg-gray-100 transition"
        >
          <FcGoogle size={25} className="mr-2" />
          Sign up with Google
        </button>

        <p className="mt-4 mb-4 text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
