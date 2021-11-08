import userEvent from '@testing-library/user-event';
import React from 'react';
import { MemoryRouter, Router } from 'react-router';
import { createMemoryHistory } from 'history';
import App from '../App';

const { render, screen } = require('@testing-library/react');

describe('Requisto 6', () => {
  it('Teste se é renderizado um card com as informações de determinado pokémon.', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    const name = screen.getByTestId('pokemon-name');
    const type = screen.getByTestId('pokemon-type');
    const weight = screen.getByTestId('pokemon-weight');

    expect(name).toBeInTheDocument();
    expect(type).toBeInTheDocument();
    expect(weight).toBeInTheDocument();

    const pikachu = screen.getByText('Pikachu');
    const electric = 'Electric';
    const Average = screen.getByText(/Average weight/i);
    const WeightPikachu = screen.getByText(/6.0/i);
    const kg = screen.getByText(/kg/i);

    expect(pikachu).toBeInTheDocument();
    expect(electric).toBe(type.innerHTML);
    expect(Average).toBeInTheDocument();
    expect(WeightPikachu).toBeInTheDocument();
    expect(kg).toBeInTheDocument();

    const imgPikachuSprite = screen.getByAltText(/Pikachu sprite/i);
    const srcPikachuSprite = 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png';
    expect(imgPikachuSprite.src).toBe(srcPikachuSprite);
  });
  it('O card do Pokémon indicado na Pokédex contém um link de navegação.', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    const moreDeteail = screen.getByRole('link', { name: /More details/i });
    const URL = 'http://localhost/pokemons/25';
    expect(moreDeteail.href).toBe(URL);
  });

  it('Ao clicar no link de navegação do Pokémon, é feito o redirecionamento', () => {
    const history = createMemoryHistory();
    render(
      <Router history={ history }>
        <App />
      </Router>,
    );
    const moreDeteail = screen.getByRole('link', { name: /More details/i });
    userEvent.click(moreDeteail);
    const URL = '/pokemons/25';
    const ATUAL = history.location.pathname;
    expect(ATUAL).toBe(URL);
  });
  it('Teste se existe um ícone de estrela nos Pokémons favoritados.', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    const moreDeteail = screen.getByRole('link', { name: /More details/i });
    userEvent.click(moreDeteail);
    const LabelFavorito = screen.getByLabelText(/Pokémon favoritado/i);
    userEvent.click(LabelFavorito);
    const imgAltEstrela = screen.getByAltText(/Pikachu is marked as favorite/i);
    const srcEstrela = 'http://localhost/star-icon.svg';
    expect(imgAltEstrela.src).toBe(srcEstrela);
  });
});
