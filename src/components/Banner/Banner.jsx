import { LuArrowDownToLine } from "react-icons/lu";
import { FiSend } from "react-icons/fi";
import img from '../../assets/1000027735.jpg';
import { ToastContainer, toast } from 'react-toastify';
import { TypeAnimation } from "react-type-animation";
import { Link } from 'react-scroll';

const Banner = () => {
    const notify = () => toast.success("Resume download started!");

    return (
        <div className="md:flex justify-between items-center mt-10 gap-8 space-y-10 md:space-y-0">
            <div className="flex-grow space-y-5">
                {/* Live Availability Badge */}
                <div className="flex justify-center md:justify-start">
                    <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-medium border border-pink-800/80 bg-pink-950/40 text-pink-300 backdrop-blur-sm shadow-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        Available for Opportunities
                    </span>
                </div>

                <h3 className="text-3xl md:text-5xl font-bold text-center md:text-start">
                    I&apos;m Rakibul Hasan
                </h3>

                <div className="flex justify-center md:justify-start items-center">
                    <span className="text-2xl mr-3 hidden md:block">a</span>
                    <div className="text-xs md:text-xl">
                        <TypeAnimation
                            className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-semibold"
                            sequence={[
                                'Full Stack Developer',
                                1000,
                                'MERN Stack Developer',
                                1000,
                                'DevOps & Server Deployment',
                                1000,
                                'AWS & Hostinger VPS Specialist',
                                1000,
                            ]}
                            speed={50}
                            style={{ fontSize: '2em' }}
                            repeat={Infinity}
                        />
                    </div>
                </div>

                <p className="md:w-[650px] text-center md:text-start text-gray-300 leading-relaxed">
                    Full Stack & MERN Stack Developer at <span className="text-pink-400 font-semibold">NextGent Marketing</span>. Specializing in high-performance web applications and cloud server management with DevOps (AWS & Hostinger VPS).
                </p>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-1">
                    <a href="/MERN_Stack_Developer_resume_of_Rakibul_Hasan.pdf" download={true}>
                        <button
                            onClick={notify}
                            className="flex items-center gap-2 bg-gradient-to-r from-indigo-800 to-pink-800 hover:from-pink-800 hover:to-indigo-800 text-white px-5 py-2.5 rounded-lg shadow-lg shadow-pink-900/20 transition-all font-medium"
                        >
                            Resume <LuArrowDownToLine />
                        </button>
                    </a>
                    <Link to="contact" smooth={true} spy={true} duration={1000}>
                        <button className="flex items-center gap-2 border border-pink-800 hover:border-white text-gray-200 hover:text-white px-5 py-2.5 rounded-lg transition-all font-medium bg-slate-800/30">
                            Let&apos;s Talk <FiSend className="text-pink-400" />
                        </button>
                    </Link>
                </div>

                {/* Quick Stats Grid */}
                <div className="grid grid-cols-3 gap-3 pt-3 max-w-md mx-auto md:mx-0">
                    <div className="border border-pink-800/60 bg-slate-800/50 rounded-xl p-3 text-center hover:border-pink-500 transition duration-300">
                        <p className="text-xl md:text-2xl font-extrabold text-white">1+ <span className="text-pink-500">Yr</span></p>
                        <p className="text-xs text-gray-400 mt-0.5">Experience</p>
                    </div>
                    <div className="border border-pink-800/60 bg-slate-800/50 rounded-xl p-3 text-center hover:border-pink-500 transition duration-300">
                        <p className="text-xl md:text-2xl font-extrabold text-white">15+ <span className="text-pink-500">Projs</span></p>
                        <p className="text-xs text-gray-400 mt-0.5">Completed</p>
                    </div>
                    <div className="border border-pink-800/60 bg-slate-800/50 rounded-xl p-3 text-center hover:border-pink-500 transition duration-300">
                        <p className="text-xl md:text-2xl font-extrabold text-white">MERN</p>
                        <p className="text-xs text-gray-400 mt-0.5">Specialist</p>
                    </div>
                </div>
            </div>

            {/* Profile Image with Glow */}
            <div className="mx-auto rounded-full w-7/12 md:w-4/12 border-4 border-pink-800 shadow-[0_0_35px_rgba(157,23,77,0.35)] transition-all duration-500 hover:scale-105">
                <img className="rounded-full w-full object-cover" src={img} alt="Rakibul Hasan" />
            </div>
            <ToastContainer />
        </div>
    );
};

export default Banner;