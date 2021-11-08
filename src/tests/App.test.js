import React from 'react';
import { MemoryRouter, Router } from 'react-router';
import { createMemoryHistory } from 'history';
import userEvent from '@testing-library/user-event';
import App from '../App';

const { render, screen } = require('@testing-library/react');

describe('Requisto 1', () => {
  it('O primeiro link deve possuir o texto Home', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    const homeLink = screen.getByText(/home/i);
    expect(homeLink).toBeInTheDocument();
  });
  it('O segundo link deve possuir o texto About', () => {
    const history = createMemoryHistory();
    render(
      <Router history={ history }>
        <App />
      </Router>,
    );
    const aboutLink = screen.getByRole('link', { name: /About/i });
    expect(aboutLink).toBeInTheDocument();
    userEvent.click(aboutLink);
    const pathAbout = history.location.pathname;
    const ABOUT = '/about';
    expect(pathAbout).toBe(ABOUT);
  });
  it('O terceiro link deve possuir o texto Favorite Pokémons', () => {
    const history = createMemoryHistory();
    render(
      <Router history={ history }>
        <App />
      </Router>,
    );
    const favoritePokemonLink = screen.getByRole('link', { name: /Favorite Pokémons/i });
    expect(favoritePokemonLink).toBeInTheDocument();
    userEvent.click(favoritePokemonLink);
    const pathFavorite = history.location.pathname;
    const FAVORITE = '/favorites';
    expect(pathFavorite).toBe(FAVORITE);
  });
  it('ao entrar em uma URL desconhecida é redirecionada para a página Not Found ', () => {
    const history = createMemoryHistory();
    render(
      <Router history={ history }>
        <App />
      </Router>,
    );
    history.push(' * ');

    const paginaNaoEncontrada = screen.getByText(/Page requested not found/i);
    expect(paginaNaoEncontrada).toBeInTheDocument();
  });
});
