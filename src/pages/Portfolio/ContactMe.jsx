import { useState } from 'react';
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';
import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';
import emailjs from "@emailjs/browser";

function ContactMe() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send(
            "service_l2kxi0q",
            "template_8iklpup",
            formData,
            "K-sqJO_cc5WDmdAuY"
        )
            .then(() => {
                alert("Message sent!");
            })
            .catch(() => {
                alert("Something went wrong.");
            });
    };

    return (
        <section id='contact' className="bg-white text-slate-900 py-20 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                {/* Left Side: Contact Information */}
                <div className="lg:col-span-5 space-y-8">
                    <div>
                        <h2 className="text-4xl font-bold tracking-tight text-slate-900 leading-tight">
                            Contact Us For<br />More Info
                        </h2>
                    </div>

                    <div className="space-y-6">
                        {/* Address */}
                        <div className="flex items-start gap-4">
                            <FiMapPin className="text-orange-600 text-xl mt-1 shrink-0" />
                            <p className="text-slate-700 leading-relaxed font-medium">
                                2No Gate, Cosmopolitan R/A,<br />Chittagong
                            </p>
                        </div>

                        {/* Phone */}
                        <div className="flex items-center gap-4">
                            <FiPhone className="text-orange-600 text-xl shrink-0" />
                            <a href="tel:+8801871284044" className="text-slate-700 hover:text-orange-600 font-medium transition-colors">
                                +880 1871284044
                            </a>
                        </div>

                        {/* Email */}
                        <div className="flex items-center gap-4">
                            <FiMail className="text-orange-600 text-xl shrink-0" />
                            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=mohammad.tayeb9010@gmail.com&su=Project%20Inquiry&body=Hi%20Tayeb,%0A%0AI%20would%20like%20to%20discuss%20a%20project%20with%20you."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-white transition-colors duration-200"
                                aria-label="Email" className="text-slate-700 hover:text-orange-600 font-medium transition-colors">
                                mohammad.tayeb9010@gmail.com
                            </a>
                        </div>
                    </div>

                    {/* Social Profiles */}
                    <div className="pt-4">
                        <h4 className="text-sm font-semibold text-slate-500 tracking-wider uppercase mb-4">
                            Follow Me
                        </h4>
                        <div className="flex gap-4 text-2xl text-slate-800">
                            <a href="https://web.facebook.com/mohammad.tayeb.31521" target="_blank" rel="noreferrer" className="hover:text-orange-600 transition-colors">
                                <FaFacebook />
                            </a>
                            <a href="https://www.linkedin.com/in/tayeb-mahmud/" target="_blank" rel="noreferrer" className="hover:text-orange-600 transition-colors">
                                <FaLinkedin />
                            </a>
                            <a href="https://github.com/mohammad-tayeb" target="_blank" rel="noreferrer" className="hover:text-orange-600 transition-colors">
                                <FaGithub />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right Side: Form Container */}
                <div className="lg:col-span-7 bg-white border border-slate-100 shadow-[0_10px_50px_rgba(0,0,0,0.08)] rounded-2xl p-8 md:p-12">
                    <form onSubmit={handleSubmit} className="space-y-6">

                        {/* Full Name */}
                        <div className="space-y-2">
                            <label htmlFor="fullName" className="text-sm font-semibold text-slate-800">
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="fullName"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                required
                                placeholder="John Doe"
                                className="w-full border border-slate-300 rounded-lg px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-orange-600 focus:ring-1 focus:ring-orange-600 transition-all"
                            />
                        </div>

                        {/* Email address */}
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-semibold text-slate-800">
                                Email address
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="johndoe@example.com"
                                className="w-full border border-slate-300 rounded-lg px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-orange-600 focus:ring-1 focus:ring-orange-600 transition-all"
                            />
                        </div>

                        {/* Message */}
                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-semibold text-slate-800">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="5"
                                placeholder="Message"
                                className="w-full border border-slate-300 rounded-lg px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-orange-600 focus:ring-1 focus:ring-orange-600 transition-all resize-none"
                            />
                        </div>

                        {/* Action Button */}
                        <button
                            type="submit"
                            className="w-full bg-orange-600 hover:bg-orange-500 text-white font-semibold tracking-wide py-3 px-6 rounded-lg shadow-md shadow-orange-600/10 active:scale-[0.99] transition-all"
                        >
                            Get In Touch
                        </button>

                    </form>
                </div>

            </div>
        </section>
    );
}

export default ContactMe;