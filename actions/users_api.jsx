import axios from 'axios';
import { useQuery, useMutation } from 'react-query';
import { API_URL } from '../config';

export const useGetAllUsers = () => {
  return useQuery({
    queryKey: ['GetAllUsers'],
    queryFn: () =>
      axios.get(`${API_URL}/users/getusers`).then(response => response.data),
    refetchOnWindowFocus: false,
  });
};

export const useCreateUser = () => {
  return useMutation({
    mutationKey: ['CreateUser'],
    mutationFn: newUser =>
      axios.post(`${API_URL}/users/createuser`, newUser).then(res => res.data),
  });
};
