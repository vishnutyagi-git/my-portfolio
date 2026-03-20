import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import SmoothScroll from '../components/SmoothScroll';
import './globals.css';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
});

// Humne yahan se 'icons' wala part hata diya hai
export const metadata: Metadata = {
    title: 'Vishnu Tyagi',
    description: 'A curation of digital experiences bridging design and engineering.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.variable} bg-[#121212] font-sans text-white antialiased`}>
                <SmoothScroll>
                    {children}
                </SmoothScroll>
            </body>
        </html>
    );
} 

