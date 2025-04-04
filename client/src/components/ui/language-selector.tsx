import { useState, useContext } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { AppContext } from '@/contexts/AppContext';
import { LANGUAGES } from '@/types';

export function LanguageSelector() {
  const { language, setLanguage } = useContext(AppContext);
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="flex items-center gap-1 bg-gray-100 hover:bg-gray-200 rounded-full px-3 py-1 text-sm dark:bg-gray-700 dark:hover:bg-gray-600 h-auto">
          {LANGUAGES.find(l => l.code === language)?.name}
          <ChevronDown size={16} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {LANGUAGES.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            className={language === lang.code ? 'bg-gray-100 dark:bg-gray-600' : ''}
            onClick={() => setLanguage(lang.code)}
          >
            {lang.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
