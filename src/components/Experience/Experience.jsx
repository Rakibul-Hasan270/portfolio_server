import { FaBriefcase, FaBuilding, FaCalendarAlt, FaCheckCircle } from "react-icons/fa";

const Experience = () => {
    const experiences = [
        {
            role: "Full Stack Developer & DevOps (MERN)",
            company: "NextGent Marketing",
            period: "October 30, 2025 – Present",
            isCurrent: true,
            type: "Full-Time",
            description: [
                "Working as a Full Stack & MERN Stack Developer, building and maintaining web applications using MongoDB, Express.js, React.js, and Node.js.",
                "Developing responsive, modern, and performant user interfaces using React.js and Tailwind CSS.",
                "Designing and integrating scalable backend RESTful APIs with Node.js, Express.js, and MongoDB.",
                "Managing cloud server deployments and DevOps operations on AWS and Hostinger VPS using Linux, Nginx, and PM2.",
                "Collaborating with cross-functional teams to deliver high-quality client solutions with clean and maintainable code."
            ],
            technologies: [
                "MERN Stack",
                "React.js",
                "Node.js",
                "Express.js",
                "MongoDB",
                "DevOps",
                "AWS",
                "Hostinger VPS",
                "Linux & Nginx",
                "JavaScript",
                "Tailwind CSS",
                "REST APIs",
                "Git",
                "WordPress",
                "Figma"
            ]
        }
    ];

    return (
        <div className="my-20 md:my-32">
            <h3 className="text-center text-2xl md:text-4xl font-extrabold mb-16">
                Work Experience<span className="text-pink-800 font-extrabold">_</span>
            </h3>

            <div className="max-w-4xl mx-auto space-y-8">
                {experiences.map((exp, index) => (
                    <div
                        key={index}
                        data-aos="fade-up"
                        data-aos-duration="800"
                        className="p-6 md:p-8 rounded-2xl border border-pink-800/70 hover:border-pink-500 bg-slate-800/40 backdrop-blur-md transition-all duration-300 hover:shadow-[0_0_30px_rgba(157,23,77,0.25)]"
                    >
                        {/* Top Header */}
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div>
                                <div className="flex items-center gap-3">
                                    <div className="p-2.5 rounded-lg bg-pink-900/30 border border-pink-800/60 text-pink-500 text-xl">
                                        <FaBriefcase />
                                    </div>
                                    <h4 className="text-2xl md:text-3xl font-bold text-white tracking-wide">
                                        {exp.role}
                                    </h4>
                                </div>
                                <div className="flex items-center gap-2 text-lg font-semibold text-pink-400 mt-2 ml-1">
                                    <FaBuilding className="text-pink-500" />
                                    <span>{exp.company}</span>
                                </div>
                            </div>

                            {/* Date & Badges */}
                            <div className="flex flex-wrap items-center gap-2">
                                <span className="inline-flex items-center gap-2 bg-pink-950/40 border border-pink-800/80 px-4 py-1.5 rounded-full text-xs md:text-sm text-gray-200">
                                    {exp.isCurrent && (
                                        <span className="relative flex h-2.5 w-2.5">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                                        </span>
                                    )}
                                    <FaCalendarAlt className="text-pink-400" />
                                    {exp.period}
                                </span>
                                <span className="bg-gradient-to-r from-pink-800 to-indigo-800 text-white text-xs px-3 py-1.5 rounded-full font-medium">
                                    {exp.type}
                                </span>
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="h-[1px] w-full bg-gradient-to-r from-pink-800/60 via-purple-800/30 to-transparent my-6"></div>

                        {/* Bullet Points */}
                        <div className="space-y-3">
                            {exp.description.map((item, idx) => (
                                <div key={idx} className="flex items-start gap-3 text-gray-300 text-sm md:text-base leading-relaxed">
                                    <FaCheckCircle className="text-pink-500 mt-1 flex-shrink-0 text-sm" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>

                        {/* Tech Stack Pills */}
                        <div className="mt-6 pt-5 border-t border-slate-700/60">
                            <p className="text-xs uppercase tracking-wider text-gray-400 font-semibold mb-3">
                                Technologies & Environment
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {exp.technologies.map((tech, tIdx) => (
                                    <span
                                        key={tIdx}
                                        className="border text-gray-200 text-xs md:text-sm font-light border-pink-800/80 rounded-full px-3 py-1 bg-slate-900/40 hover:border-pink-500 hover:text-white transition-colors"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experience;
