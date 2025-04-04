import { useContext } from 'react';
import { FoodItemClient } from '@shared/schema';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/hooks/useTranslation';
import { CartContext } from '@/contexts/CartContext';

interface FoodCardProps {
  item: FoodItemClient;
  onViewDetails: (item: FoodItemClient) => void;
  showPopularBadge?: boolean;
}

export function FoodCard({ item, onViewDetails, showPopularBadge = true }: FoodCardProps) {
  const { t, getLocalizedText } = useTranslation();
  const { addToCart } = useContext(CartContext);

  return (
    <Card className="overflow-hidden h-full flex flex-col bg-white dark:bg-gray-800 hover:shadow-md transition-shadow">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={item.image} 
          alt={t(item.name)} 
          className="w-full h-full object-cover"
        />
        {item.isPopular && showPopularBadge && (
          <div className="absolute top-0 right-0 m-2">
            <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
              {getLocalizedText('tag.popular')}
            </span>
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white p-3">
          <div className="flex flex-wrap gap-1">
            {item.category.slice(0, 3).map(tag => (
              <span key={tag} className="text-xs bg-white/30 backdrop-blur-sm px-2 py-0.5 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      <CardContent className="p-4 flex-1 flex flex-col">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-medium text-lg">{t(item.name)}</h3>
            <p className="text-gray-500 text-sm dark:text-gray-400">{item.origin}</p>
          </div>
          <div className="text-orange-500 font-medium">
            ${item.price.toFixed(2)}
          </div>
        </div>
        
        <p className="mt-2 text-gray-600 text-sm line-clamp-2 dark:text-gray-300">
          {t(item.description)}
        </p>
        
        {/* Nutrition Preview */}
        <div className="mt-3 flex items-center space-x-4">
          <div className="flex flex-col items-center">
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {getLocalizedText('food.calories')}
            </span>
            <span className="font-mono font-medium">{item.nutrition.calories}</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {getLocalizedText('food.protein')}
            </span>
            <span className="font-mono font-medium">{item.nutrition.protein}g</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {getLocalizedText('food.carbs')}
            </span>
            <span className="font-mono font-medium">{item.nutrition.carbs}g</span>
          </div>
        </div>
        
        {/* Actions */}
        <div className="mt-4 flex space-x-2 mt-auto">
          <Button 
            onClick={() => onViewDetails(item)}
            variant="outline" 
            className="flex-1"
          >
            {getLocalizedText('button.details')}
          </Button>
          <Button 
            onClick={() => addToCart(item)}
            className="flex-1"
          >
            {getLocalizedText('button.addToCart')}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
