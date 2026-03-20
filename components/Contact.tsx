"use client";



import { motion } from "framer-motion";

import Link from "next/link";

import { FaLinkedin, FaGithub, FaEnvelope, FaArrowUp } from "react-icons/fa";

import { SiGmail } from "react-icons/si";



export default function Contact() {

    const quickLinks = [

        { name: "Home", href: "#home" },

        { name: "About", href: "#about" },

        { name: "Experience", href: "#experience" },

        { name: "Projects", href: "#projects" },

        { name: "Certificates", href: "#certificates" },

    ];



    const contactData = [

        {

            label: "Email",

            val: "tyagii.vishnu@gmail.com",

            href: "mailto:tyagii.vishnu@gmail.com",

            icon: <SiGmail />,

            color: "group-hover:text-[#EA4335]"

        },

        {

            label: "LinkedIn",

            val: "@vishnutyagii",

            href: "https://linkedin.com/in/vishnutyagii/",

            icon: <FaLinkedin />,

            color: "group-hover:text-[#0A66C2]"

        },

        {

            label: "GitHub",

            val: "@vishnutyagii",

            href: "https://github.com/vishnutyagii",

            icon: <FaGithub />,

            color: "group-hover:text-white"

        }

    ];



    const scrollToTop = () => {

        window.scrollTo({ top: 0, behavior: "smooth" });

    };



    return (

        <footer className="relative w-full bg-[#0a0a0a] pt-24 pb-12 overflow-hidden border-t border-white/5">

            {/* Background Glows */}

            <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />



            <div className="mx-auto max-w-6xl px-6 relative z-10">

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-20">



                    {/* Brand Section */}

                    <div className="lg:col-span-7">

                        <motion.div

                            initial={{ opacity: 0, y: 20 }}

                            whileInView={{ opacity: 1, y: 0 }}

                            transition={{ duration: 0.8 }}

                            viewport={{ once: true }}

                        >

                            <span className="text-orange-400 font-mono text-sm tracking-widest uppercase mb-4 block">Get in touch</span>

                            <h2 className="text-6xl md:text-7xl font-bold tracking-tighter text-white mb-8">

                                Let’s Build the <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Future.</span>

                            </h2>

                            <p className="text-neutral-400 text-xl leading-relaxed max-w-lg font-light">

                                Hey! Full Stack Developer here, diving into AI/ML and building smart, scalable apps. Always open to opportunities, collaborations, and tech chats—let’s connect! 🚀

                            </p>

                        </motion.div>

                    </div>



                    {/* Quick Nav */}

                    <div className="lg:col-span-5 flex flex-col items-start lg:items-end">

                        <div className="bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-md w-full max-w-xs">

                            <h4 className="text-white font-semibold mb-6">Explore</h4>

                            <nav className="flex flex-col gap-4">

                                {quickLinks.map((link) => (

                                    <Link

                                        key={link.name}

                                        href={link.href}

                                        className="text-neutral-500 hover:text-orange-400 transition-colors duration-300 text-sm flex items-center justify-between group"

                                    >

                                        {link.name}

                                        <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>

                                    </Link>

                                ))}

                            </nav>

                        </div>

                    </div>

                </div>



                {/* Contact Bento Grid */}

                <div className="grid gap-4 md:grid-cols-3 mb-20">

                    {contactData.map((card, i) => (

                        <motion.a

                            key={card.label}

                            href={card.href}

                            target="_blank"

                            rel="noopener noreferrer"

                            initial={{ opacity: 0, scale: 0.95 }}

                            whileInView={{ opacity: 1, scale: 1 }}

                            transition={{ delay: i * 0.1 }}

                            viewport={{ once: true }}

                            className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/5 bg-white/[0.03] p-8 transition-all hover:bg-white/[0.06] hover:border-white/20"

                        >

                            <div className={`text-4xl mb-12 text-neutral-600 transition-all duration-500 ${card.color}`}>

                                {card.icon}

                            </div>

                            <div>

                                <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 font-bold mb-1">{card.label}</p>

                                <p className="text-lg font-medium text-neutral-200">{card.val}</p>

                            </div>

                        </motion.a>

                    ))}

                </div>



                {/* Footer Bottom */}

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">

                    <div className="text-neutral-600 text-xs font-mono uppercase tracking-widest">

                        © 2026 Vishnu Tyagi • Designed for the modern web

                    </div>



                    <button

                        onClick={scrollToTop}

                        className="p-4 bg-white/5 hover:bg-orange-500 text-white transition-all rounded-full group"

                    >

                        <FaArrowUp className="group-hover:-translate-y-1 transition-transform" />

                    </button>

                </div>

            </div>

        </footer>

    );

}

