import { render, screen } from '@testing-library/react';
import App from './App';

test('', () => {
  render(<App />);

  screen.logTestingPlaygroundURL();

  expect(screen.getByRole('button', { name: /0/i })).toBeInTheDocument();
});
