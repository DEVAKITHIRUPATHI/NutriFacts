import { createContext, useState, useEffect, ReactNode, useContext } from 'react';
import { 
  getCartItems, 
  addToCart as addToCartDB, 
  updateCartItemQuantity, 
  removeFromCart as removeFromCartDB,
  clearCart as clearCartDB,
  getFoodItemById
} from '@/lib/idb';
import type { FoodItemClient } from '@shared/schema';
import { AppContext } from './AppContext';

interface CartItem {
  id: string;
  foodItem: FoodItemClient;
  quantity: number;
}

interface CartContextProps {
  cartItems: CartItem[];
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addToCart: (foodItem: FoodItemClient) => void;
  updateQuantity: (id: string, quantity: number) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  cartTotal: () => number;
}

export const CartContext = createContext<CartContextProps>({
  cartItems: [],
  isCartOpen: false,
  openCart: () => {},
  closeCart: () => {},
  addToCart: () => {},
  updateQuantity: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
  cartTotal: () => 0,
});

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { isLoading } = useContext(AppContext);

  useEffect(() => {
    if (!isLoading) {
      loadCartItems();
    }
  }, [isLoading]);

  const loadCartItems = async () => {
    try {
      const dbCartItems = await getCartItems();
      const cartWithFoodItems: CartItem[] = [];
      
      for (const item of dbCartItems) {
        const foodItem = await getFoodItemById(item.foodId);
        if (foodItem) {
          cartWithFoodItems.push({
            id: item.id,
            foodItem,
            quantity: item.quantity
          });
        }
      }
      
      setCartItems(cartWithFoodItems);
    } catch (error) {
      console.error('Failed to load cart items:', error);
    }
  };

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  const addToCart = async (foodItem: FoodItemClient) => {
    try {
      await addToCartDB(foodItem.id);
      await loadCartItems();
      openCart();
    } catch (error) {
      console.error('Failed to add item to cart:', error);
    }
  };

  const updateQuantity = async (id: string, quantity: number) => {
    if (quantity <= 0) {
      await removeFromCartDB(id);
    } else {
      await updateCartItemQuantity(id, quantity);
    }
    await loadCartItems();
  };

  const removeFromCart = async (id: string) => {
    try {
      await removeFromCartDB(id);
      await loadCartItems();
    } catch (error) {
      console.error('Failed to remove item from cart:', error);
    }
  };

  const clearCart = async () => {
    try {
      await clearCartDB();
      setCartItems([]);
    } catch (error) {
      console.error('Failed to clear cart:', error);
    }
  };

  const cartTotal = () => {
    return cartItems.reduce((total, item) => total + (item.foodItem.price * item.quantity), 0);
  };

  return (
    <CartContext.Provider value={{
      cartItems,
      isCartOpen,
      openCart,
      closeCart,
      addToCart,
      updateQuantity,
      removeFromCart,
      clearCart,
      cartTotal
    }}>
      {children}
    </CartContext.Provider>
  );
};
