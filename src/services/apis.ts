import axios from 'axios';

const baseURL = 'https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products';

interface iParams {
  page: number;
  rows: number;
  sortBy: string;
  orderBy: string;
}

export const getProductList = async (page: number = 1, rowa: number = 15) => {
  // try {
  const params: iParams = {
    page: 0,
    rows: 0,
    sortBy: '',
    orderBy: ''
  };

  params.page = page;
  params.rows = rowa;
  params.sortBy = 'id';
  params.orderBy = 'DESC';

  const response = await axios.get(baseURL, { params });

  return response.data?.products;
  // } catch (error) {
  //   // return error
  // }
};
