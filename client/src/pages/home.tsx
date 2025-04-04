import { useState, useEffect, useContext } from 'react';
import { Link } from 'wouter';
import { Hero } from '@/components/home/Hero';
import { SearchFilter } from '@/components/home/SearchFilter';
import { NutritionGuide } from '@/components/home/NutritionGuide';
import { FoodCard } from '@/components/foods/FoodCard';
import { FoodDetail } from '@/components/foods/FoodDetail';
import { useTranslation } from '@/hooks/useTranslation';
import { AppContext } from '@/contexts/AppContext';
import { FoodItemClient } from '@shared/schema';
import type { SearchFilters } from '@/types';
import { ArrowRight, AlertCircle, Search } from 'lucide-react';
import { foodItems } from '@shared/mockData';
import { getFoodItems, searchFoodItems } from '@/lib/idb';

export default function Home() {
  const { getLocalizedText } = useTranslation();
  const { offlineStatus } = useContext(AppContext);
  const [popularFoods, setPopularFoods] = useState<FoodItemClient[]>([]);
  const [filteredFoods, setFilteredFoods] = useState<FoodItemClient[]>([]);
  const [selectedFood, setSelectedFood] = useState<FoodItemClient | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        setIsLoading(true);
        let items: FoodItemClient[];
        
        if (offlineStatus === 'offline') {
          // Use IndexedDB in offline mode
          items = await getFoodItems();
        } else {
          // Use mock data for now, in a real app this would be an API call
          items = [...foodItems];
        }
        
        const popular = items.filter(item => item.isPopular);
        setPopularFoods(popular);
        setFilteredFoods(items);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching foods:', error);
        setIsLoading(false);
      }
    };

    fetchFoods();
  }, [offlineStatus]);

  const handleSearch = async (filters: SearchFilters) => {
    try {
      let results: FoodItemClient[];
      
      if (offlineStatus === 'offline') {
        // Search in IndexedDB
        results = await searchFoodItems(filters.query, filters.category);
      } else {
        // Filter mock data, in a real app this would be an API call
        results = [...foodItems];
        
        if (filters.query) {
          const query = filters.query.toLowerCase();
          results = results.filter(item => 
            item.name.en.toLowerCase().includes(query) || 
            item.description.en.toLowerCase().includes(query)
          );
        }
        
        if (filters.category !== 'all') {
          results = results.filter(item => 
            item.category.includes(filters.category)
          );
        }
      }
      
      setFilteredFoods(results);
    } catch (error) {
      console.error('Error searching foods:', error);
    }
  };

  const handleViewDetails = (item: FoodItemClient) => {
    setSelectedFood(item);
    setIsDetailOpen(true);
  };

  return (
    <>
      <Hero />
      
      <SearchFilter onSearch={handleSearch} />
      
      {/* Popular Items Section */}
      <section className="mb-12">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">
            {getLocalizedText('popular.foods')}
          </h2>
          <Link href="/foods">
            <a className="text-primary-500 hover:underline flex items-center">
              {getLocalizedText('view.all')}
              <ArrowRight className="ml-1 h-4 w-4" />
            </a>
          </Link>
        </div>
        
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm h-[450px] dark:bg-gray-800">
                <div className="h-48 bg-gray-200 animate-pulse dark:bg-gray-700"></div>
                <div className="p-4">
                  <div className="h-6 bg-gray-200 rounded animate-pulse mb-2 w-3/4 dark:bg-gray-700"></div>
                  <div className="h-4 bg-gray-200 rounded animate-pulse mb-4 w-1/2 dark:bg-gray-700"></div>
                  <div className="h-4 bg-gray-200 rounded animate-pulse mb-6 dark:bg-gray-700"></div>
                  <div className="flex space-x-4 mb-6">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="h-10 bg-gray-200 rounded animate-pulse flex-1 dark:bg-gray-700"></div>
                    ))}
                  </div>
                  <div className="flex space-x-2">
                    <div className="h-10 bg-gray-200 rounded animate-pulse flex-1 dark:bg-gray-700"></div>
                    <div className="h-10 bg-gray-200 rounded animate-pulse flex-1 dark:bg-gray-700"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {popularFoods.map((item) => (
              <FoodCard 
                key={item.id}
                item={item}
                onViewDetails={handleViewDetails}
              />
            ))}
          </div>
        )}
      </section>
      
      {/* All Foods Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          {getLocalizedText('all.foods')}
        </h2>
        
        {/* No results message */}
        {filteredFoods.length === 0 && !isLoading ? (
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-8 text-center">
            <Search className="h-12 w-12 text-gray-400 mx-auto mb-2" />
            <h3 className="text-lg font-medium mb-1">
              {getLocalizedText('noResults.title')}
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              {getLocalizedText('noResults.message')}
            </p>
          </div>
        ) : isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm h-[450px] dark:bg-gray-800">
                <div className="h-48 bg-gray-200 animate-pulse dark:bg-gray-700"></div>
                <div className="p-4">
                  <div className="h-6 bg-gray-200 rounded animate-pulse mb-2 w-3/4 dark:bg-gray-700"></div>
                  <div className="h-4 bg-gray-200 rounded animate-pulse mb-4 w-1/2 dark:bg-gray-700"></div>
                  <div className="h-4 bg-gray-200 rounded animate-pulse mb-6 dark:bg-gray-700"></div>
                  <div className="flex space-x-4 mb-6">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="h-10 bg-gray-200 rounded animate-pulse flex-1 dark:bg-gray-700"></div>
                    ))}
                  </div>
                  <div className="flex space-x-2">
                    <div className="h-10 bg-gray-200 rounded animate-pulse flex-1 dark:bg-gray-700"></div>
                    <div className="h-10 bg-gray-200 rounded animate-pulse flex-1 dark:bg-gray-700"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredFoods.map((item) => (
              <FoodCard 
                key={item.id}
                item={item}
                onViewDetails={handleViewDetails}
                showPopularBadge={true}
              />
            ))}
          </div>
        )}
      </section>
      
      <NutritionGuide />
      
      {/* Food Detail Modal */}
      <FoodDetail 
        item={selectedFood}
        isOpen={isDetailOpen}
        onClose={() => setIsDetailOpen(false)}
      />
    </>
  );
}
