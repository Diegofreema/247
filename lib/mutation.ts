import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { User } from './types';
const api = process.env.EXPO_PUBLIC_PHP_API_KEY;

export const useNewUser = () => {
  return useMutation({
    mutationKey: ['user'],
    mutationFn: async (values: User) => {
      console.log(values);
      const response = await axios.post(
        `${api}/newuser.php?name=${values.name}&email=${values.email}&password=${values.password}&phone=${values.phoneNumber}&address=${values.address}&statename=${values.state}&communityname=${values.location}`
      );
      return response.data;
    },
  });
};
