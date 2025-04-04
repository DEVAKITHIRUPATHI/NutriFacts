import { createContext, useState, useEffect, ReactNode } from 'react';
import { initDB, getSettings, updateSettings, storeFoodItems } from '@/lib/idb';
import { foodItems } from '@shared/mockData';
import type { Language } from '@shared/schema';
import { useOfflineDetection } from '@/hooks/useOfflineDetection';
import type { OfflineStatus } from '@/types';

interface AppContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  offlineStatus: OfflineStatus;
  toggleOfflineMode: () => void;
  isLoading: boolean;
}

export const AppContext = createContext<AppContextProps>({
  language: 'en',
  setLanguage: () => {},
  offlineStatus: 'online',
  toggleOfflineMode: () => {},
  isLoading: true,
});

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  const [language, setLanguageState] = useState<Language>('en');
  const [isLoading, setIsLoading] = useState(true);
  const { status: offlineStatus, toggleOfflineMode } = useOfflineDetection();

  useEffect(() => {
    const initialize = async () => {
      try {
        // Initialize IndexedDB
        await initDB();
        
        // Load settings from IndexedDB
        const settings = await getSettings();
        setLanguageState(settings.language);
        
        // Store food items in IndexedDB for offline use
        await storeFoodItems(foodItems);
        
        setIsLoading(false);
      } catch (error) {
        console.error('Failed to initialize app:', error);
        setIsLoading(false);
      }
    };

    initialize();
  }, []);

  const setLanguage = async (lang: Language) => {
    setLanguageState(lang);
    await updateSettings({ language: lang });
  };

  return (
    <AppContext.Provider value={{
      language,
      setLanguage,
      offlineStatus,
      toggleOfflineMode,
      isLoading
    }}>
      {children}
    </AppContext.Provider>
  );
};
