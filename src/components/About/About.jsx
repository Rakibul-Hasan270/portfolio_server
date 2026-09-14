import Lottie from "lottie-react";
import img from '../../assets/animation.json';

const techStack = [
    "React", "Node.js", "Express.js", "MongoDB", "JavaScript",
    "Tailwind CSS", "JWT", "Firebase", "AWS", "Hostinger VPS"
];

const About = () => {
    return (
        <div data-aos="fade-up" data-aos-duration="800" className="mt-20 md:mt-32">
            <div className="flex flex-col-reverse items-center gap-12 md:flex-row md:items-center md:gap-16">
                {/* Animation */}
                <div className="relative w-full shrink-0 md:w-[38%]">
                    <div className="absolute inset-0 rounded-full bg-pink-800/20 blur-3xl"></div>
                    <div className="relative rounded-3xl border border-pink-800/20 bg-white/[0.02] p-6">
                        <Lottie className="w-full" animationData={img} />
                    </div>
                </div>

                {/* Content */}
                <div className="w-full flex-1">
                    <h3 className="mb-3 text-center text-2xl font-extrabold md:text-start md:text-4xl">
                        About Me<span className="text-pink-800 font-extrabold">_</span>
                    </h3>
                    <p className="mb-6 text-center font-semibold text-pink-500 md:text-start">
                        Full Stack Developer &middot; MERN Stack &middot; DevOps
                    </p>

                    <div className="mx-auto max-w-2xl space-y-4 text-center leading-relaxed text-gray-300 md:mx-0 md:text-start">
                        <p>
                            I&apos;m <span className="font-semibold text-white">Rakibul Hasan</span>, currently working as a Full Stack Developer at{" "}
                            <span className="font-semibold text-pink-500">NextGent Marketing</span>, where I build scalable web applications end to end. I hold a diploma in Computer Engineering from Kurigram Polytechnic Institute.
                        </p>
                        <p>
                            My core stack is <span className="font-semibold text-white">React, Node.js, Express.js, and MongoDB</span>, backed by hands-on experience designing REST APIs, handling authentication with JWT and Firebase, and deploying and managing servers on AWS and Hostinger VPS.
                        </p>
                        <p>
                            I enjoy solving hard problems, keeping systems reliable in production, and picking up new tools when they genuinely make my work better. My goal is to keep growing as a Full Stack developer with strong DevOps skills, building software that&apos;s fast, secure, and built to last.
                        </p>
                    </div>

                    <div className="mt-6 flex flex-wrap justify-center gap-2 md:justify-start">
                        {techStack.map((tech) => (
                            <span
                                key={tech}
                                className="rounded-full border border-pink-800/30 px-3 py-1 text-sm text-gray-300 transition-colors hover:border-pink-800 hover:text-pink-400"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;