import React, { useState } from 'react'

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    if (handleLogin) {
      handleLogin(email, password)
    }
    setEmail('')
    setPassword('')
  }

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-[#1c1c1c] px-4">
      <div className="border-2 rounded-2xl border-emerald-600 p-10 sm:p-14 bg-[#111] shadow-2xl max-w-md w-full">
        <h2 className="text-3xl font-bold mb-8 text-center text-white tracking-wide">
          Log In
        </h2>
        <form onSubmit={submitHandler} className="flex flex-col items-center justify-center w-full">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-3 px-6 rounded-full placeholder:text-gray-400 text-white transition focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400"
            type="email"
            placeholder="Enter your email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-3 px-6 rounded-full mt-4 placeholder:text-gray-400 text-white transition focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400"
            type="password"
            placeholder="Enter password"
          />
          <button
            type="submit"
            className="mt-8 text-white border-none outline-none font-semibold bg-emerald-600 hover:bg-emerald-700 active:scale-[0.98] text-lg py-3 px-8 w-full rounded-full transition-all duration-200 cursor-pointer shadow-lg shadow-emerald-950"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
