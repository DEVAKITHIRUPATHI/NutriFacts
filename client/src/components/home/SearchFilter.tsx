import { useState } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import type { FilterCategory, SearchFilters } from '@/types';

interface SearchFilterProps {
  onSearch: (filters: SearchFilters) => void;
}

export function SearchFilter({ onSearch }: SearchFilterProps) {
  const { getLocalizedText } = useTranslation();
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<FilterCategory>('all');

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
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Search */}
        <form onSubmit={handleSearch} className="relative flex-grow max-w-md">
          <Input 
            type="text" 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-full"
            placeholder={getLocalizedText('search.placeholder')}
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </form>
        
        {/* Filters */}
        <div className="flex flex-wrap gap-2">
          <FilterButton 
            active={category === 'all'} 
            onClick={() => handleFilterClick('all')}
          >
            {getLocalizedText('filter.all')}
          </FilterButton>
          <FilterButton 
            active={category === 'fruits'} 
            onClick={() => handleFilterClick('fruits')}
          >
            {getLocalizedText('filter.fruits')}
          </FilterButton>
          <FilterButton 
            active={category === 'vegetables'} 
            onClick={() => handleFilterClick('vegetables')}
          >
            {getLocalizedText('filter.vegetables')}
          </FilterButton>
          <FilterButton 
            active={category === 'meat'} 
            onClick={() => handleFilterClick('meat')}
          >
            {getLocalizedText('filter.meat') || 'Meat'}
          </FilterButton>
          <FilterButton 
            active={category === 'seafood'} 
            onClick={() => handleFilterClick('seafood')}
          >
            {getLocalizedText('filter.seafood') || 'Seafood'}
          </FilterButton>
          <FilterButton 
            active={category === 'poultry'} 
            onClick={() => handleFilterClick('poultry')}
          >
            {getLocalizedText('filter.poultry') || 'Poultry'}
          </FilterButton>
          <FilterButton 
            active={category === 'non_vegetarian'} 
            onClick={() => handleFilterClick('non_vegetarian')}
          >
            {getLocalizedText('filter.non_vegetarian') || 'Non-Vegetarian'}
          </FilterButton>
          <FilterButton 
            active={category === 'indian'} 
            onClick={() => handleFilterClick('indian')}
          >
            {getLocalizedText('filter.indian')}
          </FilterButton>
          <FilterButton 
            active={category === 'global'} 
            onClick={() => handleFilterClick('global')}
          >
            {getLocalizedText('filter.global')}
          </FilterButton>
        </div>
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
