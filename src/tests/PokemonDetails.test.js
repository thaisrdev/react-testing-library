import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Teste o componente <PokemonDetails.js />', () => {
  const moreDetail = 'More details';
  it(
    'Teste se as informações detalhadas do pokémon selecionado são mostradas na tela',
    () => {
      renderWithRouter(<App />);
      const moreDetails = screen.getByRole('link', {
        name: moreDetail,
      });
      userEvent.click(moreDetails);
      const headingDetails = screen.getByRole('heading', {
        name: 'Pikachu Details',
        level: 2,
      });
      expect(headingDetails).toBeInTheDocument();

      const headingSummary = screen.getByRole('heading', {
        name: 'Summary',
        level: 2,
      });
      expect(headingSummary).toBeInTheDocument();

      const summary = screen.getByText(
        'This intelligent Pokémon roasts hard berries with'
        + ' electricity to make them tender enough to eat.',
      );
      expect(summary).toBeInTheDocument();
    },
  );

  it(
    'Teste se existe na página uma seção com mapas contendo as localizações do pokémon',
    () => {
      renderWithRouter(<App />);
      const moreDetails = screen.getByRole('link', {
        name: moreDetail,
      });
      userEvent.click(moreDetails);
      const headingGame = screen.getByRole('heading', {
        name: 'Game Locations of Pikachu',
        level: 2,
      });
      expect(headingGame).toBeInTheDocument();

      const favorited = screen.getByRole('checkbox', {
        name: 'Pokémon favoritado?',
      });
      expect(favorited).toBeInTheDocument();
      userEvent.click(favorited);

      const locationMap1 = screen.getAllByRole('img')[2];
      expect(locationMap1).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png');
      expect(locationMap1).toHaveAttribute('alt', 'Pikachu location');
      const locationMap2 = screen.getAllByRole('img')[3];
      expect(locationMap2).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/b/bd/Kanto_Celadon_City_Map.png');
      expect(locationMap2).toHaveAttribute('alt', 'Pikachu location');
    },
  );
  it('Teste se o usuário pode favoritar um pokémon através da página de detalhes', () => {
    renderWithRouter(<App />);
    const moreDetails = screen.getByRole('link', {
      name: moreDetail,
    });
    userEvent.click(moreDetails);

    const favorited = screen.getByLabelText('Pokémon favoritado?');
    expect(favorited).toBeInTheDocument();
    userEvent.click(favorited);
  });
});
