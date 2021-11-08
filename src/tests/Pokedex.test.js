import React from 'react';
import { MemoryRouter } from 'react-router';
import userEvent from '@testing-library/user-event';
import App from '../App';

const { render, screen } = require('@testing-library/react');

describe('Requisto 5', () => {
  it('No favorite pokemon found caso não tiver pokémons favoritos.', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    const Encountered = /Encountered pokémons/i;
    const titlePokedex = screen.getByRole('heading', { level: 2, name: Encountered });
    expect(titlePokedex).toBeInTheDocument();
  });
  it('exibido o próximo Pokémon quando o botão Próximo pokémon é clicado.', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    const nextButton = screen.getByRole('button', { name: /Próximo pokémon/i });
    userEvent.click(nextButton);
    const charmander = screen.getByText('Charmander');
    expect(charmander).toBeInTheDocument();
    userEvent.click(nextButton);
    const caterpie = screen.getByText('Caterpie');
    expect(caterpie).toBeInTheDocument();
    userEvent.click(nextButton);
    userEvent.click(nextButton);
    userEvent.click(nextButton);
    userEvent.click(nextButton);
    userEvent.click(nextButton);
    userEvent.click(nextButton);
    userEvent.click(nextButton);
    const pikachu = screen.getByText('Pikachu');
    expect(pikachu).toBeInTheDocument();
  });
  it('Teste se a Pokédex tem os botões de filtro', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    const filterButtonList = screen.getAllByTestId('pokemon-type-button');
    const BUTTON_LIST_LENGTH = 7;
    const allButton = screen.getByRole('button', { name: /All/i });
    const electricButton = screen.getByRole('button', { name: /Electric/i });
    const fireButton = screen.getByRole('button', { name: /Fire/i });
    const bugButton = screen.getByRole('button', { name: /Bug/i });
    const poisonButton = screen.getByRole('button', { name: /Poison/i });
    const psychicButton = screen.getByRole('button', { name: /Psychic/i });
    const normalButton = screen.getByRole('button', { name: /Normal/i });
    const dragonButton = screen.getByRole('button', { name: /Dragon/i });
    expect(filterButtonList).toHaveLength(BUTTON_LIST_LENGTH);
    expect(allButton).toBeInTheDocument();
    expect(electricButton).toBeInTheDocument();
    expect(fireButton).toBeInTheDocument();
    expect(bugButton).toBeInTheDocument();
    expect(poisonButton).toBeInTheDocument();
    expect(psychicButton).toBeInTheDocument();
    expect(normalButton).toBeInTheDocument();
    expect(dragonButton).toBeInTheDocument();
  });
  it('A partir da seleção de um botão de tipo só pode pokémons daquele tipo', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    const fireButton = screen.getByRole('button', { name: /Fire/i });
    userEvent.click(fireButton);
    const chamader = screen.getByText('Charmander');
    expect(chamader).toBeInTheDocument();
  });

  it('Teste se a Pokédex contém um botão para resetar o filtro', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    const fireButton = screen.getByRole('button', { name: /Fire/i });
    userEvent.click(fireButton);
    const chamader = screen.getByText('Charmander');
    expect(chamader).toBeInTheDocument();
    const allButton = screen.getByRole('button', { name: /All/i });
    userEvent.click(allButton);
    const pikachu = screen.getByText('Pikachu');
    expect(pikachu).toBeInTheDocument();
  });
});
