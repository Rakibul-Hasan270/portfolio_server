import { useEffect } from 'react';
import './App.css';
import About from './components/About/About';
import Banner from './components/Banner/Banner';
import Navbar from './components/Navbar/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ProjectShowcase from './components/ProjectShowcase/ProjectShowcase';
import Contact from './components/Contact/Contact';
import SkillsNxt from './components/SkillsNxt/SkillsNxt';
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';
import Footer from './components/Footer/Footer';
import { IoHome } from "react-icons/io5";
import { MdOutlinePerson4, MdWorkOutline } from "react-icons/md";
import { SiHyperskill } from "react-icons/si";
import { IoBagHandleOutline } from "react-icons/io5";
import { FaUserGraduate } from "react-icons/fa";
import { LuMessageSquareMore } from "react-icons/lu";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { Link } from 'react-scroll';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className='max-w-7xl mx-auto p-4'>
      
      <div className='flex justify-center'>
        <div className='h-14 w-full mx-auto rounded-full bottom-0 fixed z-50 max-w-xl backdrop-blur-sm border-2 border-pink-800 flex items-center justify-evenly'>
          <Link className='link text-2xl' to='navbar' smooth={true} spy={true} duration={1000} activeClass='active'>
            <IoHome />
          </Link>
          <Link className='link text-2xl' to='about' smooth={true} spy={true} duration={1000} activeClass='active'>
            <MdOutlinePerson4 />
          </Link>
          <Link className='link text-2xl' to='skills' smooth={true} spy={true} duration={1000} activeClass='active'>
            <SiHyperskill />
          </Link>
          <Link className='link text-2xl' to='experience' smooth={true} spy={true} duration={1000} activeClass='active'>
            <MdWorkOutline />
          </Link>
          <Link className='link text-2xl' to='projects' smooth={true} spy={true} duration={1000} activeClass='active'>
            <IoBagHandleOutline />
          </Link>
          <Link className='link text-2xl' to='education' smooth={true} spy={true} duration={1000} activeClass='active'>
            <FaUserGraduate />
          </Link>
          <Link className='link text-2xl' to='contact' smooth={true} spy={true} duration={1000} activeClass='active'>
            <LuMessageSquareMore />
          </Link>
        </div>
      </div>

      {/* Social Links */}
      <div className="hidden md:flex flex-col left-0 fixed z-50 items-center mx-auto top-1/2 transform -translate-y-1/2">
        <div className='flex flex-col'>
          <a href='https://www.linkedin.com/in/rakibul-hasan01/' target="_blank" rel="noopener noreferrer">
            <div className='cursor-pointer flex-1 flex items-center gap-[40px] bg-pink-800 p-2 transform -translate-x-24 duration-500 hover:translate-x-0'>LinkedIn <FaLinkedin className='text-xl' /></div>
          </a>
          <a href='https://github.com/Rakibul-Hasan270' target="_blank" rel="noopener noreferrer">
            <div className='cursor-pointer flex-1 flex items-center gap-[50px] bg-pink-800 p-2 transform -translate-x-24 duration-500 hover:translate-x-0'>Github <FaGithub className='text-xl' /></div>
          </a>
          <a href='mailto:rakibx270@gmail.com' target="_blank" rel="noopener noreferrer">
            <div className='cursor-pointer flex-1 flex items-center gap-[60px] bg-pink-800 p-2 transform -translate-x-24 duration-500 hover:translate-x-0'>Email <AiOutlineMail className='text-xl' /></div>
          </a>
          <a href='https://www.facebook.com/rakibul.hasan.7424' target="_blank" rel="noopener noreferrer">
            <div className='cursor-pointer flex-1 flex items-center gap-[31px] bg-pink-800 p-2 transform -translate-x-24 duration-500 hover:translate-x-0'>Facebook <FaFacebook className='text-xl' /></div>
          </a>
        </div>
      </div>

      {/* Sections */}
      <div id="navbar">
        <Navbar />
      </div>
      <div id="banner">
        <Banner />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <SkillsNxt />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="projects">
        <ProjectShowcase />
      </div>
      <div id="education">
        <Education />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
