import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/next';
import { PerformanceProvider } from '@/context/PerformanceProvider';

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Jordan Fulawka's Portfolio",
  description: 'Created by Jordan Fulawka',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={`${jetbrainsMono.variable} h-full antialiased`}>
      <body className='min-h-full flex flex-col'>
        <PerformanceProvider>
          {children}
          <Analytics />
        </PerformanceProvider>
      </body>
    </html>
  );
}
