import type { Meta, StoryObj } from '@storybook/react';
import { ProductListProvider } from '../../contexts/ProductListContext/ProductListContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { handlers } from '../../mocks/handlers';
import { CartDrawer } from './CartDrawer';
import { CartProvider } from '../../contexts/CartContext/CartContext';
import productListMock from '../../mocks/responseMocks/productListMock.json';

type Story = StoryObj<typeof Meta>;

const Meta: Meta<typeof CartDrawer> = {
  title: 'Components/CartDrawer',
  component: CartDrawer,
  decorators: (Story) => (
    <QueryClientProvider client={new QueryClient({ defaultOptions: { queries: { retry: 0 } } })}>
      <ProductListProvider>
        <CartProvider cartInitialValue={productListMock.products}>
          <Story />
        </CartProvider>
      </ProductListProvider>
    </QueryClientProvider>
  )
};

export const Default: Story = {
  args: {
    isOpen: true
  },
  parameters: {
    msw: {
      handlers
    }
  }
};

export default Meta;
