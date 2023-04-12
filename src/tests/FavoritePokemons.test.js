import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import FavoritePokemons from '../pages/FavoritePokemons';
import App from '../App';

describe('Testa o componente Favorite Pokemons', () => {
  it('Teste se é exibida na tela a mensagem No favorite pokemon found', () => {
    renderWithRouter(<FavoritePokemons />);
    const notFound = screen.getByText(/no favorite pokemon found/i);
    expect(notFound).toBeInTheDocument();
  });
  it('Teste se são exibidos todos os cards de pokémons favoritados', () => {
    renderWithRouter(<App />);

    const moreDetails = screen.getByRole('link', {
      name: 'More details',
    });
    userEvent.click(moreDetails);

    const favorited = screen.getByRole('checkbox', {
      name: 'Pokémon favoritado?',
    });
    userEvent.click(favorited);

    const favoritePokemons = screen.getByRole('link', {
      name: 'Favorite Pokémons',
    });
    userEvent.click(favoritePokemons);
    const favoritePokemon = screen.getByRole('link', {
      name: 'More details',
    });
    expect(favoritePokemon).toBeInTheDocument();
  });
});
