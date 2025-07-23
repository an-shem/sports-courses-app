import Container from '@/components/Container/Container';
import Link from 'next/link';

export default function SportsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="py-20">
      <Container>
        <h1 className="text-3xl text-center font-bold">Курсы по видам спорта</h1>
        <nav className="pb-1 pt-5 w-fit mx-auto">
          <ul className="flex gap-5 text-accent-blue">
            <li>
              <Link href="/sports/football" className="hover:text-accent-yellow">
                Футбол
              </Link>
            </li>
            <li>
              <Link href="/sports/tennis" className="hover:text-accent-yellow">
                Теннис
              </Link>
            </li>
            <li>
              <Link href="/sports/swimming" className="hover:text-accent-yellow">
                Плавание
              </Link>
            </li>
          </ul>
        </nav>
        <section>{children}</section>
      </Container>
    </div>
  );
}
