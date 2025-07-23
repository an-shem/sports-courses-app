import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-center gap-5">
      <ul className="flex space-x-4">
        <li>
          <Link href="/" className="hover:text-accent-yellow">
            Главная
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-accent-yellow">
            О проекте
          </Link>
        </li>
        <li>
          <Link href="/sports" className="hover:text-accent-yellow">
            Список курсов
          </Link>
        </li>
      </ul>
    </nav>
  );
}
