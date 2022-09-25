import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
// import Pokedex from '../pages/Pokedex';
import App from '../App';

describe('Teste o componente <Pokedex.js />', () => {
  const pokemonTypeButton = 'pokemon-type-button';
  it('Teste se a página contém um heading h2 com o texto Encountered pokémons', () => {
    renderWithRouter(<App />);
    const encounteredPokemons = screen.getByRole('heading', {
      name: 'Encountered pokémons',
      level: 2,
    });
    expect(encounteredPokemons).toBeInTheDocument();
  });
  it('Testa o botão "Próximo pokémon"', () => {
    renderWithRouter(<App />);

    const nextPokemon = screen.getByRole('button', {
      name: 'Próximo pokémon',
    });
    userEvent.click(nextPokemon);
    expect(nextPokemon).toBeInTheDocument();
  });
  it('Teste se é mostrado apenas um pokémon por vez', () => {
    renderWithRouter(<App />);

    const pokemonName = screen.getByTestId('pokemon-name');
    expect(pokemonName).toBeInTheDocument();
  });

  it('Teste se a Pokédex tem botão Electric', () => {
    renderWithRouter(<App />);

    const buttonElectric = screen.getAllByTestId(pokemonTypeButton)[0];
    expect(buttonElectric).toHaveTextContent('Electric');
  });

  it('Teste se a Pokédex tem o botão Fire', () => {
    renderWithRouter(<App />);

    const buttonFire = screen.getAllByTestId(pokemonTypeButton)[1];
    expect(buttonFire).toHaveTextContent('Fire');
  });

  it('Teste se a Pokédex tem o botão Bug', () => {
    renderWithRouter(<App />);

    const buttonBug = screen.getAllByTestId(pokemonTypeButton)[2];
    expect(buttonBug).toHaveTextContent('Bug');
  });

  it('Teste se a Pokédex tem o botão Poison', () => {
    renderWithRouter(<App />);

    const buttonPoison = screen.getAllByTestId(pokemonTypeButton)[3];
    expect(buttonPoison).toHaveTextContent('Poison');
  });

  it('Teste se a Pokédex tem o botão Psychic', () => {
    renderWithRouter(<App />);

    const buttonPsychic = screen.getAllByTestId(pokemonTypeButton)[4];
    expect(buttonPsychic).toHaveTextContent('Psychic');
  });

  it('Teste se a Pokédex tem o botão Normal', () => {
    renderWithRouter(<App />);

    const buttonNormal = screen.getAllByTestId(pokemonTypeButton)[5];
    expect(buttonNormal).toHaveTextContent('Normal');
  });

  it('Teste se a Pokédex tem o botão Dragon', () => {
    renderWithRouter(<App />);

    const buttonDragon = screen.getAllByTestId(pokemonTypeButton)[6];
    expect(buttonDragon).toHaveTextContent('Dragon');
  });

  it('Teste se a Pokédex contém um botão para resetar o filtro:', () => {
    renderWithRouter(<App />);
    const buttonAll = screen.getByRole('button', {
      name: 'All',
    });
    expect(buttonAll).toBeInTheDocument();
    userEvent.click(buttonAll);
  });
});
