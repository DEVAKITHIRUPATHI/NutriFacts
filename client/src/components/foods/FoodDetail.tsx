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
                
                {/* Macronutrients */}
                <div className="mb-4">
                  <h5 className="text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    {getLocalizedText('nutrition.macronutrients')}
                  </h5>
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
                    </div>
                    
                    <div>
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
                    </div>
                  </div>
                </div>
                
                {/* Essential Nutrients */}
                <div className="mb-4">
                  <h5 className="text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    {getLocalizedText('nutrition.essentialNutrients') || 'Essential Nutrients'}
                  </h5>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
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
                      
                      {/* Omega-3 */}
                      {item.nutrition.omega3 !== undefined && (
                        <div className="mb-2">
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            {getLocalizedText('nutrition.omega3') || 'Omega-3'}
                          </span>
                          <div className="flex justify-between">
                            <span className="font-mono font-medium text-lg">{item.nutrition.omega3}g</span>
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                              {getLocalizedText('nutrition.per100g')}
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-600">
                            <div 
                              className="bg-green-500 h-1.5 rounded-full" 
                              style={{ width: `${Math.min(item.nutrition.omega3 * 50, 100)}%` }}
                            ></div>
                          </div>
                        </div>
                      )}
                      
                      {/* Omega-6 */}
                      {item.nutrition.omega6 !== undefined && (
                        <div className="mb-2">
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            {getLocalizedText('nutrition.omega6') || 'Omega-6'}
                          </span>
                          <div className="flex justify-between">
                            <span className="font-mono font-medium text-lg">{item.nutrition.omega6}g</span>
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                              {getLocalizedText('nutrition.per100g')}
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-600">
                            <div 
                              className="bg-cyan-500 h-1.5 rounded-full" 
                              style={{ width: `${Math.min(item.nutrition.omega6 * 20, 100)}%` }}
                            ></div>
                          </div>
                        </div>
                      )}
                      
                      {/* Collagen */}
                      {item.nutrition.collagen !== undefined && (
                        <div className="mb-2">
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            {getLocalizedText('nutrition.collagen') || 'Collagen'}
                          </span>
                          <div className="flex justify-between">
                            <span className="font-mono font-medium text-lg">{item.nutrition.collagen}g</span>
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                              {getLocalizedText('nutrition.per100g')}
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-600">
                            <div 
                              className="bg-amber-500 h-1.5 rounded-full" 
                              style={{ width: `${Math.min(item.nutrition.collagen * 10, 100)}%` }}
                            ></div>
                          </div>
                        </div>
                      )}
                    </div>
                    
                    <div>
                      {/* Vitamins */}
                      <div className="mb-3">
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {getLocalizedText('nutrition.vitamins')}
                        </span>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {Object.entries(item.nutrition.vitamins).map(([key, value]) => (
                            <span 
                              key={key}
                              className="bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded flex items-center gap-1 dark:bg-gray-600 dark:text-gray-200"
                              title={getLocalizedText(`vitamin.${key.toLowerCase()}.benefit`) || `Vitamin ${key}`}
                            >
                              <span>{key}</span>
                              <span>{value}</span>
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      {/* Minerals */}
                      {item.nutrition.minerals && Object.keys(item.nutrition.minerals).length > 0 && (
                        <div className="mb-3">
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            {getLocalizedText('nutrition.minerals') || 'Minerals'}
                          </span>
                          <div className="flex flex-wrap gap-2 mt-1">
                            {Object.entries(item.nutrition.minerals).map(([key, value]) => (
                              <span 
                                key={key}
                                className="bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded flex items-center gap-1 dark:bg-gray-600 dark:text-gray-200"
                                title={getLocalizedText(`mineral.${key.toLowerCase()}.benefit`) || key}
                              >
                                <span>{key}</span>
                                <span>{value}</span>
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {/* Antioxidants */}
                      {item.nutrition.antioxidants && Object.keys(item.nutrition.antioxidants).length > 0 && (
                        <div className="mb-3">
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            {getLocalizedText('nutrition.antioxidants') || 'Antioxidants'}
                          </span>
                          <div className="flex flex-wrap gap-2 mt-1">
                            {Object.entries(item.nutrition.antioxidants).map(([key, value]) => (
                              <span 
                                key={key}
                                className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded flex items-center gap-1 dark:bg-green-900 dark:text-green-200"
                              >
                                <span>{key}</span>
                                <span>{value}</span>
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                
                {/* Health Benefits Section */}
                {item.healthBenefits && item.healthBenefits.length > 0 && (
                  <div className="mb-3">
                    <h5 className="text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                      {getLocalizedText('food.healthBenefits') || 'Health Benefits'}
                    </h5>
                    <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-300 space-y-1">
                      {item.healthBenefits.map((benefit, index) => (
                        <li key={index}>{t(benefit)}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {/* Recommended Intake */}
                {item.recommendedIntake && (
                  <div>
                    <h5 className="text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                      {getLocalizedText('food.recommendedIntake') || 'Recommended Intake'}
                    </h5>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {t(item.recommendedIntake)}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
