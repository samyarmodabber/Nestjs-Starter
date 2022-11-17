import Navbar from './navbar';
import Image from 'next/image';
import info from '../../data/info.json';
const Header = () => {
  return (
    <header>
      Header Contents
      <Image
        alt={info['app-name']}
        src={info['logo-URL']}
        width={120}
        height={120}
        className=""
      />
      <div>{info['app-slogan']}</div>
      <Navbar />
    </header>
  );
};

export default Header;
