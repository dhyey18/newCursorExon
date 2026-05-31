import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from './components/Navigation';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: "Axon Automation — PLC & HMI Dealers | , India",
  description: "Authorised dealer of Siemens, Allen Bradley, Mitsubishi, Schneider & Delta PLCs, HMIs, VFDs and SCADA systems. Serving industries across India from , Gujarat.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
