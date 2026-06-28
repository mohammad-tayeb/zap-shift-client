import { FaEnvelope, FaWhatsapp } from "react-icons/fa";

function Hero() {


    return (
        <section id="home" className="relative min-h-screen flex flex-col lg:flex-row bg-linear-to-b from-orange-500 via-orange-600 to-amber-700 overflow-x-hidden">

            {/* Left Column: Hero Content */}
            <div className="w-full lg:w-1/2 min-h-[60vh] lg:min-h-screen flex flex-col justify-center px-6 sm:px-12 lg:px-16 pt-32 pb-16 lg:py-28">
                <div className="max-w-xl">
                    <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold tracking-widest text-orange-100 uppercase backdrop-blur-sm">
                        Full Stack Developer
                    </span>

                    <h1 className="mt-6 text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-4xl leading-[1.05]">
                        BUILD.<br />
                        CREATE.<br />
                        INSPIRE.
                    </h1>

                    <p className="mt-8 text-base sm:text-lg leading-relaxed text-orange-50/90 font-light tracking-wide">
                        I'm <span className="font-semibold text-white">Tayeb Mahmud</span>,
                        a MERN Stack Developer passionate about engineering fast,
                        scalable, and intuitive web applications with React, Next.js, and Node.js ecosystems.
                    </p>


                    <div className="mt-6 flex items-center gap-5 text-orange-100">
                        <a href="https://www.linkedin.com/in/tayeb-mahmud/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors duration-200" aria-label="LinkedIn">
                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                            </svg>
                        </a>
                        <a href="https://github.com/mohammad-tayeb" target="_blank" rel="noreferrer" className="hover:text-white transition-colors duration-200" aria-label="GitHub">
                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.061.069-.061 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                            </svg>
                        </a>
                        <a
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=mohammad.tayeb9010@gmail.com&su=Project%20Inquiry&body=Hi%20Tayeb,%0A%0AI%20would%20like%20to%20discuss%20a%20project%20with%20you."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white transition-colors duration-200"
                            aria-label="Email"
                        >
                            <FaEnvelope />
                        </a>
                        <a
                            href="https://wa.me/8801871284044?text=Hello%20I%20want%20to%20contact%20you."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-green-500 transition-colors duration-200"
                            aria-label="WhatsApp"
                        >
                            <FaWhatsapp />
                        </a>
                    </div>

                    <div className="mt-5 flex flex-wrap gap-4">
                        <a href="#work" className="rounded-full bg-white px-6 py-3 text-sm font-bold text-orange-600 shadow-xs hover:bg-orange-50 transition-colors">
                            View My Work
                        </a>
                        <a
                            href="/resume.pdf"
                            download
                            className="flex items-center gap-2 rounded-full bg-amber-500 hover:bg-amber-400 px-6 py-3 text-sm font-bold text-white shadow-xs transition-colors"
                        >
                            <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            Download Resume
                        </a>
                    </div>
                </div>
            </div>

            {/* Right Column: Visual Feature Area */}
            <div className="w-full lg:w-1/2 min-h-[40vh] lg:min-h-[calc(100vh-1rem)] bg-white rounded-2xl flex items-center justify-center p-6 sm:p-12 lg:p-16 m-2">
                <div className="w-full max-w-md rounded-2xl border border-neutral-200/80 bg-neutral-900 p-6 shadow-2xl relative overflow-hidden group hover:border-orange-500/30 transition-all duration-300">
                    {/* Mock Terminal Header */}
                    <div className="flex items-center gap-2 pb-4 border-b border-neutral-800 mb-4">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                        <span className="text-xs text-neutral-500 font-mono ml-2">developer.js</span>
                    </div>

                    {/* Mock Code / Specs */}
                    <div className="font-mono text-xs sm:text-sm space-y-3 text-neutral-300">
                        <p><span className="text-orange-400">const</span> skills = &#123;</p>
                        <p className="pl-4"><span className="text-amber-300">frontend</span>: ["React", "Next.js", "TailwindCSS"],</p>
                        <p className="pl-4"><span className="text-amber-300">backend</span>: ["Node.js", "Express", "MongoDB"],</p>
                        <p className="pl-4"><span className="text-amber-300">philosophy</span>: "Clean code & Scalable UX"</p>
                        <p>&#125;;</p>

                        <div className="pt-4 border-t border-neutral-800 mt-4 flex justify-between items-center text-neutral-500 text-[11px]">
                            <span>Status: Available for Hire</span>
                            <span className="animate-pulse text-green-400 font-bold">● Live</span>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default Hero;