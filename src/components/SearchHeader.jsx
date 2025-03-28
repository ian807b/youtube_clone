import React, { useEffect, useState } from 'react';
import { FaYoutube } from 'react-icons/fa';
import { CiSearch } from 'react-icons/ci';
import { Link, useNavigate, useParams } from 'react-router';

function SearchHeader() {
  const [text, setText] = useState('');
  const navigate = useNavigate();
  const { keyword } = useParams();

  useEffect(() => {
    setText(keyword || '');
  }, [keyword]);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${text}`);
  };

  return (
    <header className="w-full flex p-4 text-2xl border-b border-zinc-600 mb-4">
      <Link className="flex items-center" to="/">
        <FaYoutube className="text-4xl text-[#ff0000]" />
        <h1 className="ml-2 font-bold">YouTube</h1>
      </Link>
      <form className="w-full flex justify-center" onSubmit={handleSubmit}>
        <input
          className="w-7/12 px-2 outline-none bg-black text-gray-50 rounded-l-full"
          type="text"
          placeholder="Search"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="bg-zinc-600 px-4 rounded-r-full">
          <CiSearch />
        </button>
      </form>
    </header>
  );
}

export default SearchHeader;
