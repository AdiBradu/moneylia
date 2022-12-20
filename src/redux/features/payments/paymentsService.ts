import axios from 'axios';

const API_URL = 'https://dummyjson.com/products';

const fetchPayments = async () => {
  const response = await axios.get(API_URL);
  return response.data.products;
};

const paymentsService = {fetchPayments};
export default paymentsService;
