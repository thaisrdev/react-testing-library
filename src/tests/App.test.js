import React from 'react';
import { screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('Requisito 1 - Teste o componente <App.js />', () => {
  // Testa se o topo da aplicação contém um conjunto fixo de links de navegação

  it('Testa o Link da Home', () => {
    const { history } = renderWithRouter(<App />);
    // O primeiro link deve possuir o texto Home;
    const linkHome = screen.getByRole('link', { name: 'Home' });
    expect(linkHome).toBeInTheDocument();

    // Testa se a aplicação é redirecionada para a página inicial ao clicar no link Home.
    userEvent.click(linkHome);
    const { pathname } = history.location;
    expect(pathname).toBe('/');
  });
  it('Testa o Link do About', () => {
    const { history } = renderWithRouter(<App />);
    // O segundo link deve possuir o texto About;
    const linkAbout = screen.getByRole('link', { name: 'About' });
    expect(linkAbout).toBeInTheDocument();

    // Testa se a aplicação é redirecionada para a página de About ao clicar no link About
    userEvent.click(linkAbout);
    const { pathname } = history.location;
    expect(pathname).toBe('/about');
  });
  it('Testa o Link dos Favorites', () => {
    const { history } = renderWithRouter(<App />);
    // O terceiro link deve possuir o texto Favorite Pokémons.
    const linkFavorite = screen.getByRole('link', { name: 'Favorite Pokémons' });
    expect(linkFavorite).toBeInTheDocument();

    // Testa se a aplicação é redirecionada para a página de Pokémons Favoritados
    userEvent.click(linkFavorite);
    const { pathname } = history.location;
    expect(pathname).toBe('/favorites');
  });
  it(
    'Teste se a página Not Found é renderizada ao entrar em uma URL desconhecida',
    () => {
      const { history } = renderWithRouter(<App />);

      act(() => {
        history.push('/unknownUrl');
      });

      const unknownUrl = screen.getByText(/not found/i);
      expect(unknownUrl).toBeInTheDocument();
    },
  );
});
