import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6 px-4">
      <div className="flex items-center">
        <img className="mx-2 w-12" src={logo} alt="Kevin Rush Logo" />
      </div>
      <div className="flex items-center gap-6 text-lg font-medium text-neutral-300">
        <a href="#home" className="hover:text-purple-400 transition">Home</a>
        <a href="#experience" className="hover:text-purple-400 transition">Experience</a>
        <a href="#projects" className="hover:text-purple-400 transition">Projects</a>
        <a href="#about" className="hover:text-purple-400 transition">About</a>
        <a href="#contact" className="hover:text-purple-400 transition">Contact</a>
      </div>
      <div className="hidden md:flex items-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/ayush-jagwan6/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://github.com/ayushjag" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://x.com/ayushjagwan6" target="_blank" rel="noopener noreferrer"><FaSquareXTwitter /></a>
        
      </div>
    </nav>
  );
};

export default Navbar;
