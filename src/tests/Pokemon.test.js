import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Teste o componente <Pokemon.js />', () => {
  const moreDetail = 'More details';
  it(
    'Teste se é renderizado um card com as informações de determinado pokémon',
    () => {
      renderWithRouter(<App />);

      const moreDetails = screen.getByRole('link', {
        name: moreDetail,
      });
      userEvent.click(moreDetails);

      const headingPokedex = screen.getByRole('heading', {
        name: 'Pikachu Details',
        level: 2,
      });
      expect(headingPokedex).toBeInTheDocument();

      const pokemonType = screen.getByTestId('pokemon-type');
      expect(pokemonType).toContainHTML('<p data-testid="pokemon-type">Electric</p>');

      const pokemonWeight = screen.getByTestId('pokemon-weight');
      expect(pokemonWeight).toBeInTheDocument();
      expect(pokemonWeight)
        .toContainHTML('<p data-testid="pokemon-weight">Average weight: 6.0 kg</p>');

      const pokemonImg = screen.getAllByRole('img')[0];
      expect(pokemonImg).toHaveAttribute('alt', 'Pikachu sprite');
      expect(pokemonImg).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
    },
  );
  it(
    'Teste se o card do pokémon indicado na Pokédex contém link de navegação de detalhes',
    () => {
      renderWithRouter(<App />);

      const moreDetails = screen.getByRole('link', {
        name: moreDetail,
      });
      expect(moreDetails).toBeInTheDocument();
    },
  );
  it(
    'Teste se é feito o redirecionamento da aplicação para a página de detalhes',
    () => {
      renderWithRouter(<App />);

      const moreDetails = screen.getByRole('link', {
        name: moreDetail,
      });
      expect(moreDetails).toBeInTheDocument();
      userEvent.click(moreDetails);
    },
  );
  it(
    'Teste se a URL exibida no navegador muda para /pokemon/<id>',
    () => {
      const { history } = renderWithRouter(<App />);

      const moreDetails = screen.getByRole('link', {
        name: moreDetail,
      });
      userEvent.click(moreDetails);
      const { pathname } = history.location;
      expect(pathname).toBe('/pokemons/25');
    },
  );
  it(
    'Teste se existe um ícone de estrela nos pokémons favoritados',
    () => {
      renderWithRouter(<App />);

      const moreDetails = screen.getByRole('link', {
        name: moreDetail,
      });
      userEvent.click(moreDetails);
      const favorited = screen.getByRole('checkbox', {
        name: 'Pokémon favoritado?',
      });
      userEvent.click(favorited);

      const favoritePokemon = screen.getAllByRole('img')[1];
      expect(favoritePokemon).toHaveAttribute('alt', 'Pikachu is marked as favorite');
      expect(favoritePokemon).toHaveAttribute('src', '/star-icon.svg');
    },
  );
});
