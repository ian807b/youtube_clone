import React, { useEffect, useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function SearchHeader() {
  const { keyword } = useParams();
  const [text, setText] = useState('');
  const navigate = useNavigate();

  useEffect(() => setText(keyword || ''), [keyword]);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${text}`);
    setText('');
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <header className="w-full flex p-4 text-2xl  border-b border-zinc-600 mb-4">
      <Link to="/" className="flex items-center">
        <img src="/logo_darkmode.png" alt="Logo" className="h-8 w-auto" />
      </Link>
      <form onSubmit={handleSubmit} className="w-full flex justify-center">
        <input
          className="w-7/12 px-6 py-1.5 outline-none bg-black text-gray-50 rounded-l-full"
          type="text"
          placeholder="Search"
          value={text}
          onChange={handleChange}
        />
        <button className="bg-zinc-600 px-4 rounded-r-full">
          <CiSearch />
        </button>
      </form>
    </header>
  );
}
