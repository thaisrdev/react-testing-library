import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import NotFound from '../pages/NotFound';

describe('Teste o componente <NotFound.js />', () => {
  it(
    'Teste se a página contém um heading h2 com o texto Page requested not found',
    () => {
      renderWithRouter(<NotFound />);
      const notFound = screen.getByRole('heading', {
        name: 'Page requested not found',
        level: 2,
      });
      expect(notFound).toBeInTheDocument();
    },
  );
  it('Testa o link da imagem de not found', () => {
    renderWithRouter(<NotFound />);

    const notFoundImg = screen.getByRole('img');
    const linkImg = 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif';
    expect(notFoundImg.src).toBe(linkImg);
  });
});
