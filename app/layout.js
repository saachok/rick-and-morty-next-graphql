import '../public/styles/globals.scss';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Rick and Morty GraphQL App',
  description:
    'This project is built using Next.js and Apollo Client to interact with the Rick and Morty API. It allows users to explore characters, episodes, and locations from the popular TV series "Rick and Morty."',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
