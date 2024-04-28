import { render, screen } from '@testing-library/react';
import { Button } from './Button';

test('renders Button with custom text', () => {
  render(<Button text='Click Me' />);

  expect(screen.getByText('Click Me')).toBeInTheDocument();
});

test('renders Button with different type', () => {
  render(<Button text='Buy Now' type='pool' />);

  expect(screen.getByText('Buy Now')).toBeInTheDocument();
  expect(screen.getByRole('button')).toHaveClass('pool');
});

test('renders Button with different color', () => {
  render(<Button text='Submit' color='black' />);

  expect(screen.getByText('Submit')).toBeInTheDocument();
  expect(screen.getByRole('button')).toHaveClass('black');
});

test('renders Button with icon', () => {
  const iconSrc = '/fake/path.svg';
  render(<Button text='Add' icon={iconSrc} />);

  expect(screen.getByText('Add')).toBeInTheDocument();
  expect(screen.getByRole('img')).toHaveAttribute('src', iconSrc);
});
