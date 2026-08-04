"use client";

import { FaBell, FaSearch, FaUserCircle } from "react-icons/fa";

export default function Header() {
  return (
    <header className="bg-white rounded-2xl shadow-md px-8 py-5 flex items-center justify-between">

      <div>
        <h1 className="text-3xl font-bold text-slate-800">
          AI Decision Dashboard
        </h1>

        <p className="text-slate-500 mt-1">
          Welcome back! Upload a dataset to begin analysis.
        </p>
      </div>

      <div className="flex items-center gap-5">

        <div className="flex items-center bg-slate-100 rounded-xl px-4 py-3">

          <FaSearch className="text-gray-500" />

          <input
            type="text"
            placeholder="Search..."
            className="ml-3 bg-transparent outline-none"
          />

        </div>

        <button className="bg-slate-100 p-3 rounded-xl hover:bg-slate-200 transition">

          <FaBell />

        </button>

        <div className="flex items-center gap-3">

          <FaUserCircle
            className="text-blue-600"
            size={48}
          />

          <div>

            <h3 className="font-semibold">
              Administrator
            </h3>

            <p className="text-sm text-gray-500">
              AI Dashboard
            </p>

          </div>

        </div>

      </div>

    </header>
  );
}