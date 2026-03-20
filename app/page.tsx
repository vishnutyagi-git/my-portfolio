import ScrollyCanvas from '../components/ScrollyCanvas';
import About from '../components/About';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Certificates from '../components/Certificates';
import Contact from '../components/Contact'; // This is your new warm footer

export default function Home() {
    return (
        <main className="relative w-full bg-[#121212] text-white">
            {/* 1. Landing / Hero */}
            <section id="home">
                <ScrollyCanvas />
            </section>

            {/* 2. About Me */}
            <section id="about" className="py-20">
                <About />
            </section>

            {/* 3. Tech Stack / Skills */}
            <section id="skills" className="py-20">
                <Skills />
            </section>

            {/* 4. Internships & Experience */}
            <section id="experience" className="py-20">
                <Experience />
            </section>

            {/* 5. The Work / Projects */}
            <section id="projects" className="py-20">
                <Projects />
            </section>

            {/* 6. Certifications */}
            <section id="certificates" className="py-20">
                <Certificates />
            </section>

            {/* 7. The Final Warm Note & Contact Section */}
            <section id="contact">
                <Contact />
            </section>
        </main>
    );
}
