import Container from '@/components/Container/Container';

export default function HomePage() {
  return (
    <div className="size-full py-20">
      <Container>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold">Добро пожаловать на сайт спортивных курсов!</h1>
          <p className="mt-4">
            Наша платформа предлагает онлайн-обучение различным видам спорта для любого уровня подготовленности.
          </p>
          <p className="mt-2">
            Выберите курс или перейдите в раздел
            <a href="/sports" className="text-accent-blue hover:text-accent-yellow font-bold no-underline ml-2.5">
              {'<< Курсы по спорту >>'}
            </a>
            .
          </p>
        </div>
      </Container>
    </div>
  );
}
