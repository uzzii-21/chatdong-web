import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile
} from 'firebase/auth';
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';
import {
  EyeIcon,
  EyeOffIcon,
  MailIcon,
  PassIcon,
  UserIcon
} from '../assets/icons';
import googleLogo from '../assets/icons/google.png';
import { db } from '../firebase/config';

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const { name, email, password } = formData;

  const changeHandler = (e: any) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const submitHandler = async (e: any) => {
    e.preventDefault();

    try {
      const auth = getAuth();
      const userCredential = createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const { user } = await userCredential;

      updateProfile(auth.currentUser!, {
        displayName: name
      });

      const data = { ...formData, timestamp: serverTimestamp() };

      await setDoc(doc(db, 'users', user.uid), data);
    } catch (error: any) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    }
  };

  return (
    <main className="flex justify-center h-[calc(100vh-60px)] md:h-[calc(100vh-82px)] text-sm md:text-base">
      <section className="mt-12 md:mt-20 w-[21rem]">
        <h1 className="text-5xl font-bold mb-12">Create Account</h1>
        <button type="button" className="btn w-full font-bold">
          <img src={googleLogo} alt="google logo" className="w-6 h-6 mr-3" />
          <span>Sign up with Google</span>
        </button>

        <div className="relative flex py-8 items-center">
          <div className="flex-grow border-t border-gray-300" />
          <span className="flex-shrink mx-4 text-gray-400">
            or Sign in with Email
          </span>
          <div className="flex-grow border-t border-gray-300" />
        </div>

        <form onSubmit={submitHandler}>
          <div className="flex items-center border border-gray-300 text-gray-500 px-4 py-3 rounded-full mb-4">
            <UserIcon />
            <input
              className="ml-2 border-none outline-none font-medium w-full bg-white"
              type="text"
              name="name"
              placeholder="Name"
              value={name}
              onChange={changeHandler}
            />
          </div>
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
          <button
            type="submit"
            className="btn text-white bg-indigo-600 w-full font-bold mb-8"
          >
            Create Account
          </button>
          <Link to="/sign-in" className="float-left font-medium text-gray-500">
            Already have an Account?
            <span className="font-bold text-indigo-600">
              {'  '}
              Sign in
            </span>
          </Link>
        </form>
      </section>
    </main>
  );
};

export default SignUp;
