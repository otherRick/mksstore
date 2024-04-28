import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Layout } from './Layout';

test('redirects to /dashboard when location is /', async () => {
  render(
    <Router>
      <Layout />
    </Router>
  );

  await waitFor(() => {
    expect(window.location.pathname).toBe('/dashboard');
  });
});

test('renders Dashboard link', () => {
  render(
    <Router>
      <Layout />
    </Router>
  );

  const dashboardLink = screen.getByRole('link');

  expect(dashboardLink).toBeInTheDocument();
});
