import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-amber-600 py-4">
      <nav className="flex items-center justify-between px-4">
        {/* Logo */}
        <div className="text-white font-bold text-xl">MyApp</div>

        {/* Hamburger button (visible below 710px) */}
        <button
          className="text-white text-3xl max-[710px]:block hidden"
          onClick={() => setIsOpen(true)}
        >
          ☰
        </button>

        {/* Desktop Menu (visible above 710px) */}
        <ul className="hidden min-[711px]:flex gap-6">
          <li>
            <Link
              to="/"
              className="border rounded px-5 py-2 shadow-2xl hover:bg-blue-700 hover:text-white font-bold"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/skills"
              className="border rounded px-5 py-2 shadow-2xl hover:bg-blue-700 hover:text-white font-bold"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="/userdetail"
              className="border rounded px-5 py-2 shadow-2xl hover:bg-blue-700 hover:text-white font-bold"
            >
              Userdetail
            </Link>
          </li>
          <li>
            <Link
              to="/inputfield"
              className="border rounded px-5 py-2 shadow-2xl hover:bg-blue-700 hover:text-white font-bold"
            >
              InputField
            </Link>
          </li>
          <li>
            <Link
              to="/BtnInncrementDecrement"
              className="border rounded px-5 py-2 shadow-2xl hover:bg-blue-700 hover:text-white font-bold"
            >
              Counter
            </Link>
          </li>
        </ul>
      </nav>

      {/* Sidebar Menu (mobile) */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-amber-700 shadow-2xl transform transition-transform duration-300 z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          className="text-white text-3xl p-4"
          onClick={() => setIsOpen(false)}
        >
          ✕
        </button>

        <ul className="flex flex-col gap-4 p-6">
          <li>
            <Link
              to="/"
              className="border rounded px-5 py-2 hover:bg-blue-700 hover:text-white font-bold block"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/skills"
              className="border rounded px-5 py-2 hover:bg-blue-700 hover:text-white font-bold block"
              onClick={() => setIsOpen(false)}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="/userdetail"
              className="border rounded px-5 py-2 hover:bg-blue-700 hover:text-white font-bold block"
              onClick={() => setIsOpen(false)}
            >
              Userdetail
            </Link>
          </li>
          <li>
            <Link
              to="/inputfield"
              className="border rounded px-5 py-2 hover:bg-blue-700 hover:text-white font-bold block"
              onClick={() => setIsOpen(false)}
            >
              InputField
            </Link>
          </li>
          <li>
            <Link
              to="/BtnInncrementDecrement"
              className="border rounded px-5 py-2 hover:bg-blue-700 hover:text-white font-bold block"
              onClick={() => setIsOpen(false)}
            >
              Counter
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
