import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Achyut Tiwari - Full Stack Developer',
  description: 'Professional portfolio of Achyut Tiwari, a Full Stack Web Developer specializing in modern web technologies including React, Node.js, and TypeScript.',
  keywords: 'Full Stack Developer, Web Developer, React, Node.js, TypeScript, JavaScript, Portfolio',
  authors: [{ name: 'Achyut Tiwari' }],
  creator: 'Achyut Tiwari',
  metadataBase: new URL('https://achyuttiwari-portfolio.vercel.app'),
  openGraph: {
    title: 'Achyut Tiwari - Full Stack Developer',
    description: 'Professional portfolio showcasing modern web development projects and skills',
    url: 'https://achyuttiwari-portfolio.vercel.app',
    siteName: 'Achyut Tiwari Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Achyut Tiwari Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Achyut Tiwari - Full Stack Developer',
    description: 'Professional portfolio showcasing modern web development projects and skills',
    creator: '@achyuttiwari',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}