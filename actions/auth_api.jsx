import axios from 'axios';
import { useMutation } from 'react-query';
import { API_URL } from '../config';

export const useLoginUser = () => {
  return useMutation({
    mutationKey: ['LoginUser'],
    mutationFn: ({ userName, password }) =>
      axios
        .post(`${API_URL}/users/login`, {
          userName,
          password,
        })
        .then(response => response.data),
  });
};
