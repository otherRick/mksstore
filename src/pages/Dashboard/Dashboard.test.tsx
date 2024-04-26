import { render, screen } from '@testing-library/react';
import { Dashboard } from './Dashboard';

test('', () => {
  render(<Dashboard />);

  screen.logTestingPlaygroundURL();

  expect(screen.getByRole('button', { name: /0/i })).toBeInTheDocument();
});
