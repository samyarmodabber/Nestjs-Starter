import Link from 'next/link';
import navbar from '../../data/navbar.json';

const Navbar = () => {
  return (
    <nav>
      <ul>
        {navbar.map((item) => (
          <li key={item.id}>
            <Link href={item.href}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
