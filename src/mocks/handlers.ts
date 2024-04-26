import { HttpResponse, http } from 'msw';
import productListMock from './responseMocks/productListMock.json';

export const handlers = [
  http.get('https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products', () => {
    return HttpResponse.json(productListMock);
  })
];
