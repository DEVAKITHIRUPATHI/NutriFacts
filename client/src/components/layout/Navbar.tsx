import { useContext } from 'react';
import { Link, useLocation } from 'wouter';
import { LanguageSelector } from '@/components/ui/language-selector';
import { AppContext } from '@/contexts/AppContext';
import { CartContext } from '@/contexts/CartContext';
import { useTranslation } from '@/hooks/useTranslation';
import { Leaf, ShoppingCart, Menu, Wifi, WifiOff } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Navbar() {
  const { offlineStatus, toggleOfflineMode } = useContext(AppContext);
  const { cartItems, openCart } = useContext(CartContext);
  const { getLocalizedText } = useTranslation();
  const [location] = useLocation();

  return (
    <header className="bg-white shadow-sm dark:bg-gray-800 sticky top-0 z-40">
      <div className="container mx-auto px-4 py-3 flex flex-wrap items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Leaf className="text-primary-500 mr-2" />
          <span className="text-xl font-semibold">{getLocalizedText('app.name')}</span>
        </Link>
        
        {/* Navigation */}
        <div className="hidden md:flex items-center space-x-4">
          <nav className="flex space-x-4">
            <Link href="/">
              <a className={`py-1 border-b-2 ${location === '/' ? 'border-primary-500' : 'border-transparent hover:border-primary-500'} font-medium`}>
                {getLocalizedText('nav.home')}
              </a>
            </Link>
            <Link href="/foods">
              <a className={`py-1 border-b-2 ${location === '/foods' ? 'border-primary-500' : 'border-transparent hover:border-primary-500'} font-medium`}>
                {getLocalizedText('nav.foods')}
              </a>
            </Link>
            <Link href="/nutrition">
              <a className={`py-1 border-b-2 ${location === '/nutrition' ? 'border-primary-500' : 'border-transparent hover:border-primary-500'} font-medium`}>
                {getLocalizedText('nav.nutrition')}
              </a>
            </Link>
            <Link href="/about">
              <a className={`py-1 border-b-2 ${location === '/about' ? 'border-primary-500' : 'border-transparent hover:border-primary-500'} font-medium`}>
                {getLocalizedText('nav.about')}
              </a>
            </Link>
          </nav>
        </div>
        
        {/* Actions */}
        <div className="flex items-center space-x-3">
          {/* Language Selector */}
          <LanguageSelector />
          
          {/* Cart Button */}
          <button 
            onClick={openCart}
            className="relative p-2 text-gray-600 hover:text-primary-500 dark:text-gray-300 dark:hover:text-white"
          >
            <svg className="h-5 w-5 text-pink-500" viewBox="0 0 24 24" fill={cartItems.length > 0 ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
            {cartItems.length > 0 && (
              <span className="absolute top-0 right-0 bg-pink-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {cartItems.length}
              </span>
            )}
          </button>
          
          {/* Mobile menu button */}
          <button className="md:hidden p-2 rounded-md text-gray-600 hover:text-primary-500 dark:text-gray-300 dark:hover:text-white">
            <Menu className="h-5 w-5" />
          </button>
          
          {/* Toggle offline */}
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
        </div>
      </div>
    </header>
  );
}
