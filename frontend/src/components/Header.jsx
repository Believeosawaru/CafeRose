export default function Header() {
  return (
    <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto z-30 relative w-full bg-black">
      <h1 className="text-2xl font-bold text-red-600 tracking-widest font-sans">
        Café Rosé
      </h1>
      <ul className="hidden md:flex space-x-8 text-white font-semibold font-sans">
        <li className="hover:text-red-600 transition-colors duration-300 cursor-pointer">
          Home
        </li>
        <li className="hover:text-red-600 transition-colors duration-300 cursor-pointer">
          Menu
        </li>
        <li className="hover:text-red-600 transition-colors duration-300 cursor-pointer">
          About
        </li>
        <li className="hover:text-red-600 transition-colors duration-300 cursor-pointer">
          Contact
        </li>
      </ul>
      <button className="md:hidden text-white focus:outline-none hidden">
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </nav>
  );
}
