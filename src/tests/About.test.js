import React from 'react';
import { MemoryRouter } from 'react-router';
import { About } from '../components';

const { render, screen } = require('@testing-library/react');

describe('Requisto 2', () => {
  it('Teste se a página contém as informações sobre a Pokédex.', () => {
    render(
      <MemoryRouter>
        <About />
      </MemoryRouter>,
    );
    const aboutPokedex1 = screen.getByText(/This application simulates a Pokédex/i);
    expect(aboutPokedex1).toBeInTheDocument();
    const aboutPokedex2 = screen.getByText(/One can filter Pokémons by type/i);
    expect(aboutPokedex2).toBeInTheDocument();
  });
  it('Teste se a página contém um heading h2 com o texto About Pokédex.', () => {
    render(
      <MemoryRouter>
        <About />
      </MemoryRouter>,
    );
    const aboutTitle = screen.getByRole('heading', { level: 2, name: 'About Pokédex' });
    expect(aboutTitle).toBeInTheDocument();
  });

  it('Teste se a página contém dois parágrafos com texto sobre a Pokédex.', () => {
    render(
      <MemoryRouter>
        <About />
      </MemoryRouter>,
    );
    const parafo1 = screen.getByText(/This application simulates a Pokédex/i);
    expect(parafo1).toBeInTheDocument();
    const parafo2 = screen.getByText(/One can filter Pokémons by type/i);
    expect(parafo2).toBeInTheDocument();
  });
  it('Teste se a página contém a seguinte imagem de uma Pokédex.', () => {
    render(
      <MemoryRouter>
        <About />
      </MemoryRouter>,
    );
    const img = screen.getByAltText(/Pokédex/i);
    const SRC = 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png';
    expect(img.src).toBe(SRC);
  });
});
