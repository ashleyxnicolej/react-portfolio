import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">My Portfolio</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/" className="hover:text-gray-400">About</Link></li>
            <li><Link to="/portfolio" className="hover:text-gray-400">Portfolio</Link></li>
            <li><Link to="/contact" className="hover:text-gray-400">Contact</Link></li>
            <li><Link to="/resume" className="hover:text-gray-400">Resume</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;