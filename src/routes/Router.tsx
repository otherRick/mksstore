import { RouterProvider } from 'react-router-dom';
import { router } from './routes';

export const Router = () => {
  return <RouterProvider router={router} />;
};
