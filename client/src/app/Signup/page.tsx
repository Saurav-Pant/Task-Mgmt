"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from 'next/navigation';
import Cookies from "js-cookie";

const Page = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('https://task-mgmt-e8us.onrender.com/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (!response.ok) {
        throw new Error('Signup failed');
      }

      const data = await response.json();
      console.log(data)
      
      Cookies.set('token', data.token);
      Cookies.set('userId', JSON.stringify(data.user.id));
      Cookies.set('name', data.user.name);
      
      router.push('/Dashboard');
    } catch (err) {
      setError('Failed to sign up. Please try again.');
      console.error('Signup error:', err);
    }
  };

  return (
    <div className="bg-gradient-to-b from-white to-[#AFA3FF] min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Welcome to <span className="text-[#4534AC]">Workflo!</span>
        </h1>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              id="name"
              placeholder="Full name"
              className="w-full py-3 px-4 border rounded-lg bg-[#EBEBEB]"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              id="email"
              placeholder="Your email"
              className="w-full py-3 px-4 border rounded-lg bg-[#EBEBEB]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="w-full py-3 px-4 border rounded-lg bg-[#EBEBEB]"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full p-3 rounded-lg text-white bg-gradient-to-r from-[#4B36CC] to-[#9C93D4] hover:opacity-90 transition duration-300"
          >
            Sign up
          </button>
        </form>
        <p className="mt-4 text-center text-gray-500">
          Already have an account?
          <Link href="/login">
            <span className="text-[#0054A1] hover:underline cursor-pointer">
              Login
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Page;