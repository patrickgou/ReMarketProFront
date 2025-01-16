import { useEffect, useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const fetchLogin = async () => {
    // fetch login, body com email e password
    const response = await fetch('http://localhost:5150/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <div className="flex justify-center items-center">
      <div
        className="flex flex-col justify-center 
      items-center rounded-3xl py-4 px-4 w-1/3 bg-sky-600 mt-16 min-h-screen"
      >
        <h1 className="text-center text-3xl mt-8 mb-10">Login</h1>
        <form>
          <input
            className="w-full rounded-lg 
            px-4 py-4 mb-2 border-2 border-indigo-600"
            type="email"
            placeholder="UserName"
            aria-label="UserName"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="w-full 
            rounded-lg px-4 py-4 mb-20 
            border-2 border-indigo-600"
            type="password"
            placeholder="Password"
            aria-label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </form>
        <button
          className="w-full px-4 
          py-4 font-bold text-white
           bg-gray-900 rounded-xl
            hover:bg-gray-700 focus:outline-none 
            focus:ring-2 focus:ring-gray-500"
          type="button"
          onClick={fetchLogin}
        >
          Entrar
        </button>
      </div>
    </div>
  );
}
