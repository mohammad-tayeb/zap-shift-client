
import p1 from '../../../public/p1.png'
import p2 from '../../../public/p2.png'
import p3 from '../../../public/p3.png'
const ProjectsSection = () => {
    const projects = [
        {
            id: 3,
            title: 'ZAPSHIFT DELIVERY SERVICE',
            category: 'Web App',
            image: p3, // Replace with your actual screenshot
            liveLink: '#',
            repoLink: '#'
        },
        {
            id: 2,
            title: 'CARX',
            category: 'Web App',
            image: p2, // Replace with your actual screenshot
            liveLink: 'https://carx-one.vercel.app/',
            repoLink: 'https://github.com/mohammad-tayeb/carx'
        },
        {
            id: 1,
            title: 'FNM  Automatives',
            category: 'Ecommerce',
            image: p1, // Replace with your actual screenshot
            liveLink: 'https://fnm-automative.vercel.app/',
            repoLink: 'https://github.com/mohammad-tayeb/fnm-automative'
        },
        {
            id: 4,
            title: 'Food Delivery Hero Banner',
            category: 'Design',
            image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=600&auto=format&fit=crop', // Replace with your actual screenshot
            liveLink: '#',
            repoLink: '#'
        }
    ];

    return (
        <section id='projects' className="bg-white text-slate-900 py-20 px-6 md:px-12 lg:px-24 border-t border-slate-100">
            <div className="max-w-7xl mx-auto">

                {/* Header Section */}
                <div className="mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-wide text-slate-900 mb-3 uppercase">
                        Featured Projects
                    </h2>
                    <p className="text-slate-500 max-w-md">
                        A curated selection of my recent design and development work.
                    </p>
                </div>

                {/* Projects Responsive Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="group relative overflow-hidden rounded-2xl shadow-lg"
                        >
                            {/* Image */}
                            <div className="overflow-hidden rounded-2xl">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="h-[400px] w-full object-cover object-top scale-105 transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/20 opacity-0 transition-all duration-500 group-hover:opacity-100" />

                            {/* Content */}
                            <div className="absolute inset-0 flex flex-col justify-center px-10">
                                <div className="translate-x-[-40px] opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100">
                                    <span className="mb-3 inline-block rounded-full bg-orange-500/20 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-orange-300">
                                        {project.category}
                                    </span>

                                    <h3 className="mb-8 text-4xl font-bold text-white">
                                        {project.title}
                                    </h3>

                                    <div className="flex flex-col gap-4">
                                        <a
                                            href={project.liveLink}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="w-52 rounded-md bg-red-500 py-3 text-center font-bold uppercase tracking-wider text-white transition hover:bg-red-600"
                                        >
                                            Live Preview
                                        </a>

                                        <a
                                            href={project.repoLink}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="w-52 rounded-md bg-white py-3 text-center font-bold uppercase tracking-wider text-slate-900 transition hover:bg-slate-100"
                                        >
                                            Repository
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default ProjectsSection;