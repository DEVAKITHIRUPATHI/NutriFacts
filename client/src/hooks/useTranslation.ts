import { useContext } from 'react';
import { AppContext } from '@/contexts/AppContext';
import type { Language } from '@shared/schema';
import type { TranslatedContent } from '@shared/schema';

export function useTranslation() {
  const { language } = useContext(AppContext);

  function t(content: TranslatedContent | {[key in Language]: string}): string {
    return content[language];
  }

  function getLocalizedText(key: string): string {
    const translations: Record<string, {[key in Language]: string}> = {
      'app.name': {
        en: 'NutriGlobe',
        hi: 'न्यूट्रीग्लोब',
        ta: 'நியூட்ரிகுளோப்'
      },
      'home.title': {
        en: 'Discover Nutrition in Every Bite',
        hi: 'हर निवाले में पोषण की खोज करें',
        ta: 'ஒவ்வொரு கடியிலும் ஊட்டச்சத்தைக் கண்டறியுங்கள்'
      },
      'home.subtitle': {
        en: 'Explore global and Indian superfoods with detailed nutrition information',
        hi: 'विस्तृत पोषण जानकारी के साथ वैश्विक और भारतीय सुपरफूड्स का पता लगाएं',
        ta: 'விரிவான ஊட்டச்சத்து தகவலுடன் உலகளாவிய மற்றும் இந்திய சூப்பர்ஃபுட்களை ஆராயுங்கள்'
      },
      'button.exploreFoods': {
        en: 'Explore Foods',
        hi: 'खाद्य पदार्थों का अन्वेषण करें',
        ta: 'உணவுகளை ஆராயுங்கள்'
      },
      'button.learnMore': {
        en: 'Learn More',
        hi: 'और जानें',
        ta: 'மேலும் அறிய'
      },
      'search.placeholder': {
        en: 'Search foods...',
        hi: 'खाद्य पदार्थ खोजें...',
        ta: 'உணவுகளைத் தேடுங்கள்...'
      },
      'filter.all': {
        en: 'All',
        hi: 'सभी',
        ta: 'அனைத்தும்'
      },
      'filter.fruits': {
        en: 'Fruits',
        hi: 'फल',
        ta: 'பழங்கள்'
      },
      'filter.vegetables': {
        en: 'Vegetables',
        hi: 'सब्जियाँ',
        ta: 'காய்கறிகள்'
      },
      'filter.indian': {
        en: 'Indian',
        hi: 'भारतीय',
        ta: 'இந்திய'
      },
      'filter.global': {
        en: 'Global',
        hi: 'वैश्विक',
        ta: 'உலகளாவிய'
      },
      'filter.meat': {
        en: 'Meat',
        hi: 'मांस',
        ta: 'இறைச்சி'
      },
      'filter.seafood': {
        en: 'Seafood',
        hi: 'समुद्री भोजन',
        ta: 'கடல் உணவு'
      },
      'filter.poultry': {
        en: 'Poultry',
        hi: 'पोल्ट्री',
        ta: 'கோழி வகைகள்'
      },
      'filter.non_vegetarian': {
        en: 'Non-Vegetarian',
        hi: 'मांसाहारी',
        ta: 'அசைவம்'
      },
      'popular.foods': {
        en: 'Popular Foods',
        hi: 'लोकप्रिय खाद्य पदार्थ',
        ta: 'பிரபலமான உணவுகள்'
      },
      'view.all': {
        en: 'View All',
        hi: 'सभी देखें',
        ta: 'அனைத்தையும் காட்டு'
      },
      'food.calories': {
        en: 'Calories',
        hi: 'कैलोरी',
        ta: 'கலோரிகள்'
      },
      'food.protein': {
        en: 'Protein',
        hi: 'प्रोटीन',
        ta: 'புரதம்'
      },
      'food.carbs': {
        en: 'Carbs',
        hi: 'कार्ब्स',
        ta: 'கார்ப்ஸ்'
      },
      'food.fat': {
        en: 'Fat',
        hi: 'वसा',
        ta: 'கொழுப்பு'
      },
      'food.fiber': {
        en: 'Fiber',
        hi: 'फाइबर',
        ta: 'நார்ச்சத்து'
      },
      'button.details': {
        en: 'Details',
        hi: 'विवरण',
        ta: 'விவரங்கள்'
      },
      'button.addToCart': {
        en: 'Add to Cart',
        hi: 'कार्ट में जोड़ें',
        ta: 'கார்ட்டில் சேர்'
      },
      'all.foods': {
        en: 'All Foods',
        hi: 'सभी खाद्य पदार्थ',
        ta: 'அனைத்து உணவுகள்'
      },
      'noResults.title': {
        en: 'No results found',
        hi: 'कोई परिणाम नहीं मिला',
        ta: 'முடிவுகள் எதுவும் கிடைக்கவில்லை'
      },
      'noResults.message': {
        en: 'Try adjusting your search or filter to find what you\'re looking for',
        hi: 'आप जो खोज रहे हैं उसे खोजने के लिए अपनी खोज या फ़िल्टर समायोजित करें',
        ta: 'நீங்கள் தேடுவதைக் கண்டறிய உங்கள் தேடலை சரிசெய்யவும்'
      },
      'nutrition.understanding': {
        en: 'Understanding Nutrition Facts',
        hi: 'पोषण तथ्यों को समझना',
        ta: 'ஊட்டச்சத்து உண்மைகளைப் புரிந்துகொள்வது'
      },
      'nutrition.description': {
        en: 'Nutrition facts help you make informed choices about the foods you eat. Learn how to read and interpret nutrition labels for better health.',
        hi: 'पोषण तथ्य आपको अपने द्वारा खाए जाने वाले खाद्य पदार्थों के बारे में सूचित विकल्प बनाने में मदद करते हैं। बेहतर स्वास्थ्य के लिए पोषण लेबल पढ़ना और समझना सीखें।',
        ta: 'ஊட்டச்சத்து உண்மைகள் நீங்கள் சாப்பிடும் உணவுகளைப் பற்றிய தகவலறிந்த தேர்வுகளை மேற்கொள்ள உதவுகின்றன. சிறந்த ஆரோக்கியத்திற்காக ஊட்டச்சத்து லேபிள்களைப் படிக்கவும் விளக்கவும் கற்றுக்கொள்ளுங்கள்.'
      },
      'nutrition.servingSize': {
        en: 'Serving Size',
        hi: 'परोसने का आकार',
        ta: 'பரிமாறும் அளவு'
      },
      'nutrition.servingDescription': {
        en: 'All nutritional values are based on a specific serving size',
        hi: 'सभी पोषण संबंधी मान एक विशिष्ट परोसने के आकार पर आधारित हैं',
        ta: 'அனைத்து ஊட்டச்சத்து மதிப்புகளும் ஒரு குறிப்பிட்ட பரிமாறும் அளவை அடிப்படையாகக் கொண்டவை'
      },
      'nutrition.macronutrients': {
        en: 'Calories & Macronutrients',
        hi: 'कैलोरी और मैक्रोन्यूट्रिएंट्स',
        ta: 'கலோரிகள் & பெருஊட்டச்சத்துக்கள்'
      },
      'nutrition.macronutrientsDescription': {
        en: 'Track calories, protein, carbs and fats for dietary goals',
        hi: 'आहार लक्ष्यों के लिए कैलोरी, प्रोटीन, कार्ब्स और वसा को ट्रैक करें',
        ta: 'உணவு இலக்குகளுக்கான கலோரிகள், புரதம், கார்ப்ஸ் மற்றும் கொழுப்புகளைக் கண்காணிக்கவும்'
      },
      'nutrition.vitamins': {
        en: 'Vitamins & Minerals',
        hi: 'विटामिन और खनिज',
        ta: 'வைட்டமின்கள் & தாதுக்கள்'
      },
      'nutrition.vitaminsDescription': {
        en: 'Understand micronutrients and daily value percentages',
        hi: 'माइक्रोन्यूट्रिएंट्स और दैनिक मूल्य प्रतिशत को समझें',
        ta: 'நுண்ணூட்டச்சத்துக்கள் மற்றும் தினசரி மதிப்பு சதவீதங்களைப் புரிந்துகொள்ளுங்கள்'
      },
      'nutrition.readGuide': {
        en: 'Read our complete guide',
        hi: 'हमारी पूरी गाइड पढ़ें',
        ta: 'எங்கள் முழுமையான வழிகாட்டியைப் படிக்கவும்'
      },
      'nutrition.facts': {
        en: 'Nutrition Facts',
        hi: 'पोषण तथ्य',
        ta: 'ஊட்டச்சத்து உண்மைகள்'
      },
      'nutrition.per100g': {
        en: 'per 100g',
        hi: 'प्रति 100ग्राम',
        ta: '100கி க்கு'
      },
      'cart.title': {
        en: 'Shopping Cart',
        hi: 'शॉपिंग कार्ट',
        ta: 'ஷாப்பிங் கார்ட்'
      },
      'cart.empty': {
        en: 'Your cart is empty',
        hi: 'आपकी कार्ट खाली है',
        ta: 'உங்கள் கார்ட் காலியாக உள்ளது'
      },
      'cart.emptyMessage': {
        en: 'Looks like you haven\'t added any items yet',
        hi: 'ऐसा लगता है कि आपने अभी तक कोई आइटम नहीं जोड़ा है',
        ta: 'நீங்கள் இன்னும் எந்த பொருட்களையும் சேர்க்கவில்லை போல் தெரிகிறது'
      },
      'cart.continueShopping': {
        en: 'Continue Shopping',
        hi: 'खरीदारी जारी रखें',
        ta: 'ஷாப்பிங் தொடரவும்'
      },
      'cart.remove': {
        en: 'Remove',
        hi: 'हटाएं',
        ta: 'அகற்று'
      },
      'cart.subtotal': {
        en: 'Subtotal',
        hi: 'उप-योग',
        ta: 'கூட்டுத்தொகை'
      },
      'cart.shipping': {
        en: 'Shipping and taxes calculated at checkout',
        hi: 'शिपिंग और कर चेकआउट पर गणना की जाएगी',
        ta: 'செக்அவுட்டில் கணக்கிடப்படும் ஷிப்பிங் மற்றும் வரிகள்'
      },
      'button.checkout': {
        en: 'Checkout',
        hi: 'चेकआउट',
        ta: 'செக்அவுட்'
      },
      'button.or': {
        en: 'or',
        hi: 'या',
        ta: 'அல்லது'
      },
      'banner.offline': {
        en: 'Offline — Showing cached data',
        hi: 'ऑफ़लाइन — कैश किया गया डेटा दिखा रहा है',
        ta: 'ஆஃப்லைன் — கேச் செய்யப்பட்ட தரவைக் காட்டுகிறது'
      },
      'button.reconnect': {
        en: 'Reconnect',
        hi: 'पुनः कनेक्ट करें',
        ta: 'மீண்டும் இணைக்கவும்'
      },
      'button.testOffline': {
        en: 'Test Offline',
        hi: 'ऑफ़लाइन परीक्षण करें',
        ta: 'ஆஃப்லைனைச் சோதிக்கவும்'
      },
      'button.goOnline': {
        en: 'Go Online',
        hi: 'ऑनलाइन जाएं',
        ta: 'ஆன்லைனுக்குச் செல்லவும்'
      },
      'footer.description': {
        en: 'Discover global and Indian nutrition information in multiple languages',
        hi: 'कई भाषाओं में वैश्विक और भारतीय पोषण जानकारी का पता लगाएं',
        ta: 'பல மொழிகளில் உலகளாவிய மற்றும் இந்திய ஊட்டச்சத்து தகவல்களைக் கண்டறியுங்கள்'
      },
      'footer.quickLinks': {
        en: 'Quick Links',
        hi: 'त्वरित लिंक',
        ta: 'விரைவு இணைப்புகள்'
      },
      'nav.home': {
        en: 'Home',
        hi: 'होम',
        ta: 'முகப்பு'
      },
      'nav.foods': {
        en: 'Foods',
        hi: 'खाद्य पदार्थ',
        ta: 'உணவுகள்'
      },
      'nav.nutrition': {
        en: 'Nutrition',
        hi: 'पोषण',
        ta: 'ஊட்டச்சத்து'
      },
      'nav.about': {
        en: 'About',
        hi: 'हमारे बारे में',
        ta: 'எங்களைப் பற்றி'
      },
      'nav.contact': {
        en: 'Contact',
        hi: 'संपर्क',
        ta: 'தொடர்பு'
      },
      'footer.features': {
        en: 'Features',
        hi: 'विशेषताएं',
        ta: 'அம்சங்கள்'
      },
      'feature.database': {
        en: 'Nutrition Database',
        hi: 'पोषण डेटाबेस',
        ta: 'ஊட்டச்சத்து தரவுத்தளம்'
      },
      'feature.multilingual': {
        en: 'Multilingual Support',
        hi: 'बहुभाषी समर्थन',
        ta: 'பல மொழி ஆதரவு'
      },
      'feature.offline': {
        en: 'Offline Access',
        hi: 'ऑफलाइन एक्सेस',
        ta: 'ஆஃப்லைன் அணுகல்'
      },
      'footer.newsletter': {
        en: 'Newsletter',
        hi: 'न्यूज़लेटर',
        ta: 'செய்திமடல்'
      },
      'newsletter.description': {
        en: 'Subscribe for nutrition tips and updates',
        hi: 'पोषण युक्तियों और अपडेट के लिए सदस्यता लें',
        ta: 'ஊட்டச்சத்து குறிப்புகள் மற்றும் புதுப்பிப்புகளுக்கு சந்தா செலுத்துங்கள்'
      },
      'button.subscribe': {
        en: 'Subscribe',
        hi: 'सदस्यता लें',
        ta: 'சந்தா'
      },
      'footer.copyright': {
        en: 'All rights reserved.',
        hi: 'सर्वाधिकार सुरक्षित.',
        ta: 'அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.'
      },
      'tag.popular': {
        en: 'Popular',
        hi: 'लोकप्रिय',
        ta: 'பிரபலமானது'
      }
    };

    return translations[key]?.[language] || key;
  }

  return { t, getLocalizedText, language };
}
