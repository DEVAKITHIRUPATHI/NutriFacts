import { useState } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Search, Apple, Carrot, Wheat, Utensils, Milk, Fish, Drumstick, Egg, Globe, 
         Heart, Leaf, Dumbbell, Star, Filter, SunSnow } from 'lucide-react';
import type { FilterCategory, SearchFilters } from '@/types';

interface SearchFilterProps {
  onSearch: (filters: SearchFilters) => void;
}

export function SearchFilter({ onSearch }: SearchFilterProps) {
  const { getLocalizedText } = useTranslation();
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<FilterCategory>('all');
  const [activeTab, setActiveTab] = useState('food-types');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({ query, category });
  };

  const handleFilterClick = (newCategory: FilterCategory) => {
    setCategory(newCategory);
    onSearch({ query, category: newCategory });
  };

  return (
    <section className="mb-8">
      <div className="flex flex-col gap-4">
        {/* Search */}
        <form onSubmit={handleSearch} className="relative w-full md:max-w-md">
          <Input 
            type="text" 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-full"
            placeholder={getLocalizedText('search.placeholder')}
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </form>
        
        {/* Filter Tabs */}
        <Tabs 
          defaultValue="food-types" 
          value={activeTab} 
          onValueChange={setActiveTab}
          className="w-full"
        >
          <TabsList className="flex flex-wrap w-full mb-2 p-1 bg-gray-100 dark:bg-gray-800">
            <TabsTrigger value="food-types" className="flex-1">
              <Apple className="mr-1 h-4 w-4" /> Food Types
            </TabsTrigger>
            <TabsTrigger value="regional" className="flex-1">
              <Globe className="mr-1 h-4 w-4" /> Regional
            </TabsTrigger>
            <TabsTrigger value="dietary" className="flex-1">
              <Leaf className="mr-1 h-4 w-4" /> Dietary
            </TabsTrigger>
            <TabsTrigger value="nutritional" className="flex-1">
              <Dumbbell className="mr-1 h-4 w-4" /> Nutritional
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="food-types" className="pt-2">
            <div className="flex flex-wrap gap-2">
              <FilterButton 
                active={category === 'all'} 
                onClick={() => handleFilterClick('all')}
              >
                <Filter className="mr-1 h-4 w-4" />
                {getLocalizedText('filter.all') || 'All'}
              </FilterButton>
              <FilterButton 
                active={category === 'fruits'} 
                onClick={() => handleFilterClick('fruits')}
              >
                <Apple className="mr-1 h-4 w-4" />
                {getLocalizedText('filter.fruits') || 'Fruits'}
              </FilterButton>
              <FilterButton 
                active={category === 'vegetables'} 
                onClick={() => handleFilterClick('vegetables')}
              >
                <Carrot className="mr-1 h-4 w-4" />
                {getLocalizedText('filter.vegetables') || 'Vegetables'}
              </FilterButton>
              <FilterButton 
                active={category === 'grains'} 
                onClick={() => handleFilterClick('grains')}
              >
                <Wheat className="mr-1 h-4 w-4" />
                {getLocalizedText('filter.grains') || 'Grains'}
              </FilterButton>
              <FilterButton 
                active={category === 'spices'} 
                onClick={() => handleFilterClick('spices')}
              >
                <Utensils className="mr-1 h-4 w-4" />
                {getLocalizedText('filter.spices') || 'Spices'}
              </FilterButton>
              <FilterButton 
                active={category === 'dairy'} 
                onClick={() => handleFilterClick('dairy')}
              >
                <Milk className="mr-1 h-4 w-4" />
                {getLocalizedText('filter.dairy') || 'Dairy'}
              </FilterButton>
              <FilterButton 
                active={category === 'seafood'} 
                onClick={() => handleFilterClick('seafood')}
              >
                <Fish className="mr-1 h-4 w-4" />
                {getLocalizedText('filter.seafood') || 'Seafood'}
              </FilterButton>
              <FilterButton 
                active={category === 'meat'} 
                onClick={() => handleFilterClick('meat')}
              >
                <SunSnow className="mr-1 h-4 w-4" />
                {getLocalizedText('filter.meat') || 'Meat'}
              </FilterButton>
              <FilterButton 
                active={category === 'poultry'} 
                onClick={() => handleFilterClick('poultry')}
              >
                <Drumstick className="mr-1 h-4 w-4" />
                {getLocalizedText('filter.poultry') || 'Poultry'}
              </FilterButton>
              <FilterButton 
                active={category === 'nuts'} 
                onClick={() => handleFilterClick('nuts')}
              >
                {getLocalizedText('filter.nuts') || 'Nuts'}
              </FilterButton>
              <FilterButton 
                active={category === 'seeds'} 
                onClick={() => handleFilterClick('seeds')}
              >
                {getLocalizedText('filter.seeds') || 'Seeds'}
              </FilterButton>
              <FilterButton 
                active={category === 'legumes'} 
                onClick={() => handleFilterClick('legumes')}
              >
                {getLocalizedText('filter.legumes') || 'Legumes'}
              </FilterButton>
            </div>
          </TabsContent>
          
          <TabsContent value="regional" className="pt-2">
            <div className="flex flex-wrap gap-2">
              <FilterButton 
                active={category === 'all'} 
                onClick={() => handleFilterClick('all')}
              >
                <Filter className="mr-1 h-4 w-4" />
                {getLocalizedText('filter.all') || 'All Regions'}
              </FilterButton>
              <FilterButton 
                active={category === 'indian'} 
                onClick={() => handleFilterClick('indian')}
              >
                {getLocalizedText('filter.indian') || 'Indian'}
              </FilterButton>
              <FilterButton 
                active={category === 'global'} 
                onClick={() => handleFilterClick('global')}
              >
                <Globe className="mr-1 h-4 w-4" />
                {getLocalizedText('filter.global') || 'Global'}
              </FilterButton>
              <FilterButton 
                active={category === 'mediterranean'} 
                onClick={() => handleFilterClick('mediterranean')}
              >
                {getLocalizedText('filter.mediterranean') || 'Mediterranean'}
              </FilterButton>
              <FilterButton 
                active={category === 'asian'} 
                onClick={() => handleFilterClick('asian')}
              >
                {getLocalizedText('filter.asian') || 'Asian'}
              </FilterButton>
              <FilterButton 
                active={category === 'european'} 
                onClick={() => handleFilterClick('european')}
              >
                {getLocalizedText('filter.european') || 'European'}
              </FilterButton>
              <FilterButton 
                active={category === 'american'} 
                onClick={() => handleFilterClick('american')}
              >
                {getLocalizedText('filter.american') || 'American'}
              </FilterButton>
            </div>
          </TabsContent>
          
          <TabsContent value="dietary" className="pt-2">
            <div className="flex flex-wrap gap-2">
              <FilterButton 
                active={category === 'all'} 
                onClick={() => handleFilterClick('all')}
              >
                <Filter className="mr-1 h-4 w-4" />
                {getLocalizedText('filter.all') || 'All Types'}
              </FilterButton>
              <FilterButton 
                active={category === 'vegan'} 
                onClick={() => handleFilterClick('vegan')}
              >
                <Leaf className="mr-1 h-4 w-4" />
                {getLocalizedText('filter.vegan') || 'Vegan'}
              </FilterButton>
              <FilterButton 
                active={category === 'vegetarian'} 
                onClick={() => handleFilterClick('vegetarian')}
              >
                {getLocalizedText('filter.vegetarian') || 'Vegetarian'}
              </FilterButton>
              <FilterButton 
                active={category === 'non_vegetarian'} 
                onClick={() => handleFilterClick('non_vegetarian')}
              >
                <Egg className="mr-1 h-4 w-4" />
                {getLocalizedText('filter.non_vegetarian') || 'Non-Vegetarian'}
              </FilterButton>
              <FilterButton 
                active={category === 'gluten-free'} 
                onClick={() => handleFilterClick('gluten-free')}
              >
                {getLocalizedText('filter.gluten_free') || 'Gluten-Free'}
              </FilterButton>
              <FilterButton 
                active={category === 'keto'} 
                onClick={() => handleFilterClick('keto')}
              >
                {getLocalizedText('filter.keto') || 'Keto'}
              </FilterButton>
              <FilterButton 
                active={category === 'protein'} 
                onClick={() => handleFilterClick('protein')}
              >
                <Dumbbell className="mr-1 h-4 w-4" />
                {getLocalizedText('filter.protein') || 'Protein-Rich'}
              </FilterButton>
            </div>
          </TabsContent>

          <TabsContent value="nutritional" className="pt-2">
            <div className="flex flex-wrap gap-2">
              <FilterButton 
                active={category === 'high_protein'} 
                onClick={() => handleFilterClick('high_protein')}
              >
                <Dumbbell className="mr-1 h-4 w-4" />
                {getLocalizedText('filter.high_protein') || 'High Protein'}
              </FilterButton>
              <FilterButton 
                active={category === 'high_fiber'} 
                onClick={() => handleFilterClick('high_fiber')}
              >
                {getLocalizedText('filter.high_fiber') || 'High Fiber'}
              </FilterButton>
              <FilterButton 
                active={category === 'low_carb'} 
                onClick={() => handleFilterClick('low_carb')}
              >
                {getLocalizedText('filter.low_carb') || 'Low Carb'}
              </FilterButton>
              <FilterButton 
                active={category === 'low_fat'} 
                onClick={() => handleFilterClick('low_fat')}
              >
                {getLocalizedText('filter.low_fat') || 'Low Fat'}
              </FilterButton>
              <FilterButton 
                active={category === 'high_vitamin_a'} 
                onClick={() => handleFilterClick('high_vitamin_a')}
              >
                {getLocalizedText('filter.high_vitamin_a') || 'Vitamin A'}
              </FilterButton>
              <FilterButton 
                active={category === 'high_vitamin_c'} 
                onClick={() => handleFilterClick('high_vitamin_c')}
              >
                {getLocalizedText('filter.high_vitamin_c') || 'Vitamin C'}
              </FilterButton>
              <FilterButton 
                active={category === 'high_vitamin_d'} 
                onClick={() => handleFilterClick('high_vitamin_d')}
              >
                {getLocalizedText('filter.high_vitamin_d') || 'Vitamin D'}
              </FilterButton>
              <FilterButton 
                active={category === 'high_calcium'} 
                onClick={() => handleFilterClick('high_calcium')}
              >
                {getLocalizedText('filter.high_calcium') || 'Calcium'}
              </FilterButton>
              <FilterButton 
                active={category === 'high_iron'} 
                onClick={() => handleFilterClick('high_iron')}
              >
                {getLocalizedText('filter.high_iron') || 'Iron'}
              </FilterButton>
              <FilterButton 
                active={category === 'high_omega3'} 
                onClick={() => handleFilterClick('high_omega3')}
              >
                <Heart className="mr-1 h-4 w-4" />
                {getLocalizedText('filter.high_omega3') || 'Omega-3'}
              </FilterButton>
              <FilterButton 
                active={category === 'antioxidant_rich'} 
                onClick={() => handleFilterClick('antioxidant_rich')}
              >
                <Star className="mr-1 h-4 w-4" />
                {getLocalizedText('filter.antioxidant_rich') || 'Antioxidants'}
              </FilterButton>
              <FilterButton 
                active={category === 'probiotic'} 
                onClick={() => handleFilterClick('probiotic')}
              >
                {getLocalizedText('filter.probiotic') || 'Probiotics'}
              </FilterButton>
              <FilterButton 
                active={category === 'superfood'} 
                onClick={() => handleFilterClick('superfood')}
              >
                <Star className="mr-1 h-4 w-4" />
                {getLocalizedText('filter.superfood') || 'Superfood'}
              </FilterButton>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

interface FilterButtonProps {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

function FilterButton({ active, onClick, children }: FilterButtonProps) {
  return (
    <Button 
      type="button"
      onClick={onClick}
      variant={active ? 'default' : 'outline'}
      className="px-4 py-1.5 text-sm rounded-full transition-colors duration-200 h-auto"
    >
      {children}
    </Button>
  );
}
