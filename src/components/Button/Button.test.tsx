import { render, screen } from '@testing-library/react';
import { Button } from './Button';

test('renders Button with default props', () => {
  render(<Button />);

  expect(screen.getByText('')).toBeInTheDocument();

  expect(screen.getByRole('button')).toHaveClass('type color textSize text');
});

test('renders Button with custom text', () => {
  render(<Button text='Click Me' />);

  expect(screen.getByText('Click Me')).toBeInTheDocument();
});

test('renders Button with different type', () => {
  render(<Button text='Buy Now' type='pool' />);

  expect(screen.getByText('Buy Now')).toBeInTheDocument();
  expect(screen.getByRole('button')).toHaveClass('type');
});

test('renders Button with different color', () => {
  render(<Button text='Submit' color='black' />);

  expect(screen.getByText('Submit')).toBeInTheDocument();
  expect(screen.getByRole('button')).toHaveClass('color');
});

test('renders Button with different text size', () => {
  render(<Button text='Learn More' textSize='small' />);

  expect(screen.getByText('Learn More')).toBeInTheDocument();
  expect(screen.getByRole('button')).toHaveClass('textSize');
});

test('renders Button with icon', () => {
  const iconSrc = 'path/to/your/icon.svg';
  render(<Button text='Add' icon={iconSrc} />);

  expect(screen.getByText('Add')).toBeInTheDocument();
  expect(screen.getByRole('img')).toHaveAttribute('src', iconSrc);
});
