import type { Meta, StoryObj } from '@storybook/react';
import { Dashboard } from './Dashboard';
import { ProductListProvider } from '../../contexts/ProductListContext/ProductListContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { handlers } from '../../mocks/handlers';
import { HttpResponse, delay, http } from 'msw';

type Story = StoryObj<typeof Meta>;

/**
 * Meta: the main component to be rendered. I.e.: Dashboard
 * must be default export
 */
const Meta: Meta<typeof Dashboard> = {
  title: 'Pages/Dashboard',
  component: Dashboard,
  /**
   * a function that will take place over the component itself.
   */
  decorators: (Story) => (
    <QueryClientProvider
      client={
        new QueryClient({
          defaultOptions: {
            queries: {
              retry: 0
            }
          }
        })
      }
    >
      <ProductListProvider>
        <Story />
      </ProductListProvider>
    </QueryClientProvider>
  )
};

/**
 * Each export will be a state for the meta component
 */
export const Default: Story = {
  parameters: {
    msw: {
      handlers
    }
  }
};

export const Loading: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get(
          'https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products',
          async () => {
            await delay('infinite');
          }
        )
      ]
    }
  }
};

export const Error: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get(
          'https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products',
          () => {
            return new HttpResponse(null, { status: 500 });
          }
        )
      ]
    }
  }
};
export const Empty: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get(
          'https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products',
          () => {
            return HttpResponse.json({ products: [] });
          }
        )
      ]
    }
  }
};

export default Meta;
