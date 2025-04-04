import type { FoodItemClient, Language, CartItemClient } from '@shared/schema';

export type OfflineStatus = 'online' | 'offline';

export type FilterCategory = 'all' | 'fruits' | 'vegetables' | 'grains' | 'spices' | 'dairy' | 'seafood' | 'meat' | 'poultry' | 'nuts' | 'indian' | 'global' | 'protein' | 'vegan' | 'non_vegetarian';

export interface LanguageOption {
  code: Language;
  name: string;
}

export const LANGUAGES: LanguageOption[] = [
  { code: 'en', name: 'English' },
  { code: 'hi', name: 'हिन्दी' },
  { code: 'ta', name: 'தமிழ்' }
];

export interface SearchFilters {
  query: string;
  category: FilterCategory;
}
