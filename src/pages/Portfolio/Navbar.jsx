import { useState, useEffect } from "react";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const sections = document.querySelectorAll("section[id]");

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

                if (visible.length > 0) {
                    setActiveSection(visible[0].target.id);
                }
            },
            {
                threshold: [0.2, 0.4, 0.6, 0.8],
            }
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    const navItems = [
        { label: "HOME", href: "#home" },
        { label: "PROJECTS", href: "#projects" },
        { label: "SKILLS", href: "#skills" },
        { label: "CONTACT", href: "#contact" },
    ];

    return (
        <header
            className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 px-6 sm:px-12 lg:px-16 ${scrolled
                ? "bg-white/95 shadow-md py-2 backdrop-blur-md"
                : "bg-transparent py-6"
                }`}
        >
            <div className="mx-auto flex max-w-7xl items-center justify-between">
                {/* Logo */}
                <a href="#" className="group flex items-center gap-1 z-50">
                    <span className="text-2xl font-black tracking-tight">
                        <span className="text-amber-400 font-serif">α</span>
                        <span
                            className={`ml-1 tracking-tight transition-colors duration-300 ${scrolled ? "text-neutral-900" : "text-white"
                                }`}
                        >
                            Mahmud
                        </span>
                    </span>
                </a>

                {/* Desktop Navigation */}
                <div className="flex items-center gap-4 lg:gap-8">
                    <nav className="hidden md:flex items-center gap-8 lg:gap-10">
                        {navItems.map((item) => {
                            const id = item.href.replace("#", "");
                            const active = activeSection === id;

                            return (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    className={`text-xs font-bold tracking-widest transition-all duration-300 ${active
                                        ? "text-orange-500"
                                        : scrolled
                                            ? "text-neutral-900 hover:text-orange-600"
                                            : "text-neutral-900 hover:text-orange-200"
                                        }`}
                                >
                                    {item.label}
                                </a>
                            );
                        })}
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden flex h-10 w-10 items-center justify-center rounded-full bg-white/90 border border-neutral-200 shadow-sm hover:bg-white transition"
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? (
                            <svg
                                className="w-5 h-5 text-neutral-800"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                className="w-5 h-5 text-neutral-800"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
                                />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`absolute top-full left-0 w-full px-6 transition-all duration-300 md:hidden ${isOpen
                    ? "opacity-100 translate-y-2 pointer-events-auto"
                    : "opacity-0 -translate-y-2 pointer-events-none"
                    }`}
            >
                <div className="rounded-2xl border border-neutral-100 bg-white/95 p-6 shadow-xl backdrop-blur-md space-y-4">
                    {navItems.map((item) => {
                        const id = item.href.replace("#", "");
                        const active = activeSection === id;

                        return (
                            <a
                                key={item.label}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className={`block text-sm font-semibold transition-colors ${active
                                    ? "text-orange-600"
                                    : "text-neutral-800 hover:text-orange-600"
                                    }`}
                            >
                                {item.label}
                            </a>
                        );
                    })}
                </div>
            </div>
        </header>
    );
}

export default Navbar;