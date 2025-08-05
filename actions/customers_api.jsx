import axios from 'axios';
import { useQuery, useMutation } from 'react-query';
import { API_URL } from '../config';

export const useGetAllCustomers = ({ page, pageSize, filter }) => {
  return useQuery({
    queryKey: ['GetAllCustomers'],
    queryFn: () =>
      axios
        .get(`${API_URL}/customers/getcustomers/${page}/${pageSize}/${filter}`)
        .then(response => response.data),
    refetchOnWindowFocus: false,
  });
};

export const useCreateCustomer = () => {
  return useMutation({
    mutationKey: ['CreateCustomer'],
    mutationFn: newCustomer =>
      axios
        .post(`${API_URL}/customers/createcustomer`, newCustomer)
        .then(res => res.data),
  });
};

export const useUpdateCustomer = () => {
  return useMutation({
    mutationKey: ['UpdateCustomer'],
    mutationFn: updateCustomer =>
      axios
        .post(`${API_URL}/customers/updatecustomer`, updateCustomer)
        .then(res => res.data),
  });
};
