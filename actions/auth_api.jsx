import axios from 'axios';
import { useMutation } from 'react-query';
import { API_URL } from '../config';
import { API } from '../App';

export const useLoginUser = () => {
  return useMutation({
    mutationKey: ['LoginUser'],
    mutationFn: ({ userName, password }) =>
      axios
        .post(`${API.URL}/users/login`, {
          userName,
          password,
        })
        .then(response => response.data),
  });
};
