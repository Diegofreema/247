import { useQuery } from '@tanstack/react-query';

import axios from 'axios';
import { ProductProps } from '../components/ProductCard';

const api = process.env.EXPO_PUBLIC_PHP_API_KEY;
export const useProducts = (limit: number) => {
  return useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const response = await axios.get(
        `https://fakestoreapi.com/products?limit=${limit}`
      );
      return response.data as ProductProps[];
    },
  });
};
export const useProduct = (id: any) => {
  return useQuery({
    queryKey: ['product', id],
    queryFn: async () => {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );
      return response.data as ProductProps;
    },
  });
};
export const useCommunities = (state: string) => {
  return useQuery({
    queryKey: ['communities', state],
    queryFn: async () => {
      const response = await axios.get(
        `${api}/getcommunities.php?statename=${state}`
      );
      return response.data;
    },
  });
};
export const useStates = () => {
  return useQuery({
    queryKey: ['state'],
    queryFn: async () => {
      const response = await axios.get(`${api}/getstates.php`);
      return response.data;
    },
  });
};
