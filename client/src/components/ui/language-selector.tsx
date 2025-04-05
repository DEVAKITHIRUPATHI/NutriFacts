import { useState, useContext } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Search } from 'lucide-react';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { AppContext } from '@/contexts/AppContext';
import { LANGUAGES } from '@/types';

export function LanguageSelector() {
  const { language, setLanguage } = useContext(AppContext);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Filter languages based on search
  const filteredLanguages = LANGUAGES.filter(lang => 
    lang.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="flex items-center gap-1 bg-gray-100 hover:bg-gray-200 rounded-full px-3 py-1 text-sm dark:bg-gray-700 dark:hover:bg-gray-600 h-auto">
          {LANGUAGES.find(l => l.code === language)?.name}
          <ChevronDown size={16} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <div className="p-2">
          <div className="flex items-center border rounded-md px-2">
            <Search className="h-4 w-4 mr-2 opacity-50" />
            <Input 
              placeholder="Search language..." 
              className="h-8 border-0 focus-visible:ring-0 p-0 placeholder:text-sm" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        <ScrollArea className="h-56">
          {filteredLanguages.map((lang) => (
            <DropdownMenuItem
              key={lang.code}
              className={language === lang.code ? 'bg-gray-100 dark:bg-gray-600' : ''}
              onClick={() => {
                setLanguage(lang.code);
                setSearchQuery('');
              }}
            >
              {lang.name}
            </DropdownMenuItem>
          ))}
        </ScrollArea>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
