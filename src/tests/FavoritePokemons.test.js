import React from 'react';
import { MemoryRouter } from 'react-router'; //! Router
/* import { createMemoryHistory } from 'history';
import userEvent from '@testing-library/user-event'; */
import userEvent from '@testing-library/user-event';
import { FavoritePokemons } from '../components';
import App from '../App';

const { render, screen } = require('@testing-library/react');

describe('Requisto 3', () => {
  it(' No favorite pokemon found caso não tiver pokémons favoritos.', () => {
    render(
      <MemoryRouter>
        <FavoritePokemons />
      </MemoryRouter>,
    );
    const notFound = screen.getByText(/No favorite pokemon found/i);
    expect(notFound).toBeInTheDocument();
  });
  it('Teste se é exibido todos os cards de pokémons favoritados.', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    const linkCard = screen.getByRole('link', { name: /More details/i });
    userEvent.click(linkCard);
    const labelCard = screen.getByLabelText(/Pokémon favoritado?/i);
    userEvent.click(labelCard);
    const linkFavorite = screen.getByRole('link', { name: /Favorite Pokémons/i });
    userEvent.click(linkFavorite);
    const notFound = screen.queryByText(/No favorite pokemon found/i);
    expect(notFound).not.toBeInTheDocument();
  });
});
