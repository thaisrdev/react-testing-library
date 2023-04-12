import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import About from '../pages/About';

describe('Teste se a página contém as informações sobre a Pokédex', () => {
  it('Teste se a página contém um heading h2 com o texto About Pokédex', () => {
    renderWithRouter(<About />);
    const headingPokedex = screen.getByRole('heading', {
      name: 'About Pokédex',
      level: 2,
    });
    expect(headingPokedex).toBeInTheDocument();
  });
  it('Testa o link da imagem da Pokédex', () => {
    renderWithRouter(<About />);
    const imgPokedex = screen.getByRole('img');
    const linkImg = 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png';
    expect(imgPokedex.src).toBe(linkImg);
  });
});
