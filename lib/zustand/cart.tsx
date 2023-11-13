import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface CartStore {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
}

export const useCartStore = create<CartStore>((set) => ({
  cartItems: [],
  addToCart: (item) =>
    set((state) => {
      const existingItem = state.cartItems.find((i) => i.id === item.id);

      if (existingItem) {
        const updatedCartItems = state.cartItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
        );
        AsyncStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
        return { cartItems: updatedCartItems };
      } else {
        const updatedCartItems = [...state.cartItems, item];
        AsyncStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
        return { cartItems: updatedCartItems };
      }
    }),
  removeFromCart: (id) =>
    set((state) => {
      const updatedCartItems = state.cartItems.filter((item) => item.id !== id);
      AsyncStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
      return { cartItems: updatedCartItems };
    }),
}));
