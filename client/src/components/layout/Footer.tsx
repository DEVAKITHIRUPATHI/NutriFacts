import { useTranslation } from '@/hooks/useTranslation';
import { Link } from 'wouter';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export function Footer() {
  const { getLocalizedText } = useTranslation();

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-3">{getLocalizedText('app.name')}</h3>
            <p className="text-gray-400 text-sm">
              {getLocalizedText('footer.description')}
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-3">
              {getLocalizedText('footer.quickLinks')}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/">
                  <a className="text-gray-400 hover:text-white transition">
                    {getLocalizedText('nav.home')}
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="text-gray-400 hover:text-white transition">
                    {getLocalizedText('nav.about')}
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/foods">
                  <a className="text-gray-400 hover:text-white transition">
                    {getLocalizedText('nav.foods')}
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="text-gray-400 hover:text-white transition">
                    {getLocalizedText('nav.contact')}
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-3">
              {getLocalizedText('footer.features')}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/nutrition">
                  <a className="text-gray-400 hover:text-white transition">
                    {getLocalizedText('feature.database')}
                  </a>
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  {getLocalizedText('feature.multilingual')}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  {getLocalizedText('feature.offline')}
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-3">
              {getLocalizedText('footer.newsletter')}
            </h3>
            <p className="text-gray-400 text-sm mb-3">
              {getLocalizedText('newsletter.description')}
            </p>
            <form className="flex">
              <Input 
                type="email" 
                className="flex-1 bg-gray-700 text-white text-sm rounded-l-md focus:outline-none border-0" 
                placeholder="Email address"
              />
              <Button 
                type="submit"
                className="bg-primary-500 hover:bg-primary-600 px-3 py-2 rounded-r-md text-sm font-medium transition-colors"
              >
                {getLocalizedText('button.subscribe')}
              </Button>
            </form>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2023 NutriGlobe. {getLocalizedText('footer.copyright')}
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white transition">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
