'use client';

import { motion, MotionValue, useTransform } from 'framer-motion';

interface OverlayProps {
    scrollYProgress: MotionValue<number>;
}

export default function Overlay({ scrollYProgress }: OverlayProps) {
    // --- Animation Mapping Logic ---
    // Framer Motion maps the scroll value (0 to 1) to target values.

    // Section 1: 0% scroll (Fades out quickly as user starts scrolling)
    const opacity1 = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
    const y1 = useTransform(scrollYProgress, [0, 0.15], [0, -100]);

    // Section 2: 30% scroll (Fades in, peaks, fades out)
    const opacity2 = useTransform(scrollYProgress, [0.15, 0.3, 0.45], [0, 1, 0]);
    const y2 = useTransform(scrollYProgress, [0.15, 0.3, 0.45], [100, 0, -100]);

    // Section 3: 60% scroll (Fades in, peaks, fades out)
    const opacity3 = useTransform(scrollYProgress, [0.45, 0.6, 0.75], [0, 1, 0]);
    const y3 = useTransform(scrollYProgress, [0.45, 0.6, 0.75], [100, 0, -100]);

    return (
        <div className="pointer-events-none absolute inset-0 z-10 flex h-full w-full items-center justify-center overflow-hidden">

            {/* Section 1 - Center Aligned */}
            <motion.div
                style={{ opacity: opacity1, y: y1 }}
                className="absolute w-full px-6 text-center md:px-24"
            >
                <h1 className="text-5xl font-bold tracking-tighter text-white md:text-8xl">
                    Vishnu Tyagi<br />
                    <span className="text-neutral-500">Creative Developer</span>
                </h1>
            </motion.div>

            {/* Section 2 - Left Aligned */}
            <motion.div
                style={{ opacity: opacity2, y: y2 }}
                className="absolute left-0 w-full px-6 md:px-24"
            >
                <h2 className="max-w-2xl text-4xl font-semibold tracking-tight text-white md:text-7xl">
                    I build digital <br />
                    <span className="text-neutral-400">experiences.</span>
                </h2>
            </motion.div>

            {/* Section 3 - Right Aligned */}
            <motion.div
                style={{ opacity: opacity3, y: y3 }}
                className="absolute right-0 w-full px-6 text-right md:px-24"
            >
                <div className="ml-auto max-w-2xl">
                    <h2 className="text-4xl font-semibold tracking-tight text-white md:text-7xl">
                        Bridging design <br />
                        <span className="text-neutral-400">and engineering.</span>
                    </h2>
                </div>
            </motion.div>

        </div>
    );
}
