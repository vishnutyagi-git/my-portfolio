'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowRight, FiArrowUpRight } from 'react-icons/fi';

export default function Footer() {
    return (
        <footer className="relative w-full overflow-hidden border-t border-white/5 py-24 mt-20">
            {/* Subtle Warm Glow (The "Calm" aesthetic) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[70%] h-[250px] bg-amber-600/5 blur-[120px] pointer-events-none rounded-[100%]" />

            <div className="relative z-10 max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12">

                {/* The Warm Note */}
                <div className="md:col-span-6 flex flex-col gap-4">
                    <h3 className="text-2xl font-medium text-neutral-200 tracking-tight">
                        Always building.
                    </h3>
                    <p className="text-neutral-500 leading-relaxed max-w-md text-sm">
                        Crafting digital experiences with curiosity and care.
                        Whether it's cloud architecture or a new line of code,
                        I believe in building things that matter. Let's create something meaningful together.
                    </p>
                </div>

                {/* Quick Links (Animated Explore Section) */}
                <div className="md:col-span-3 flex flex-col gap-4">
                    <h4 className="text-xs uppercase tracking-widest text-neutral-600 font-semibold mb-2">Explore</h4>
                    <nav className="flex flex-col gap-3">
                        {[
                            { name: 'Home', id: '#home' },
                            { name: 'Experience', id: '#experience' },
                            { name: 'Projects', id: '#projects' },
                            { name: 'Certificates', id: '#certificates' }
                        ].map((item, index) => (
                            <motion.a
                                key={item.name}
                                href={item.id}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.4 }}
                                whileHover="hover"
                                whileTap="tap"
                                className="group relative flex w-fit items-center gap-2 cursor-pointer py-1"
                            >
                                {/* Glowing Indicator Line */}
                                <motion.span
                                    variants={{ hover: { height: '100%', opacity: 1 } }}
                                    initial={{ height: '0%', opacity: 0 }}
                                    className="absolute -left-3 w-[2px] rounded-full bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.8)] transition-all duration-300"
                                />

                                {/* Text Slide & Color Shift */}
                                <motion.span
                                    variants={{
                                        hover: { x: 4, color: '#f97316' }, // Tailwind orange-500
                                        tap: { scale: 0.95 }
                                    }}
                                    className="text-sm font-medium text-neutral-500 transition-colors duration-300"
                                >
                                    {item.name}
                                </motion.span>

                                {/* Arrow Slide In */}
                                <motion.div
                                    variants={{ hover: { x: 4, opacity: 1 } }}
                                    initial={{ x: -10, opacity: 0 }}
                                    className="text-orange-500 transition-all duration-300"
                                >
                                    <FiArrowRight size={14} />
                                </motion.div>
                            </motion.a>
                        ))}
                    </nav>
                </div>

                {/* Get in Touch (Animated Connect Section) */}
                <div className="md:col-span-3 flex flex-col gap-4">
                    <h4 className="text-xs uppercase tracking-widest text-neutral-600 font-semibold mb-2">Connect</h4>
                    <nav className="flex flex-col gap-3">
                        {[
                            { name: 'Email', link: 'mailto:tyagii.vishnu@gmail.com' },
                            { name: 'LinkedIn', link: 'https://linkedin.com/in/vishnutyagii' },
                            { name: 'GitHub', link: 'https://github.com/vishnutyagii' }
                        ].map((item, index) => (
                            <motion.a
                                key={item.name}
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 + 0.2, duration: 0.4 }} // Thoda extra delay
                                whileHover="hover"
                                whileTap="tap"
                                className="group relative flex w-fit items-center gap-2 cursor-pointer py-1"
                            >
                                {/* Glowing Indicator Line */}
                                <motion.span
                                    variants={{ hover: { height: '100%', opacity: 1 } }}
                                    initial={{ height: '0%', opacity: 0 }}
                                    className="absolute -left-3 w-[2px] rounded-full bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.8)] transition-all duration-300"
                                />

                                {/* Text Slide & Color Shift */}
                                <motion.span
                                    variants={{
                                        hover: { x: 4, color: '#f97316' },
                                        tap: { scale: 0.95 }
                                    }}
                                    className="text-sm font-medium text-neutral-500 transition-colors duration-300"
                                >
                                    {item.name}
                                </motion.span>

                                {/* Arrow Slide In (Up-Right for external links) */}
                                <motion.div
                                    variants={{ hover: { x: 4, opacity: 1, rotate: 0 } }}
                                    initial={{ x: -10, opacity: 0, rotate: -45 }}
                                    className="text-orange-500 transition-all duration-300"
                                >
                                    <FiArrowUpRight size={14} />
                                </motion.div>
                            </motion.a>
                        ))}
                    </nav>
                </div>

            </div>
        </footer>
    );
}

