import { useEffect, useState } from 'react';

export default function Login() {
  const [userName, setUserName] = useState('');
  useEffect(() => {
    fetch('http://localhost:5150')
      .then((userName) => userName.json())
      .then((userName) => {
        setUserName(userName);
      });
  });
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
            type="text"
            placeholder="UserName"
            minLength={8}
            maxLength={12}
            aria-label="UserName"
          />
          <input
            className="w-full 
            rounded-lg px-4 py-4 mb-20 
            border-2 border-indigo-600"
            type="password"
            placeholder="Password"
            minLength={8}
            maxLength={16}
            aria-label="Password"
          />
        </form>
        <button
          className="w-full px-4 
          py-4 font-bold text-white
           bg-gray-900 rounded-xl
            hover:bg-gray-700 focus:outline-none 
            focus:ring-2 focus:ring-gray-500"
          type="submit"
        >
          Entrar
        </button>
      </div>
    </div>
  );
}
