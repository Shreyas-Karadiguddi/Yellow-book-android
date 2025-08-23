import axios from 'axios';
import { useMutation, useQuery } from 'react-query';
import { API_URL } from '../config';
import { API } from '../App';

export const useGetCustomers = (page, pageSize, filter) => {
  return useQuery({
    queryKey: ['customers', page, pageSize, filter],
    queryFn: () =>
      axios
        .get(
          `${API.URL}/customers/getcustomers/${page}/${pageSize}${
            filter ? '/' + filter : ''
          }`,
        )
        .then(res => res.data),
    refetchOnWindowFocus: false,
    enabled: false,
  });
};

export const useCreateCustomer = () => {
  return useMutation({
    mutationKey: 'createCustomer',
    mutationFn: createCustomer =>
      axios
        .post(`${API.URL}/customers/createcustomer`, createCustomer)
        .then(res => res.data),
  });
};

export const useUpdateCustomer = () => {
  return useMutation({
    mutationKey: 'updateCustomer',
    mutationFn: updateCustomer =>
      axios
        .post(`${API.URL}/customers/updatecustomer`, updateCustomer)
        .then(res => res.data),
  });
};

export const useDeleteCustomer = () => {
  return useMutation({
    mutationKey: 'deleteCustomer',
    mutationFn: customerId =>
      axios
        .delete(`${API.URL}/customers/deletecustomer/${customerId}`)
        .then(res => res),
  });
};

export const useAssignCustomer = () => {
  return useMutation({
    mutationKey: 'assignCustomer',
    mutationFn: assignCustomer =>
      axios
        .post(`${API.URL}/customers/assigncustomer`, assignCustomer)
        .then(res => res.data),
  });
};
