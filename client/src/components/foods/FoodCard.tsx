import { useContext } from 'react';
import { FoodItemClient } from '@shared/schema';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/hooks/useTranslation';
import { CartContext } from '@/contexts/CartContext';
import { Heart, Info, Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useIsMobile } from '@/hooks/use-mobile';

interface FoodCardProps {
  item: FoodItemClient;
  onViewDetails: (item: FoodItemClient) => void;
  showPopularBadge?: boolean;
}

export function FoodCard({ item, onViewDetails, showPopularBadge = true }: FoodCardProps) {
  const { t, getLocalizedText } = useTranslation();
  const { addToCart, isFavorite } = useContext(CartContext);
  const isMobile = useIsMobile();
  const isItemFavorite = isFavorite(item.id);

  // Helper function to truncate text for mobile view
  const truncate = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
  };

  // Get most relevant nutritional information to highlight
  const getNutrientHighlight = () => {
    if (item.nutrition.protein > 20) return 'high_protein';
    if (item.nutrition.fiber > 8) return 'high_fiber';
    if (item.nutrition.carbs < 5) return 'low_carb';
    if (item.nutrition.fat < 3) return 'low_fat';
    if (item.nutrition.vitamins?.['A'] && parseFloat(item.nutrition.vitamins['A']) > 30) return 'high_vitamin_a';
    if (item.nutrition.vitamins?.['C'] && parseFloat(item.nutrition.vitamins['C']) > 60) return 'high_vitamin_c';
    if (item.nutrition.omega3 && item.nutrition.omega3 > 1.5) return 'high_omega3';
    return null;
  };

  const nutrientHighlight = getNutrientHighlight();

  return (
    <Card className="overflow-hidden h-full flex flex-col bg-white dark:bg-gray-800 hover:shadow-md transition-shadow">
      <div className="relative h-48 overflow-hidden group">
        <img 
          src={item.image} 
          alt={t(item.name)} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Quick action buttons */}
        <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button 
            onClick={(e) => {
              e.stopPropagation();
              addToCart(item);
            }}
            className={`rounded-full p-2 ${isItemFavorite ? 'bg-pink-500 text-white' : 'bg-white/90 text-pink-500'} shadow hover:shadow-md transition-all`}
            aria-label={getLocalizedText('button.favorite')}
          >
            <Heart className="h-4 w-4" fill={isItemFavorite ? "currentColor" : "none"} />
          </button>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onViewDetails(item);
            }}
            className="rounded-full p-2 bg-white/90 text-primary-500 shadow hover:shadow-md transition-all"
            aria-label={getLocalizedText('button.details')}
          >
            <Info className="h-4 w-4" />
          </button>
        </div>
        
        {/* Tags and badges */}
        <div className="absolute bottom-0 left-0 right-0 p-3 flex justify-between items-end">
          <div className="flex flex-wrap gap-1 max-w-[80%]">
            {item.category.slice(0, isMobile ? 2 : 3).map(tag => (
              <Badge key={tag} variant="secondary" className="bg-white/30 backdrop-blur-sm text-white border-none text-xs">
                {tag}
              </Badge>
            ))}
          </div>
          
          {item.isPopular && showPopularBadge && (
            <Badge variant="outline" className="bg-orange-500 border-none text-white">
              <Star className="h-3 w-3 mr-1 fill-white" /> {getLocalizedText('tag.popular')}
            </Badge>
          )}
        </div>
      </div>
      
      <CardContent className="p-4 flex-1 flex flex-col" onClick={() => onViewDetails(item)}>
        <div>
          <h3 className="font-medium text-lg line-clamp-1 hover:text-primary-500 transition-colors">
            {t(item.name)}
          </h3>
          <p className="text-gray-500 text-sm dark:text-gray-400">{item.origin}</p>
        </div>
        
        <p className="mt-2 text-gray-600 text-sm line-clamp-2 dark:text-gray-300">
          {truncate(t(item.description), isMobile ? 80 : 100)}
        </p>
        
        {/* Nutrition Preview */}
        <div className="mt-3 grid grid-cols-3 gap-2">
          <div className="flex flex-col items-center p-1 rounded bg-gray-50 dark:bg-gray-700/50">
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {getLocalizedText('food.calories')}
            </span>
            <span className="font-mono font-medium">{item.nutrition.calories}</span>
          </div>
          <div className="flex flex-col items-center p-1 rounded bg-gray-50 dark:bg-gray-700/50">
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {getLocalizedText('food.protein')}
            </span>
            <span className="font-mono font-medium">{item.nutrition.protein}g</span>
          </div>
          <div className="flex flex-col items-center p-1 rounded bg-gray-50 dark:bg-gray-700/50">
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {getLocalizedText('food.carbs')}
            </span>
            <span className="font-mono font-medium">{item.nutrition.carbs}g</span>
          </div>
        </div>
        
        {/* Nutrient Highlight */}
        {nutrientHighlight && (
          <div className="mt-3">
            <Badge variant="outline" className="w-full justify-center py-1.5 border-green-200 bg-green-50 text-green-700 dark:border-green-900 dark:bg-green-900/20 dark:text-green-400">
              {getLocalizedText(`filter.${nutrientHighlight}`) || nutrientHighlight.replace('_', ' ')}
            </Badge>
          </div>
        )}
        
        {/* Action buttons for non-hover state */}
        <div className="mt-4 flex gap-2 mt-auto">
          <Button 
            onClick={(e) => {
              e.stopPropagation();
              onViewDetails(item);
            }}
            variant="default" 
            className="flex-1"
          >
            <Info className="h-4 w-4 mr-1.5" />
            {getLocalizedText('button.details')}
          </Button>
          <Button 
            onClick={(e) => {
              e.stopPropagation();
              addToCart(item);
            }}
            variant={isItemFavorite ? "secondary" : "outline"}
            className={`w-12 p-0 flex items-center justify-center ${isItemFavorite ? 'bg-pink-100 text-pink-700 hover:bg-pink-200 dark:bg-pink-900/30 dark:text-pink-400' : ''}`}
          >
            <Heart 
              className="h-5 w-5" 
              fill={isItemFavorite ? "currentColor" : "none"} 
            />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
