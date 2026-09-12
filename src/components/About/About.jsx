import Lottie from "lottie-react";
import img from '../../assets/animation.json';

const About = () => {
    return (
        <div className="flex md:flex-row flex-col-reverse sm:items-start md:items-center md:gap-10 md:mt-32">
            <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                <Lottie className="w-full" animationData={img}>
                </Lottie>
            </div>
            <div className='flex-grow'>
                <h3 className='text-center md:text-start text-2xl md:text-4xl font-extrabold mb-8'>About Me <span className="text-pink-800 font-extrabold">_</span></h3>
                <p className="text-center md:text-start">I&apos;m Rakibul Hasan, a Full Stack Developer & MERN Stack Developer currently working at <span className="text-pink-500 font-semibold">NextGent Marketing</span>. I have completed a diploma in Computer Engineering from Kurigram Polytechnic Institute. I specialize in building scalable, full-stack web applications with <span className="font-bold">ReactJS, Node.js, Express.js, MongoDB (MERN Stack), JavaScript, and Tailwind CSS</span>, and have extensive experience building robust backend REST APIs, authentication with <span className="font-bold">JWT and Firebase</span>, and server-side deployment & DevOps using <span className="font-bold">AWS and Hostinger VPS</span>.
                    <br /> <br />
                    I am passionate about coding, server management, and continuously exploring modern technologies to elevate my craft.
                    I enjoy taking on challenging projects that push me to think creatively and solve problems efficiently.
                    My goal is to grow continuously as a Full Stack & MERN Stack Developer with strong DevOps expertise, delivering high-performance, secure, and scalable web solutions.</p>
            </div>
        </div>
    );
};

export default About;