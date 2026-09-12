import { LuGithub } from "react-icons/lu";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const ProjectShowcase = () => {
    const projects = [
        {
            title: "Zestora Restaurant",
            subtitle: "Full-Stack Food Ordering Platform",
            badge: "Featured MERN",
            image: "https://i.ibb.co.com/D2RFxTn/zestora-restaurant-client-10-14-2025-04-04-AM.png",
            tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Tanstack Query", "JWT"],
            client: "https://github.com/Rakibul-Hasan270/zestora-restaurant-client",
            server: "https://github.com/Rakibul-Hasan270/zestora-restaurant-server",
            live: "https://zestora-restaurant-new.web.app"
        },
        {
            title: "Fund Flow",
            subtitle: "Crowdfunding & Donation Web App",
            badge: "Donation Platform",
            image: "https://i.ibb.co.com/WNkKs4dd/Fund-Flowrout-10-14-2025-04-07-AM.png",
            tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Stripe JS", "Firebase"],
            client: "https://github.com/Rakibul-Hasan270/FundFlow_PDL_client",
            server: "https://github.com/Rakibul-Hasan270/FundFlow_PDL_server",
            live: "https://public-donation-list.web.app"
        },
        {
            title: "Site Network",
            subtitle: "Enterprise Web Platform & Management",
            badge: "NextGent Project",
            image: "https://i.ibb.co/wXfcJjt/client-09-11-2026-04-55-PM.png",
            tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Stripe JS", "Firebase"],
            client: "https://github.com/nextgentdev-bot/site-network-client",
            server: "https://github.com/nextgentdev-bot/site-network-server",
            live: "https://site-network-client.vercel.app/"
        }
    ];

    return (
        <div className="my-20 md:my-32">
            <h3 className="text-center text-2xl md:text-4xl font-extrabold mb-4">
                Projects Showcase<span className="text-pink-800 font-extrabold">_</span>
            </h3>
            <p className="text-center text-gray-400 max-w-2xl mx-auto mb-16 text-sm md:text-base">
                A selection of modern web applications I built, focusing on clean architecture, dynamic user experiences, and robust backend integrations.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        data-aos="fade-up"
                        data-aos-duration={800 + index * 200}
                        className="p-5 border border-pink-800/80 hover:border-pink-500 bg-slate-800/40 backdrop-blur-md rounded-2xl group flex flex-col justify-between transition-all duration-300 hover:shadow-[0_0_25px_rgba(157,23,77,0.25)]"
                    >
                        <div>
                            {/* Project Screenshot Container */}
                            <div className="relative rounded-xl overflow-hidden mb-4 border border-slate-700/60">
                                <div
                                    className="h-[220px] transition-all duration-[1500ms] ease-in-out w-full bg-cover bg-top group-hover:bg-bottom"
                                    style={{
                                        backgroundImage: `url('${project.image}')`,
                                    }}
                                ></div>

                                {/* Project Tag Badge */}
                                <span className={`absolute top-2.5 right-2.5 text-xs px-3 py-1 rounded-full font-medium shadow-md ${
                                    project.badge === "NextGent Project"
                                        ? "bg-gradient-to-r from-pink-800 to-indigo-800 text-white border border-pink-400/40"
                                        : "bg-slate-900/90 text-pink-300 border border-pink-800/70"
                                }`}>
                                    {project.badge}
                                </span>
                            </div>

                            {/* Title & Subtitle */}
                            <h2 className="text-xl font-bold text-white group-hover:text-pink-400 transition-colors">
                                {project.title}
                            </h2>
                            <p className="text-xs text-gray-400 mb-3 mt-0.5">
                                {project.subtitle}
                            </p>

                            {/* Tech Stack Tags */}
                            <div className="flex flex-wrap gap-1.5 py-3 border-t border-slate-700/60">
                                {project.tech.map((t, idx) => (
                                    <span
                                        key={idx}
                                        className="text-xs border text-gray-300 font-light border-pink-800/60 bg-pink-950/20 rounded-full px-2.5 py-0.5"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="mt-4 pt-3 border-t border-slate-700/60 space-y-2.5">
                            <div className="grid grid-cols-2 gap-2">
                                <a
                                    href={project.client}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full bg-slate-900/80 border border-slate-700 hover:border-pink-800 hover:bg-slate-800 rounded-lg text-center transition flex justify-center items-center"
                                >
                                    <button className="text-gray-200 text-xs py-2 flex items-center gap-1.5 font-medium">
                                        Client <LuGithub className="text-sm" />
                                    </button>
                                </a>

                                <a
                                    href={project.server}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full bg-slate-900/80 border border-slate-700 hover:border-pink-800 hover:bg-slate-800 rounded-lg text-center transition flex justify-center items-center"
                                >
                                    <button className="text-gray-200 text-xs py-2 flex items-center gap-1.5 font-medium">
                                        Server <LuGithub className="text-sm" />
                                    </button>
                                </a>
                            </div>

                            <a
                                href={project.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full block bg-gradient-to-r from-indigo-800 to-pink-800 hover:from-pink-800 hover:to-indigo-800 rounded-lg text-center transition shadow-md"
                            >
                                <button className="text-white text-xs py-2 w-full flex justify-center items-center gap-2 font-medium">
                                    Live Preview <FaArrowUpRightFromSquare className="text-xs" />
                                </button>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectShowcase;