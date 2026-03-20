'use client';

import { motion } from 'framer-motion';

export default function About() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
    };

    // Updated focus items: Added Core CS, Deep Learning, and removed Cloud
    const focusItems = [
        { icon: "🧠", text: "Pursuing B.Tech in CS (AI & ML Specialization)", glow: "rgba(168, 85, 247, 0.15)", border: "rgba(168, 85, 247, 0.3)" }, // Purple tint
        { icon: "💻", text: "Mastering Full-Stack & Next.js ecosystem", glow: "rgba(56, 189, 248, 0.15)", border: "rgba(56, 189, 248, 0.3)" },   // Sky tint
        { icon: "🤖", text: "Integrating AI models into Web Applications", glow: "rgba(245, 158, 11, 0.15)", border: "rgba(245, 158, 11, 0.3)" },  // Amber tint
        { icon: "📊", text: "Exploring Neural Networks & Deep Learning", glow: "rgba(45, 212, 191, 0.15)", border: "rgba(45, 212, 191, 0.3)" },   // Teal tint (New Course Point)
        { icon: "⚙️", text: "Core CS: Algorithms & Systems Design", glow: "rgba(99, 102, 241, 0.15)", border: "rgba(99, 102, 241, 0.3)" },      // Indigo tint (Relatable Replacement)
        { icon: "🎨", text: "Exploring WebGL & Creative UI Development", glow: "rgba(244, 63, 94, 0.15)", border: "rgba(244, 63, 94, 0.3)" }     // Rose tint
    ];

    return (
        <div className="relative mx-auto max-w-5xl px-6 py-32 md:px-24">
            {/* Background glow */}
            <div className="absolute left-0 top-1/2 -z-10 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-violet-500/5 blur-[120px]" />

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                {/* Headline */}
                <motion.h2
                    variants={itemVariants}
                    className="mb-12 bg-gradient-to-r from-white via-neutral-200 to-neutral-500 bg-clip-text text-4xl font-medium tracking-tight text-transparent md:text-5xl"
                >
                    Beyond the Code
                </motion.h2>

                <div className="grid gap-16 md:grid-cols-2 lg:gap-24">
                    {/* Left Side: About Text */}
                    <motion.div variants={itemVariants} className="flex flex-col justify-center space-y-6 text-lg leading-relaxed text-neutral-400">
                        <p>
                            I am a dedicated B.Tech student specializing in <span className="font-medium text-orange-400">Artificial Intelligence</span> and <span className="font-medium text-violet-400">Machine Learning</span>. I am passionate about bridging the gap between heavy data engineering and seamless digital experiences.
                        </p>
                        <p>
                            When I'm not training models or studying complex algorithms, I focus on building <span className="font-medium text-sky-400">full-stack web applications</span>. I believe that true innovation happens when smart, predictive backend systems are paired with intuitive, high-performance user interfaces.
                        </p>
                        <p>
                            Currently, my goal is to explore the intersections of <span className="font-medium text-white">AI/ML</span> and modern web technologies like <span className="font-medium text-white">Next.js</span> and <span className="font-medium text-white">React</span>, constantly pushing the boundaries to build intelligent, scalable solutions for the future. Let's create something meaningful together.
                        </p>
                    </motion.div>

                    {/* Right Side: Current Focus Card */}
                    <motion.div
                        variants={itemVariants}
                        whileHover={{ y: -5 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-md md:p-10"
                    >
                        {/* Soft gradient on hover */}
                        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-violet-500/10 via-transparent to-sky-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                        <h3 className="mb-8 text-2xl font-semibold text-white">Current Focus</h3>

                        <ul className="space-y-6 text-neutral-300">
                            {focusItems.map((item, index) => (
                                <li key={index} className="flex items-center gap-4">
                                    {/* Glowing circle for icons */}
                                    <div
                                        className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-white/10 transition-colors duration-300"
                                        style={{ backgroundColor: item.glow, borderColor: item.border }}
                                    >
                                        <span className="text-xl">{item.icon}</span>
                                    </div>
                                    <span className="text-base font-medium">{item.text}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
}
