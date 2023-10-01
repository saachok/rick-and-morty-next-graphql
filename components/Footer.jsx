import Image from 'next/image';
import styles from '../public/styles/Footer.module.scss';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className={styles.container}>
      <Link href={'https://github.com/saachok'}>
        <Image
          src="/assets/github-icon.png"
          alt="GitHub icon"
          width={35}
          height={35}
        />
      </Link>
      <Link href={'https://www.linkedin.com/in/andrii-sachok-91a086265/'}>
        <Image
          src="/assets/linkedin-icon.png"
          alt="LinkedIn icon"
          width={35}
          height={35}
        />
      </Link>
      <Link href={'mailto:andriy.sachok@gmail.com'}>
        <Image
          src="/assets/gmail-icon.png"
          alt="GMail icon"
          width={35}
          height={35}
        />
      </Link>
    </div>
  );
};

export default Footer;
