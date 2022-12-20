import axios from 'axios';

const API_URL = 'https://dummyjson.com/products';

const fetchPayment = async (id: number) => {
  const response = await axios.get(API_URL + `/${id}`);
  return response.data;
};

const paymentService = {fetchPayment};
export default paymentService;
