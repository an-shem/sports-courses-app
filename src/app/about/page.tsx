import Container from '@/components/Container/Container';
import React from 'react';

export default function page() {
  return (
    <div className="py-20">
      <Container>
        <h2 className="text-3xl font-bold text-center">О проекте</h2>
        <p className="mt-4">Платформа для онлайн-обучения различным видам спорта.</p>
        <p className="mt-2">Наша миссия — сделать спорт доступным каждому, независимо от уровня подготовки.</p>
        <p className="mt-2">
          Цель проекта — предоставить качественные курсы от опытных тренеров, гибкий график занятий и общение с
          единомышленниками.
        </p>
      </Container>
    </div>
  );
}
