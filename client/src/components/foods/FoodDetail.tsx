import { useContext } from 'react';
import { FoodItemClient } from '@shared/schema';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/hooks/useTranslation';
import { CartContext } from '@/contexts/CartContext';
import { ShoppingCart, X } from 'lucide-react';

interface FoodDetailProps {
  item: FoodItemClient | null;
  isOpen: boolean;
  onClose: () => void;
}

export function FoodDetail({ item, isOpen, onClose }: FoodDetailProps) {
  const { t, getLocalizedText } = useTranslation();
  const { addToCart } = useContext(CartContext);

  if (!item) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl p-0 overflow-hidden">
        <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
          <X className="h-5 w-5" />
          <span className="sr-only">Close</span>
        </DialogClose>
        
        <div className="p-6">
          <div className="md:flex gap-6">
            {/* Image section */}
            <div className="md:w-2/5 mb-4 md:mb-0">
              <div className="relative rounded-lg overflow-hidden h-72">
                <img 
                  src={item.image} 
                  alt={t(item.name)} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Details section */}
            <div className="md:w-3/5">
              <DialogTitle className="text-2xl font-semibold mb-0">
                {t(item.name)}
              </DialogTitle>
              <div className="flex items-center mt-1 mb-3">
                <p className="text-gray-600 dark:text-gray-300">{item.origin}</p>
                <span className="mx-2 text-gray-300">•</span>
                <div className="flex space-x-1">
                  {item.allergens.map(allergen => (
                    <span 
                      key={allergen}
                      className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded dark:bg-gray-700 dark:text-gray-300"
                    >
                      {allergen}
                    </span>
                  ))}
                </div>
              </div>
              <DialogDescription className="text-gray-600 mb-4 dark:text-gray-300">
                {t(item.description)}
              </DialogDescription>
              
              <div className="flex items-center justify-between mb-5">
                <div className="text-2xl font-medium text-orange-500">
                  ${item.price.toFixed(2)}
                </div>
                <Button 
                  onClick={() => {
                    addToCart(item);
                    onClose();
                  }}
                  className="bg-primary-500 hover:bg-primary-600 flex items-center"
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  {getLocalizedText('button.addToCart')}
                </Button>
              </div>
              
              {/* Nutrition Facts */}
              <div className="bg-gray-50 p-4 rounded-lg dark:bg-gray-700">
                <h4 className="font-semibold mb-3">
                  {getLocalizedText('nutrition.facts')}
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="mb-2">
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {getLocalizedText('food.calories')}
                      </span>
                      <div className="flex justify-between">
                        <span className="font-mono font-medium text-lg">{item.nutrition.calories}</span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">kcal</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-600">
                        <div 
                          className="bg-primary-500 h-1.5 rounded-full" 
                          style={{ width: `${Math.min(item.nutrition.calories / 10, 100)}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="mb-2">
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {getLocalizedText('food.protein')}
                      </span>
                      <div className="flex justify-between">
                        <span className="font-mono font-medium text-lg">{item.nutrition.protein}g</span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {getLocalizedText('nutrition.per100g')}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-600">
                        <div 
                          className="bg-blue-500 h-1.5 rounded-full" 
                          style={{ width: `${Math.min(item.nutrition.protein * 5, 100)}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="mb-2">
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {getLocalizedText('food.carbs')}
                      </span>
                      <div className="flex justify-between">
                        <span className="font-mono font-medium text-lg">{item.nutrition.carbs}g</span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {getLocalizedText('nutrition.per100g')}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-600">
                        <div 
                          className="bg-orange-500 h-1.5 rounded-full" 
                          style={{ width: `${Math.min(item.nutrition.carbs * 1.5, 100)}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="mb-2">
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {getLocalizedText('food.fat')}
                      </span>
                      <div className="flex justify-between">
                        <span className="font-mono font-medium text-lg">{item.nutrition.fat}g</span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {getLocalizedText('nutrition.per100g')}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-600">
                        <div 
                          className="bg-pink-500 h-1.5 rounded-full" 
                          style={{ width: `${Math.min(item.nutrition.fat * 3, 100)}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="mb-2">
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {getLocalizedText('food.fiber')}
                      </span>
                      <div className="flex justify-between">
                        <span className="font-mono font-medium text-lg">{item.nutrition.fiber}g</span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {getLocalizedText('nutrition.per100g')}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-600">
                        <div 
                          className="bg-purple-500 h-1.5 rounded-full" 
                          style={{ width: `${Math.min(item.nutrition.fiber * 8, 100)}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    {/* Vitamins */}
                    <div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {getLocalizedText('nutrition.vitamins')}
                      </span>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {Object.entries(item.nutrition.vitamins).map(([key, value]) => (
                          <span 
                            key={key}
                            className="bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded flex items-center gap-1 dark:bg-gray-600 dark:text-gray-200"
                          >
                            <span>{key}</span>
                            <span>{value}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
