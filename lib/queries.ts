import { useQuery } from '@tanstack/react-query';

import axios from 'axios';
import { ProductProps } from '../components/ProductCard';

const options = {
  method: 'GET',
  url: 'https://asos2.p.rapidapi.com/products/v2/list',
  params: {
    store: 'US',
    offset: '0',
    categoryId: '4209',
    limit: '5',
    country: 'US',
    sort: 'freshness',
    currency: 'USD',
    sizeSchema: 'US',
    lang: 'en-US',
  },
  headers: {
    'X-RapidAPI-Key': 'e91e1b5272msh83bedc2f51c314fp188ccbjsn5d3bfe03e985',
    'X-RapidAPI-Host': 'asos2.p.rapidapi.com',
  },
};

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
