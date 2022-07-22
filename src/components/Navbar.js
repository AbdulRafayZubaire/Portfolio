import { React, useState } from "react";
import {
  FaBars,
  FaTimes,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  };

  const toggleActive = (e)=>{
    document.querySelector(".activeNav").classList.remove("activeNav");
    const nav = e.target
    nav.classList.add("activeNav")

  }

  return (
    <div className="fixed w-full h-[80px] px-4 bg-dark flex justify-center items-center border-b-[1px] border-lightGrey">
      <div className="container flex justify-between items-center text-white">
        {/* name */}
        <div>
          <span className="font-bold text-2xl text-brightYellow cursor-pointer">
            <Link to="home" smooth={true} duration={500}>
              {" "}
              Abdul Rafay | Portfolio
            </Link>
          </span>
        </div>

        <div />
        {/* menu */}
        <ul className="hidden md:flex justify-center items-center px-10">
          <li className="text">
            <Link onClick={toggleActive} className="activeNav hover:text-brightYellow" to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className="">
            <Link onClick={toggleActive} className="hover:text-brightYellow" to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className="">
            <Link onClick={toggleActive} className="hover:text-brightYellow" to="skills" smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li className="">
            <Link onClick={toggleActive} className="hover:text-brightYellow" to="work" smooth={true} duration={500}>
              Work
            </Link>
          </li>
          <li className="" >
            <Link onClick={toggleActive} className="hover:text-brightYellow" to="certificates" smooth={true} duration={500}>
              Certificates
            </Link>
          </li>
          <li className="">
            <Link onClick={toggleActive} className="hover:text-brightYellow" to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>

        {/* Hamburger */}
        <div onClick={handleClick} className="md:hidden z-10 cursor-pointer">
          {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* Mobile Menu */}
        <ul
          className={
            !nav
              ? "hidden"
              : "absolute w-full h-screen bg-dark top-0 left-0 flex flex-col justify-center items-center md:hidden"
          }
        >
          <li className="w-full text-center py-6 text-3xl border-b-[1px] border-lightGrey">
            About
          </li>
          <li className="w-full text-center py-6 text-3xl border-b-[1px] border-lightGrey">
            Work
          </li>
          <li className="w-full text-center py-6 text-3xl border-b-[1px] border-lightGrey">
            Skills
          </li>
          <li className="w-full text-center py-6 text-3xl border-b-[1px] border-lightGrey">
            Home
          </li>
          <li className="w-full text-center py-6 text-3xl border-b-[1px] border-lightGrey">
            Contact
          </li>
        </ul>
      </div>
      {/* Social Icons */}
      <div className="hidden lg:flex fixed flex-column left-0 top-[35%] justify-center items-center rounded-[10px]">
        <ul>
          <li className="w-[160px] h-[50px] flex justify-center items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#0072b1] rounded-tr-[10px]">
            <a
              className="flex justify-between items-center w-full text-white"
              href="https://www.linkedin.com/in/abdul-rafay-khawar-zubaire-31a8001b5/"
            >
              <p>LinkedIn</p> <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[50px] flex justify-center items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#171515]">
            <a
              className="flex justify-between items-center w-full text-white"
              href="https://github.com/AbdulRafayZubaire"
            >
              GitHub <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[50px] flex justify-center items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#E1306C]">
            <a
              className="flex justify-between items-center w-full text-white"
              href="https://www.instagram.com/m_abdurrafay/"
            >
              Instagram <FaInstagram size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[50px] flex justify-center items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#00acee]">
            <a
              className="flex justify-between items-center w-full text-white"
              href="https://twitter.com/m_AbdurRafay"
            >
              Twitter <FaTwitter size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[50px] flex justify-center items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#DB4437] rounded-br-[10px]">
            <a
              className="flex justify-between items-center w-full text-white"
              href="/"
            >
              Email Me <AiOutlineMail size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
