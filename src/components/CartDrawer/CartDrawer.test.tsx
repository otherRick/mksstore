import { composeStories } from '@storybook/react';
import * as stories from './CartDrawer.stories';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';

const { Default } = composeStories(stories);

describe('CartDrawer', () => {
  test('should add a quantity correctly', () => {
    render(<Default />);

    const plusButton = screen.getAllByRole('button', { name: /\+/i });
    const quantityText = screen.getAllByText('1');
    let totalText = screen.getByText(/r\$29\.900/i);

    expect(totalText).toBeInTheDocument();

    fireEvent.click(plusButton[0]);

    totalText = screen.getByText(/r\$30\.500/i);

    expect(quantityText[0]).toHaveTextContent('2');
    expect(totalText).toBeInTheDocument();
  });

  test('should subtract a quantity correctly', async () => {
    render(<Default />);

    const subtractButtons = screen.getAllByRole('button', { name: /-/i });

    fireEvent.click(subtractButtons[0]);
    fireEvent.click(subtractButtons[0]);

    await waitFor(() => {
      const quantityText = screen.queryByText(/Headset Cloud Stinger/i);
      expect(quantityText).not.toBeInTheDocument();
    });

    const totalText = screen.getByText(/r\$29\.300/i);
    expect(totalText).toBeInTheDocument();
  });

  test('should remove a product correctly', async () => {
    render(<Default />);

    const removeProductButton = screen.getAllByRole('button', { name: /X/i });

    fireEvent.click(removeProductButton[1]);

    await waitFor(() => {
      const quantityText = screen.queryByText(/Headset Cloud Stinger/i);
      expect(quantityText).not.toBeInTheDocument();
    });

    const totalText = screen.getByText(/r\$29\.300/i);
    expect(totalText).toBeInTheDocument();
  });
});
