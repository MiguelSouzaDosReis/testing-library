import React from 'react';
import { MemoryRouter } from 'react-router';
/* import userEvent from '@testing-library/user-event'; */
import { NotFound } from '../components';
/* import App from '../App'; */

const { render, screen } = require('@testing-library/react');

describe('Requisto 4', () => {
  it(' Teste se página contém um heading h2 com o texto Page requested not found', () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>,
    );
    const ERROR_MSG = /Page requested not found/i;
    const notFound = screen.getByRole('heading', { level: 2, name: ERROR_MSG });
    expect(notFound).toBeInTheDocument();
  });
  it('Teste se página mostra a imagem', () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>,
    );
    const img = screen.getByAltText(/Pikachu crying because the page/i);
    const SRC = 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif';
    expect(img.src).toBe(SRC);
  });
});
