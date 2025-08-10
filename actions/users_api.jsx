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

export const useUpdateUser = () => {
  return useMutation({
    mutationKey: ['UpdateUser'],
    mutationFn: updateUser =>
      axios
        .post(`${API_URL}/users/updateuser`, updateUser)
        .then(res => res.data),
  });
};

export const resetPasswordByAdmin = () => {
  return useMutation({
    mutationKey: ['ResetPasswordByAdmin'],
    mutationFn: resetPassword =>
      axios
        .post(`${API_URL}/users/resetpassword/admin`, resetPassword)
        .then(res => res.data),
  });
};

export const useGetUserInfo = userId => {
  return useQuery({
    queryKey: ['GetUserInfo'],
    queryFn: () =>
      axios
        .get(`${API_URL}/users/getuserinfo/${userId}`)
        .then(response => response.data),
    refetchOnWindowFocus: false,
    enabled: false,
  });
};
