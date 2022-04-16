import { useState } from 'react';
import { Link } from 'react-router-dom';
import { EyeIcon, EyeOffIcon, MailIcon, PassIcon } from '../assets/icons';
import googleLogo from '../assets/icons/google.png';

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const changeHandler = (e: any) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <main className="flex justify-center h-[calc(100vh-60px)] md:h-[calc(100vh-82px)] text-sm md:text-base">
      <section className="mt-12 md:mt-20 w-[21rem]">
        <h1 className="text-5xl font-bold mb-12">Login</h1>
        <button type="button" className="btn w-full font-bold">
          <img src={googleLogo} alt="google logo" className="w-6 h-6 mr-3" />
          <span>Sign in with Google</span>
        </button>

        <div className="relative flex py-8 items-center">
          <div className="flex-grow border-t border-gray-300" />
          <span className="flex-shrink mx-4 text-gray-400">
            or Sign in with Email
          </span>
          <div className="flex-grow border-t border-gray-300" />
        </div>

        <form action="">
          <div className="flex items-center border border-gray-300 text-gray-500 px-4 py-3 rounded-full mb-4">
            <MailIcon />
            <input
              className="ml-2 border-none outline-none font-medium w-full bg-white"
              type="text"
              name="email"
              placeholder="Email"
              value={email}
              onChange={changeHandler}
            />
          </div>
          <div className="flex items-center border border-gray-300 text-gray-500 px-4 py-3 rounded-full mb-4">
            <PassIcon />
            <input
              className="mx-2 border-none outline-none font-medium w-full bg-white"
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Password"
              value={password}
              onChange={changeHandler}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeIcon className="w-4 h-4" />
              ) : (
                <EyeOffIcon className="w-4 h-4" />
              )}
            </button>
          </div>
          <Link
            to="/reset-password"
            className="float-right font-bold text-indigo-600 mb-8"
          >
            Forget Password?
          </Link>
          <button
            type="button"
            className="btn text-white bg-indigo-600 w-full font-bold mb-8"
          >
            Login
          </button>
          <Link to="/sign-up" className="float-left font-medium text-gray-500">
            Not registered yet?
            <span className="font-bold text-indigo-600">
              {'  '}
              Create an Account
            </span>
          </Link>
        </form>
      </section>
    </main>
  );
};

export default SignIn;
