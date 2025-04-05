import { useContext } from 'react';
import { CartContext } from '@/contexts/CartContext';
import { useTranslation } from '@/hooks/useTranslation';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Minus, Plus, Heart as FavoriteIcon, X } from 'lucide-react';

export function ShoppingCart() {
  const { 
    cartItems, 
    isCartOpen, 
    closeCart, 
    updateQuantity, 
    removeFromCart, 
    cartTotal 
  } = useContext(CartContext);
  const { t, getLocalizedText } = useTranslation();

  return (
    <Sheet open={isCartOpen} onOpenChange={closeCart}>
      <SheetContent className="w-full sm:max-w-md pr-0 flex flex-col">
        <SheetHeader className="px-4 sm:px-6">
          <SheetTitle>{getLocalizedText('cart.title')}</SheetTitle>
        </SheetHeader>
        
        <div className="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
          {cartItems.length === 0 ? (
            <div className="text-center py-8">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
                <FavoriteIcon className="h-6 w-6 text-pink-400" />
              </div>
              <h3 className="mt-2 text-lg font-medium text-gray-900 mb-1 dark:text-white">
                {getLocalizedText('cart.empty')}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {getLocalizedText('cart.emptyMessage')}
              </p>
              <Button 
                onClick={closeCart}
                className="mt-4"
              >
                {getLocalizedText('cart.continueShopping')}
              </Button>
            </div>
          ) : (
            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
              {cartItems.map((item) => (
                <li key={item.id} className="py-6 flex">
                  <div className="flex-shrink-0 w-24 h-24 overflow-hidden rounded-md">
                    <img 
                      src={item.foodItem.image} 
                      alt={t(item.foodItem.name)} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="ml-4 flex-1 flex flex-col">
                    <div>
                      <div className="flex justify-between text-base font-medium text-gray-900 dark:text-white">
                        <h3>{t(item.foodItem.name)}</h3>
                        <p className="ml-4">${(item.foodItem.price * item.quantity).toFixed(2)}</p>
                      </div>
                      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{item.foodItem.origin}</p>
                    </div>
                    <div className="flex-1 flex items-end justify-between text-sm">
                      <div className="flex items-center">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="text-gray-400 hover:text-gray-500 bg-gray-100 w-6 h-6 rounded flex items-center justify-center dark:bg-gray-700 dark:hover:text-white"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="mx-2 w-8 text-center font-medium">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="text-gray-400 hover:text-gray-500 bg-gray-100 w-6 h-6 rounded flex items-center justify-center dark:bg-gray-700 dark:hover:text-white"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                      <div className="flex">
                        <button 
                          onClick={() => removeFromCart(item.id)} 
                          className="font-medium text-red-500 hover:text-red-700"
                        >
                          {getLocalizedText('cart.remove')}
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="border-t border-gray-200 py-6 px-4 sm:px-6 dark:border-gray-700">
            <div className="flex justify-between text-base font-medium text-gray-900 dark:text-white">
              <p>{getLocalizedText('cart.subtotal')}</p>
              <p>${cartTotal().toFixed(2)}</p>
            </div>
            <p className="mt-0.5 text-sm text-gray-500 dark:text-gray-400">
              {getLocalizedText('cart.shipping')}
            </p>
            <div className="mt-6">
              <Button className="w-full">
                {getLocalizedText('button.checkout')}
              </Button>
            </div>
            <div className="mt-6 flex justify-center text-sm text-center text-gray-500">
              <p>
                {getLocalizedText('button.or')}{' '}
                <button 
                  onClick={closeCart} 
                  className="text-primary-500 font-medium hover:text-primary-600 ml-1"
                >
                  {getLocalizedText('cart.continueShopping')}
                  <span aria-hidden="true"> &rarr;</span>
                </button>
              </p>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
