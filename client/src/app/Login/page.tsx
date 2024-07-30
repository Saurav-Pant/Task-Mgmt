"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from 'next/navigation';
import Cookies from "js-cookie";

const Page = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('https://task-mgmt-e8us.onrender.com/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();


      Cookies.set('token', data.token);
      Cookies.set('userId', JSON.stringify(data.user.id));
      Cookies.set('name', data.user.name);



      
      router.push('/Dashboard');
    } catch (err) {
      setError('Invalid email or password. Please try again.');
      console.error('Login error:', err);
    }
  };

  return (
    <div className="bg-gradient-to-b from-white to-[#AFA3FF] h-screen">
      <div className="flex justify-center items-center h-full">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <h1 className="text-2xl font-bold mb-6 text-center">
            Welcome to <span className="text-[#4534AC]">Workflo!</span>
          </h1>
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          <form onSubmit={handleSubmit}>
            <div className="mb-[10px]">
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
            <div className="mb-[10px]">
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
              className="w-full p-2 rounded-lg text-white relative border-1 bg-gradient-to-r from-[#4B36CC] to-[#9C93D4] hover:opacity-90 transition duration-300"
            >
              Login
            </button>
          </form>
          <p className="mt-4 text-center text-gray-500">
            Don't have an account? Create a 
            <Link href="/Signup">
              <span className="bg-clip-text text-transparent bg-[#0054A1] cursor-pointer pl-2 hover:underline">
                new account
              </span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;