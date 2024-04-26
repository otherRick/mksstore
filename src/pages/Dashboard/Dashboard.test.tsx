import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import * as stories from './Dashboard.stories';
import { server } from '../../mocks/server';

const { Loading, Error, Empty, Success } = composeStories(stories);

test('loading', () => {
  server.use(...Loading.parameters.msw.handlers);

  render(<Loading />);

  const loadingText = screen.getByText(/Loading products.../i);

  expect(loadingText).toBeInTheDocument();
});

test('error', async () => {
  server.use(...Error.parameters.msw.handlers);

  render(<Error />);

  const foundText = await screen.findByText(
    /Error fetching products: Request failed with status code 500/i
  );

  expect(foundText).toBeInTheDocument();
});

test('should render empty screen', async () => {
  server.use(...Empty.parameters.msw.handlers);

  render(<Empty />);

  const foundText = await screen.findByText(/error fetching data/i);

  expect(foundText).toBeInTheDocument();
});

test('should render success screen', async () => {
  server.use(...Success.parameters.msw.handlers);

  render(<Success />);

  const foundText = await screen.findByText(
    /iPad é uma linha de tablets projetada, desenvolvida e comercializada pela Apple, que funciona com o sistema operacional móvel iOS e iPadOS./i
  );

  expect(foundText).toBeInTheDocument();
});
