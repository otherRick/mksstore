import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '../components/Layout/Layout';
import { Dashboard } from '../pages/Dashboard/Dashboard';
import { ProductListProvider } from '../contexts/ProductListContext/ProductListContext';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/dashboard',
        element: (
          <ProductListProvider>
            <Dashboard />
          </ProductListProvider>
        )
      }
    ]
  }
]);
