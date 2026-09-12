import { motion } from "framer-motion";
import { FaWordpress, FaAws, FaServer } from "react-icons/fa";
import { SiHostinger, SiNginx } from "react-icons/si";

const SkillsNxt = () => {
    const skills = [
        { src: "https://i.ibb.co.com/GfH2cc7s/download-1-removebg-preview.png", alt: "React", name: "React" },
        { src: "https://i.ibb.co.com/6JT6JpqC/download.png", alt: "JavaScript", name: "JavaScript" },
        { src: "https://i.ibb.co.com/N67zHmXS/download-2-removebg-preview.png", alt: "Node.js", name: "Node.js" },
        { src: "https://i.ibb.co.com/fdMjGt77/download-3-removebg-preview.png", alt: "Express.js", name: "Express.js" },
        { src: "https://i.ibb.co.com/MWHjffs/download-4-removebg-preview.png", alt: "MongoDB", name: "MongoDB" },
        { icon: <FaAws className="text-3xl text-amber-500" />, alt: "AWS", name: "AWS Cloud" },
        { icon: <SiHostinger className="text-3xl text-purple-400" />, alt: "Hostinger VPS", name: "Hostinger VPS" },
        { icon: <FaServer className="text-3xl text-pink-400" />, alt: "DevOps & VPS", name: "DevOps / Linux" },
        { icon: <SiNginx className="text-3xl text-emerald-400" />, alt: "Nginx", name: "Nginx" },
        { src: "https://i.postimg.cc/C5JL432w/Tailwind.png", alt: "Tailwind CSS", name: "Tailwind" },
        { src: "https://i.ibb.co.com/JFW5KnkN/download-6-removebg-preview.png", alt: "HTML5", name: "HTML5" },
        { src: "https://i.ibb.co.com/XQskyNQ/download-6-removebg-preview-1.png", alt: "CSS3", name: "CSS3" },
        { src: "https://i.ibb.co.com/6c0NKJrf/download-7-removebg-preview.png", alt: "Firebase", name: "Firebase" },
        { src: "https://i.ibb.co.com/mC3t0Xqk/download-5-removebg-preview.png", alt: "Material UI", name: "Material UI" },
        { src: "https://i.postimg.cc/DyM7yPkp/github.png", alt: "GitHub", name: "GitHub" },
        { src: "https://i.ibb.co.com/5WjK37kf/images-removebg-preview.png", alt: "Figma", name: "Figma" },
        { icon: <FaWordpress className="text-3xl text-sky-400" />, alt: "WordPress", name: "WordPress" },
    ];

    return (
        <div className="my-20 md:my-32">
            <h3 className="text-center text-2xl md:text-4xl font-extrabold mb-4">
                Skills & Tools
                <span className="text-pink-800 font-extrabold">_</span>
            </h3>
            <p className="text-center text-gray-400 max-w-xl mx-auto mb-16 text-sm md:text-base">
                Core technologies, DevOps platforms (AWS & Hostinger VPS), and development tools I utilize to craft and deploy scalable, full-stack web applications.
            </p>

            {/* Responsive Grid with Tooltip/Labels */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-4xl mx-auto px-2">
                {skills.map((skill, index) => (
                    <motion.div
                        key={index}
                        className="border border-pink-800/80 hover:border-pink-500 bg-slate-800/40 backdrop-blur-sm rounded-xl p-3 flex flex-col items-center justify-center w-24 h-24 group transition-all duration-300 hover:shadow-[0_0_20px_rgba(157,23,77,0.3)] hover:bg-slate-800/80"
                        animate={{ y: [0, -8, 0] }}
                        transition={{
                            duration: 2.5 + (index % 3) * 0.5,
                            repeat: Infinity,
                            repeatType: "loop",
                            ease: "easeInOut",
                            delay: (index % 4) * 0.3,
                        }}
                    >
                        <div className="h-10 w-10 flex items-center justify-center">
                            {skill.icon ? (
                                skill.icon
                            ) : (
                                <img
                                    className="h-9 w-9 object-contain group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300"
                                    src={skill.src}
                                    alt={skill.alt}
                                />
                            )}
                        </div>
                        <p className="text-[11px] text-gray-300 font-medium mt-1.5 text-center group-hover:text-pink-400 transition-colors truncate w-full">
                            {skill.name}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default SkillsNxt;