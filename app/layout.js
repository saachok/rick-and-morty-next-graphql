import '../public/styles/globals.scss';
import Navbar from '@/components/Navbar';

import styles from '../public/styles/layout.module.scss';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Rick and Morty GraphQL App',
  description:
    'This project is built using Next.js and Apollo Client to interact with the Rick and Morty API. It allows users to explore characters, episodes, and locations from the popular TV series "Rick and Morty."',
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={styles.body}>
        <main className={styles.main}>
          <div className={styles.navbar}>
            <Navbar />
          </div>
          <div>{children}</div>
          <div className={styles.footer}>
            <Footer />
          </div>
        </main>
      </body>
    </html>
  );
}
