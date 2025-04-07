import { useContext, useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { LanguageSelector } from '@/components/ui/language-selector';
import { AppContext } from '@/contexts/AppContext';
import { CartContext } from '@/contexts/CartContext';
import { useTranslation } from '@/hooks/useTranslation';
import { 
  Leaf, Heart, Menu, X, Wifi, WifiOff, Home, Apple, Info, 
  ScrollText, Globe, ChevronRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { useIsMobile } from '@/hooks/use-mobile';

export function Navbar() {
  const { offlineStatus, toggleOfflineMode, language } = useContext(AppContext);
  const { cartItems, openCart } = useContext(CartContext);
  const { getLocalizedText } = useTranslation();
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();
  
  // Close mobile menu when navigating to a new page
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Close mobile menu when switching to desktop view
  useEffect(() => {
    if (!isMobile) {
      setIsOpen(false);
    }
  }, [isMobile]);

  return (
    <header className="bg-white shadow-sm dark:bg-gray-800 sticky top-0 z-40">
      <div className="container mx-auto px-4 py-3 flex flex-wrap items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Leaf className="text-primary-500 mr-2" />
          <span className="text-xl font-semibold">{getLocalizedText('app.name')}</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4">
          <nav className="flex space-x-4">
            <Link href="/">
              <span className={`py-1 border-b-2 ${location === '/' ? 'border-primary-500' : 'border-transparent hover:border-primary-500'} font-medium cursor-pointer`}>
                {getLocalizedText('nav.home')}
              </span>
            </Link>
            <Link href="/foods">
              <span className={`py-1 border-b-2 ${location === '/foods' ? 'border-primary-500' : 'border-transparent hover:border-primary-500'} font-medium cursor-pointer`}>
                {getLocalizedText('nav.foods')}
              </span>
            </Link>
            <Link href="/nutrition">
              <span className={`py-1 border-b-2 ${location === '/nutrition' ? 'border-primary-500' : 'border-transparent hover:border-primary-500'} font-medium cursor-pointer`}>
                {getLocalizedText('nav.nutrition')}
              </span>
            </Link>
            <Link href="/about">
              <span className={`py-1 border-b-2 ${location === '/about' ? 'border-primary-500' : 'border-transparent hover:border-primary-500'} font-medium cursor-pointer`}>
                {getLocalizedText('nav.about')}
              </span>
            </Link>
          </nav>
        </div>
        
        {/* Actions */}
        <div className="flex items-center space-x-3">
          {/* Language Selector */}
          <LanguageSelector />
          
          {/* Favorites Button */}
          <button 
            onClick={openCart}
            className="relative p-2 text-gray-600 hover:text-primary-500 dark:text-gray-300 dark:hover:text-white"
            aria-label={getLocalizedText('button.favorites')}
          >
            <Heart 
              className="h-5 w-5 text-pink-500" 
              fill={cartItems.length > 0 ? "currentColor" : "none"} 
            />
            {cartItems.length > 0 && (
              <span className="absolute top-0 right-0 bg-pink-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {cartItems.length}
              </span>
            )}
          </button>
          
          {/* Toggle offline - Desktop */}
          <Button 
            onClick={toggleOfflineMode} 
            variant="outline" 
            size="sm"
            className="hidden md:flex items-center space-x-1 bg-gray-100 hover:bg-gray-200 rounded-full px-3 py-1 text-sm dark:bg-gray-700 dark:hover:bg-gray-600 h-auto"
          >
            {offlineStatus === 'offline' ? (
              <>
                <WifiOff className="h-4 w-4 text-red-500 mr-1" />
                {getLocalizedText('button.goOnline')}
              </>
            ) : (
              <>
                <Wifi className="h-4 w-4 mr-1" />
                {getLocalizedText('button.testOffline')}
              </>
            )}
          </Button>
          
          {/* Mobile menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button 
                className="md:hidden p-2 rounded-md text-gray-600 hover:text-primary-500 dark:text-gray-300 dark:hover:text-white"
                aria-label={getLocalizedText('button.menu')}
              >
                <Menu className="h-5 w-5" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[85vw] sm:w-[385px] p-0">
              <div className="flex flex-col h-full">
                <SheetHeader className="p-4 border-b">
                  <div className="flex justify-between items-center">
                    <SheetTitle className="flex items-center">
                      <Leaf className="text-primary-500 mr-2" />
                      <span>{getLocalizedText('app.name')}</span>
                    </SheetTitle>
                    <button 
                      onClick={() => setIsOpen(false)} 
                      className="rounded-full p-1 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                </SheetHeader>
                
                <div className="overflow-y-auto flex-1 py-2">
                  {/* Navigation Links */}
                  <div className="px-4 py-2">
                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                      {getLocalizedText('nav.main')}
                    </h3>
                    <nav className="space-y-1">
                      <Link href="/">
                        <div className={`flex items-center px-3 py-3 rounded-lg text-base font-medium ${location === '/' ? 'bg-primary-50 text-primary-600 dark:bg-primary-900/20 dark:text-primary-400' : 'hover:bg-gray-50 dark:hover:bg-gray-800'} cursor-pointer`}>
                          <Home className="h-5 w-5 mr-3" />
                          {getLocalizedText('nav.home')}
                          <ChevronRight className="h-4 w-4 ml-auto" />
                        </div>
                      </Link>
                      <Link href="/foods">
                        <div className={`flex items-center px-3 py-3 rounded-lg text-base font-medium ${location === '/foods' ? 'bg-primary-50 text-primary-600 dark:bg-primary-900/20 dark:text-primary-400' : 'hover:bg-gray-50 dark:hover:bg-gray-800'} cursor-pointer`}>
                          <Apple className="h-5 w-5 mr-3" />
                          {getLocalizedText('nav.foods')}
                          <ChevronRight className="h-4 w-4 ml-auto" />
                        </div>
                      </Link>
                      <Link href="/nutrition">
                        <div className={`flex items-center px-3 py-3 rounded-lg text-base font-medium ${location === '/nutrition' ? 'bg-primary-50 text-primary-600 dark:bg-primary-900/20 dark:text-primary-400' : 'hover:bg-gray-50 dark:hover:bg-gray-800'} cursor-pointer`}>
                          <ScrollText className="h-5 w-5 mr-3" />
                          {getLocalizedText('nav.nutrition')}
                          <ChevronRight className="h-4 w-4 ml-auto" />
                        </div>
                      </Link>
                      <Link href="/about">
                        <div className={`flex items-center px-3 py-3 rounded-lg text-base font-medium ${location === '/about' ? 'bg-primary-50 text-primary-600 dark:bg-primary-900/20 dark:text-primary-400' : 'hover:bg-gray-50 dark:hover:bg-gray-800'} cursor-pointer`}>
                          <Info className="h-5 w-5 mr-3" />
                          {getLocalizedText('nav.about')}
                          <ChevronRight className="h-4 w-4 ml-auto" />
                        </div>
                      </Link>
                    </nav>
                  </div>
                  
                  {/* Current Language */}
                  <div className="px-4 py-2 mt-6">
                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                      {getLocalizedText('language.current')}
                    </h3>
                    <div className="flex items-center px-3 py-3 rounded-lg bg-gray-50 dark:bg-gray-800">
                      <Globe className="h-5 w-5 mr-3 text-primary-500" />
                      <div>
                        <div className="font-medium">{language}</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          {getLocalizedText('language.switchLanguage')}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Mobile Only Actions */}
                  <div className="px-4 py-2 mt-6">
                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                      {getLocalizedText('actions.title')}
                    </h3>
                    <div className="space-y-3">
                      <button
                        onClick={() => {
                          toggleOfflineMode();
                          setIsOpen(false);
                        }}
                        className="w-full flex items-center px-3 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 font-medium"
                      >
                        {offlineStatus === 'offline' ? (
                          <>
                            <WifiOff className="h-5 w-5 text-red-500 mr-3" />
                            {getLocalizedText('button.goOnline')}
                          </>
                        ) : (
                          <>
                            <Wifi className="h-5 w-5 mr-3" />
                            {getLocalizedText('button.testOffline')}
                          </>
                        )}
                      </button>
                      <button
                        onClick={() => {
                          openCart();
                          setIsOpen(false);
                        }}
                        className="w-full flex items-center px-3 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 font-medium"
                      >
                        <Heart className="h-5 w-5 text-pink-500 mr-3" fill={cartItems.length > 0 ? "currentColor" : "none"} />
                        {getLocalizedText('nav.favorites')}
                        {cartItems.length > 0 && (
                          <span className="ml-2 bg-pink-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                            {cartItems.length}
                          </span>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Footer */}
                <div className="p-4 border-t mt-auto">
                  <div className="text-center text-sm text-gray-500 dark:text-gray-400">
                    NutriGlobe © {new Date().getFullYear()}
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
