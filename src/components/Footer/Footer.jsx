import { Link } from 'react-scroll';
import { FaLinkedin, FaGithub, FaFacebook, FaArrowUp } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import img from '../../assets/logo.png';

const Footer = () => {
    return (
        <footer className="mt-24 pt-12 pb-24 border-t border-slate-800 relative">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-slate-800/80">
                    {/* Brand Info */}
                    <div className="text-center md:text-start space-y-2">
                        <Link to="navbar" smooth={true} duration={1000} className="flex items-center justify-center md:justify-start cursor-pointer group">
                            <img className="w-7 h-11 group-hover:scale-105 transition-transform" src={img} alt="Logo" />
                            <p className="text-2xl font-bold tracking-tight text-white ml-1">akib</p>
                        </Link>
                        <p className="text-sm text-gray-400 max-w-sm">
                            Full Stack Developer & DevOps at <span className="text-pink-400 font-semibold">NextGent Marketing</span>. Crafting scalable MERN web applications and managing cloud server deployments (AWS & Hostinger VPS).
                        </p>
                    </div>

                    {/* Quick Navigation Links */}
                    <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-300">
                        <Link to="navbar" smooth={true} duration={1000} className="hover:text-pink-400 cursor-pointer transition">Home</Link>
                        <Link to="about" smooth={true} duration={1000} className="hover:text-pink-400 cursor-pointer transition">About</Link>
                        <Link to="skills" smooth={true} duration={1000} className="hover:text-pink-400 cursor-pointer transition">Skills</Link>
                        <Link to="experience" smooth={true} duration={1000} className="hover:text-pink-400 cursor-pointer transition">Experience</Link>
                        <Link to="projects" smooth={true} duration={1000} className="hover:text-pink-400 cursor-pointer transition">Projects</Link>
                        <Link to="contact" smooth={true} duration={1000} className="hover:text-pink-400 cursor-pointer transition">Contact</Link>
                    </div>

                    {/* Social Media Links */}
                    <div className="flex items-center gap-3">
                        <a
                            href="https://www.linkedin.com/in/rakibul-hasan01/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="p-2.5 rounded-full bg-slate-800/60 border border-slate-700 hover:border-pink-800 hover:bg-pink-900/30 text-gray-300 hover:text-white transition-all shadow-sm"
                        >
                            <FaLinkedin className="text-lg" />
                        </a>
                        <a
                            href="https://github.com/Rakibul-Hasan270"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            className="p-2.5 rounded-full bg-slate-800/60 border border-slate-700 hover:border-pink-800 hover:bg-pink-900/30 text-gray-300 hover:text-white transition-all shadow-sm"
                        >
                            <FaGithub className="text-lg" />
                        </a>
                        <a
                            href="mailto:rakibx270@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Email"
                            className="p-2.5 rounded-full bg-slate-800/60 border border-slate-700 hover:border-pink-800 hover:bg-pink-900/30 text-gray-300 hover:text-white transition-all shadow-sm"
                        >
                            <AiOutlineMail className="text-lg" />
                        </a>
                        <a
                            href="https://www.facebook.com/rakibul.hasan.7424"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Facebook"
                            className="p-2.5 rounded-full bg-slate-800/60 border border-slate-700 hover:border-pink-800 hover:bg-pink-900/30 text-gray-300 hover:text-white transition-all shadow-sm"
                        >
                            <FaFacebook className="text-lg" />
                        </a>

                        {/* Back To Top Button */}
                        <Link to="navbar" smooth={true} duration={1000}>
                            <button
                                aria-label="Back to top"
                                className="ml-2 p-2.5 rounded-full bg-gradient-to-r from-indigo-800 to-pink-800 hover:from-pink-800 hover:to-indigo-800 text-white transition-all shadow-md"
                                title="Back to top"
                            >
                                <FaArrowUp className="text-sm" />
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Copyright Line */}
                <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-2">
                    <p>© {new Date().getFullYear()} Rakibul Hasan. All rights reserved.</p>
                    <p>Designed & Built with React, Tailwind CSS & Vite</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
