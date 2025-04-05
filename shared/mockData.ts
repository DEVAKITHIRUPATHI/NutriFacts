import type { FoodItemClient } from './schema';

// This mock data simulates what would come from our database
// Helper function to create food items with consistent structure
const createFoodItem = (
  id: string,
  name: { en: string, hi: string, ta: string },
  description: { en: string, hi: string, ta: string },
  origin: string,
  price: number,
  image: string,
  category: string[],
  nutrition: {
    calories: number,
    carbs: number,
    protein: number,
    fat: number,
    fiber: number,
    vitamins: Record<string, string>,
    minerals?: Record<string, string>,
    omega3?: number,
    omega6?: number,
    omega9?: number,
    collagen?: number,
    antioxidants?: Record<string, string>,
    probiotics?: Record<string, string>,
  },
  allergens: string[],
  isPopular: boolean,
  healthBenefits?: { en: string, hi: string, ta: string }[],
  recommendedIntake?: { en: string, hi: string, ta: string }
): FoodItemClient => ({
  id,
  name,
  description,
  origin,
  price,
  image,
  category,
  nutrition,
  healthBenefits,
  recommendedIntake,
  allergens,
  isPopular
});

export const foodItems: FoodItemClient[] = [
  {
    id: 'mango_alphonso',
    name: {
      en: 'Alphonso Mango',
      hi: 'हापुस आम',
      ta: 'ஆல்ஃபான்சோ மாம்பழம்'
    },
    description: {
      en: 'Known as the king of mangoes, sweet and aromatic',
      hi: 'आम का राजा, मीठा और सुगंधित',
      ta: 'மாம்பழங்களின் ராஜா, இனிப்பு மற்றும் மணமுள்ள'
    },
    origin: 'India',
    price: 3.99,
    image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&q=80',
    category: ['fruits', 'indian', 'seasonal'],
    nutrition: {
      calories: 70,
      carbs: 17,
      protein: 0.6,
      fat: 0.3,
      fiber: 1.8,
      vitamins: { 'A': '25%', 'C': '60%' }
    },
    allergens: ['vegan', 'gluten-free'],
    isPopular: true
  },
  {
    id: 'avocado',
    name: {
      en: 'Avocado',
      hi: 'एवोकैडो',
      ta: 'வெண்ணெய்ப் பழம்'
    },
    description: {
      en: 'Creamy, nutrient-rich superfood',
      hi: 'क्रीमी, पोषक तत्वों से भरपूर सुपरफूड',
      ta: 'கிரீமி, சத்து நிறைந்த சூப்பர்ஃபுட்'
    },
    origin: 'Mexico',
    price: 2.49,
    image: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&q=80',
    category: ['fruits', 'global', 'keto'],
    nutrition: {
      calories: 160,
      carbs: 9,
      protein: 2,
      fat: 15,
      fiber: 7,
      vitamins: { 'K': '26%', 'E': '10%', 'C': '17%' }
    },
    allergens: ['vegan', 'gluten-free'],
    isPopular: true
  },
  {
    id: 'turmeric',
    name: {
      en: 'Turmeric',
      hi: 'हल्दी',
      ta: 'மஞ்சள்'
    },
    description: {
      en: 'Golden spice with potent anti-inflammatory properties',
      hi: 'सोनहरा मसाला जिसमें शक्तिशाली एंटी-इंफ्लेमेटरी गुण हैं',
      ta: 'சக்திவாய்ந்த அழற்சி எதிர்ப்பு பண்புகளைக் கொண்ட தங்க மசாலா'
    },
    origin: 'India',
    price: 1.99,
    image: 'https://images.unsplash.com/photo-1615485500704-8e505ecbe124?auto=format&fit=crop&q=80',
    category: ['spices', 'indian', 'ayurvedic'],
    nutrition: {
      calories: 29,
      carbs: 6.3,
      protein: 0.9,
      fat: 0.3,
      fiber: 2.1,
      vitamins: { 'C': '4%', 'B6': '5%' }
    },
    allergens: ['vegan', 'gluten-free'],
    isPopular: false
  },
  {
    id: 'quinoa',
    name: {
      en: 'Quinoa',
      hi: 'क्विनोआ',
      ta: 'குயினோவா'
    },
    description: {
      en: 'Complete protein grain with all essential amino acids',
      hi: 'सभी आवश्यक अमीनो एसिड के साथ पूर्ण प्रोटीन अनाज',
      ta: 'அனைத்து அத்தியாவசிய அமினோ அமிலங்களுடன் முழுமையான புரத தானியம்'
    },
    origin: 'Peru',
    price: 4.29,
    image: 'https://images.unsplash.com/photo-1595661677316-e5ece76be7c0?auto=format&fit=crop&q=80',
    category: ['grains', 'global', 'protein'],
    nutrition: {
      calories: 120,
      carbs: 21,
      protein: 4.4,
      fat: 1.9,
      fiber: 2.8,
      vitamins: { 'B6': '10%', 'Folate': '19%', 'Magnesium': '16%' }
    },
    allergens: ['vegan', 'gluten-free'],
    isPopular: false
  },
  {
    id: 'amla',
    name: {
      en: 'Indian Gooseberry (Amla)',
      hi: 'आंवला',
      ta: 'நெல்லிக்காய்'
    },
    description: {
      en: 'Extremely rich in Vitamin C, used in Ayurvedic medicine',
      hi: 'विटामिन C से भरपूर, आयुर्वेदिक दवा में उपयोग किया जाता है',
      ta: 'வைட்டமின் C அதிகம் நிறைந்தது, ஆயுர்வேத மருத்துவத்தில் பயன்படுத்தப்படுகிறது'
    },
    origin: 'India',
    price: 3.49,
    image: 'https://images.unsplash.com/photo-1601055283742-8b27e81b5553?auto=format&fit=crop&q=80',
    category: ['fruits', 'indian', 'ayurvedic'],
    nutrition: {
      calories: 44,
      carbs: 10,
      protein: 0.9,
      fat: 0.1,
      fiber: 4.3,
      vitamins: { 'C': '700%', 'A': '15%' }
    },
    allergens: ['vegan', 'gluten-free'],
    isPopular: true
  },
  {
    id: 'kale',
    name: {
      en: 'Kale',
      hi: 'केल',
      ta: 'கேல்'
    },
    description: {
      en: 'Nutrient-dense leafy green, rich in vitamins and minerals',
      hi: 'पोषक तत्वों से भरपूर पत्तेदार साग, विटामिन और खनिजों से समृद्ध',
      ta: 'சத்துக்கள் நிறைந்த இலைக்கீரை, வைட்டமின்கள் மற்றும் தாதுக்கள் நிறைந்தது'
    },
    origin: 'Mediterranean',
    price: 2.99,
    image: 'https://images.unsplash.com/photo-1524179091875-bf99a9a6af57?auto=format&fit=crop&q=80',
    category: ['vegetables', 'global', 'superfoods'],
    nutrition: {
      calories: 33,
      carbs: 6.7,
      protein: 2.2,
      fat: 0.5,
      fiber: 1.3,
      vitamins: { 'K': '684%', 'A': '206%', 'C': '134%' }
    },
    allergens: ['vegan', 'gluten-free'],
    isPopular: false
  },
  {
    id: 'salmon',
    name: {
      en: 'Atlantic Salmon',
      hi: 'सैल्मन मछली',
      ta: 'சால்மன் மீன்'
    },
    description: {
      en: 'Rich in omega-3 fatty acids and high-quality protein',
      hi: 'ओमेगा-3 फैटी एसिड और उच्च गुणवत्ता वाले प्रोटीन से भरपूर',
      ta: 'ஒமேகா-3 கொழுப்பு அமிலங்கள் மற்றும் உயர் தரமான புரதம் நிறைந்தது'
    },
    origin: 'Norway',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80',
    category: ['seafood', 'global', 'protein'],
    nutrition: {
      calories: 208,
      carbs: 0,
      protein: 20,
      fat: 13,
      fiber: 0,
      vitamins: { 'B12': '106%', 'D': '66%', 'B6': '38%' }
    },
    allergens: ['fish'],
    isPopular: true
  },
  {
    id: 'jackfruit',
    name: {
      en: 'Jackfruit',
      hi: 'कटहल',
      ta: 'பலாப்பழம்'
    },
    description: {
      en: 'World\'s largest tree fruit, can be used as a meat substitute',
      hi: 'दुनिया का सबसे बड़ा पेड़ फल, मांस के विकल्प के रूप में उपयोग किया जा सकता है',
      ta: 'உலகின் மிகப்பெரிய மரப்பழம், இறைச்சி மாற்றாகப் பயன்படுத்தலாம்'
    },
    origin: 'India',
    price: 5.49,
    image: 'https://images.unsplash.com/photo-1591068243886-d8bea9f5c491?auto=format&fit=crop&q=80',
    category: ['fruits', 'indian', 'vegan'],
    nutrition: {
      calories: 95,
      carbs: 24,
      protein: 1.7,
      fat: 0.3,
      fiber: 1.5,
      vitamins: { 'C': '13%', 'B6': '7%' }
    },
    allergens: ['vegan', 'gluten-free'],
    isPopular: false
  },
  {
    id: 'spinach',
    name: {
      en: 'Spinach',
      hi: 'पालक',
      ta: 'கீரை'
    },
    description: {
      en: 'Nutrient-rich leafy green vegetable with mild flavor',
      hi: 'हल्के स्वाद के साथ पोषक तत्वों से भरपूर पत्तेदार हरी सब्जी',
      ta: 'மிதமான சுவையுடன் ஊட்டச்சத்து நிறைந்த இலைக்கறி'
    },
    origin: 'Persia',
    price: 1.99,
    image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&q=80',
    category: ['vegetables', 'global', 'superfoods'],
    nutrition: {
      calories: 23,
      carbs: 3.6,
      protein: 2.9,
      fat: 0.4,
      fiber: 2.2,
      vitamins: { 'K': '604%', 'A': '188%', 'C': '47%' }
    },
    allergens: ['vegan', 'gluten-free'],
    isPopular: true
  },
  {
    id: 'almonds',
    name: {
      en: 'Almonds',
      hi: 'बादाम',
      ta: 'பாதாம்'
    },
    description: {
      en: 'Nutrient-dense tree nuts rich in vitamin E and healthy fats',
      hi: 'विटामिन ई और स्वस्थ वसा से भरपूर पोषक तत्वों से भरपूर पेड़ के नट्स',
      ta: 'வைட்டமின் E மற்றும் ஆரோக்கியமான கொழுப்புகள் நிறைந்த சத்துக்கள் நிறைந்த மரக்கொட்டைகள்'
    },
    origin: 'Middle East',
    price: 7.99,
    image: 'https://images.unsplash.com/photo-1567007601203-767b7dcfcf10?auto=format&fit=crop&q=80',
    category: ['nuts', 'global', 'protein'],
    nutrition: {
      calories: 164,
      carbs: 6.1,
      protein: 6,
      fat: 14.2,
      fiber: 3.5,
      vitamins: { 'E': '37%', 'Manganese': '32%', 'Magnesium': '19%' }
    },
    allergens: ['tree nuts'],
    isPopular: false
  },
  {
    id: 'millet',
    name: {
      en: 'Millet',
      hi: 'बाजरा',
      ta: 'கம்பு'
    },
    description: {
      en: 'Ancient grain that\'s gluten-free and highly nutritious',
      hi: 'प्राचीन अनाज जो ग्लूटेन-फ्री और अत्यधिक पौष्टिक है',
      ta: 'பழங்கால தானியம் குளுட்டன் இல்லாத மற்றும் அதிக ஊட்டச்சத்து நிறைந்தது'
    },
    origin: 'India',
    price: 3.49,
    image: 'https://images.unsplash.com/photo-1622542086073-346a41ce35fe?auto=format&fit=crop&q=80',
    category: ['grains', 'indian', 'gluten-free'],
    nutrition: {
      calories: 378,
      carbs: 73,
      protein: 11,
      fat: 4.2,
      fiber: 8.5,
      vitamins: { 'B3': '30%', 'B6': '15%', 'Magnesium': '22%' }
    },
    allergens: ['vegan', 'gluten-free'],
    isPopular: true
  },
  {
    id: 'paneer',
    name: {
      en: 'Paneer',
      hi: 'पनीर',
      ta: 'பனீர்'
    },
    description: {
      en: 'Fresh Indian cottage cheese with mild, milky flavor',
      hi: 'हल्के, दूधिया स्वाद के साथ ताजा भारतीय पनीर',
      ta: 'மிதமான, பால் சுவையுடன் புதிய இந்திய காட்டேஜ் சீஸ்'
    },
    origin: 'India',
    price: 4.99,
    image: 'https://images.unsplash.com/photo-1627907228175-2bf3e8f030d2?auto=format&fit=crop&q=80',
    category: ['dairy', 'indian', 'protein'],
    nutrition: {
      calories: 265,
      carbs: 3.4,
      protein: 18.3,
      fat: 20.8,
      fiber: 0,
      vitamins: { 'Calcium': '53%', 'Phosphorus': '32%' }
    },
    allergens: ['milk'],
    isPopular: true
  },
  // Add more food items (first batch of the 1000+ items)
  createFoodItem(
    'lentils_red',
    {
      en: 'Red Lentils',
      hi: 'मसूर दाल',
      ta: 'சிவப்பு பருப்பு'
    },
    {
      en: 'Quick-cooking legumes high in protein and fiber',
      hi: 'जल्दी पकने वाली फलियां जो प्रोटीन और फाइबर में उच्च होती हैं',
      ta: 'விரைவாக சமைக்கும் பருப்பு வகைகள் புரதம் மற்றும் நார்ச்சத்து நிறைந்தவை'
    },
    'India',
    2.49,
    'https://images.unsplash.com/photo-1612257999756-9d63c78eee46?auto=format&fit=crop&q=80',
    ['legumes', 'indian', 'protein'],
    {
      calories: 230,
      carbs: 40,
      protein: 18,
      fat: 0.8,
      fiber: 15.6,
      vitamins: { 'Folate': '90%', 'Iron': '37%', 'Magnesium': '18%' }
    },
    ['vegan', 'gluten-free'],
    true,
    [
      {
        en: 'Supports heart health and stable blood sugar',
        hi: 'हृदय स्वास्थ्य और स्थिर रक्त शर्करा का समर्थन करता है',
        ta: 'இதய ஆரோக்கியத்தையும் நிலையான இரத்த சர்க்கரையையும் ஆதரிக்கிறது'
      }
    ],
    {
      en: '1/2 cup cooked daily as part of a balanced meal',
      hi: 'संतुलित भोजन के हिस्से के रूप में रोजाना 1/2 कप पका हुआ',
      ta: 'சமநிலையான உணவின் ஒரு பகுதியாக தினமும் 1/2 கப் சமைத்தது'
    }
  ),
  createFoodItem(
    'cinnamon',
    {
      en: 'Cinnamon',
      hi: 'दालचीनी',
      ta: 'இலவங்கப்பட்டை'
    },
    {
      en: 'Sweet and warming spice with anti-inflammatory properties',
      hi: 'एंटी-इंफ्लेमेटरी गुणों के साथ मीठा और गर्म मसाला',
      ta: 'அழற்சி எதிர்ப்பு பண்புகளைக் கொண்ட இனிப்பு மற்றும் சூடான மசாலா'
    },
    'Sri Lanka',
    3.29,
    'https://images.unsplash.com/photo-1614326005381-344425877e0a?auto=format&fit=crop&q=80',
    ['spices', 'global', 'ayurvedic'],
    {
      calories: 6,
      carbs: 2,
      protein: 0.1,
      fat: 0.1,
      fiber: 1.4,
      vitamins: { 'Manganese': '22%', 'Calcium': '8%' },
      antioxidants: { 'Cinnamaldehyde': 'high', 'Polyphenols': 'high' }
    },
    ['vegan', 'gluten-free'],
    true,
    [
      {
        en: 'May help regulate blood sugar and improve insulin sensitivity',
        hi: 'रक्त शर्करा को नियंत्रित करने और इंसुलिन संवेदनशीलता में सुधार करने में मदद कर सकता है',
        ta: 'இரத்த சர்க்கரையை ஒழுங்குபடுத்தவும் இன்சுலின் உணர்திறனை மேம்படுத்தவும் உதவும்'
      }
    ],
    {
      en: '1/4 to 1 teaspoon daily in beverages or food',
      hi: 'पेय या भोजन में दैनिक 1/4 से 1 चम्मच',
      ta: 'பானங்கள் அல்லது உணவில் தினசரி 1/4 முதல் 1 தேக்கரண்டி'
    }
  ),
  createFoodItem(
    'sweet_potato',
    {
      en: 'Sweet Potato',
      hi: 'शकरकंद',
      ta: 'சர்க்கரைவள்ளிக் கிழங்கு'
    },
    {
      en: 'Nutrient-rich root vegetable with vibrant orange flesh',
      hi: 'जीवंत नारंगी रंग के साथ पोषक तत्वों से भरपूर जड़ वाली सब्जी',
      ta: 'பிரகாசமான ஆரஞ்சு நிறமுள்ள ஊட்டச்சத்து நிறைந்த வேர் காய்கறி'
    },
    'Central America',
    1.99,
    'https://images.unsplash.com/photo-1596620740331-304a92a7948f?auto=format&fit=crop&q=80',
    ['vegetables', 'global', 'superfoods'],
    {
      calories: 86,
      carbs: 20,
      protein: 1.6,
      fat: 0.1,
      fiber: 3,
      vitamins: { 'A': '438%', 'C': '37%', 'B6': '15%' }
    },
    ['vegan', 'gluten-free'],
    true,
    [
      {
        en: 'Supports eye health and immune function',
        hi: 'आंखों के स्वास्थ्य और प्रतिरक्षा कार्य का समर्थन करता है',
        ta: 'கண் ஆரோக்கியம் மற்றும் நோய் எதிர்ப்பு செயல்பாட்டை ஆதரிக்கிறது'
      }
    ],
    {
      en: 'One medium sweet potato 3-5 times per week',
      hi: 'एक मध्यम शकरकंद प्रति सप्ताह 3-5 बार',
      ta: 'ஒரு நடுத்தர சர்க்கரைவள்ளிக் கிழங்கு வாரத்திற்கு 3-5 முறை'
    }
  ),
  createFoodItem(
    'flaxseeds',
    {
      en: 'Flaxseeds',
      hi: 'अलसी के बीज',
      ta: 'ஆளிவிதை'
    },
    {
      en: 'Small seeds packed with omega-3 fatty acids and fiber',
      hi: 'ओमेगा-3 फैटी एसिड और फाइबर से भरपूर छोटे बीज',
      ta: 'ஒமேகா-3 கொழுப்பு அமிலங்கள் மற்றும் நார்ச்சத்து நிறைந்த சிறிய விதைகள்'
    },
    'Middle East',
    3.49,
    'https://images.unsplash.com/photo-1541083039736-fb320dec4509?auto=format&fit=crop&q=80',
    ['seeds', 'global', 'omega-3'],
    {
      calories: 55,
      carbs: 3,
      protein: 1.9,
      fat: 4.3,
      fiber: 2.8,
      vitamins: { 'Thiamin': '8%', 'Magnesium': '7%' },
      omega3: 2.5
    },
    ['vegan', 'gluten-free'],
    false,
    [
      {
        en: 'May help reduce inflammation and improve heart health',
        hi: 'सूजन को कम करने और हृदय स्वास्थ्य में सुधार करने में मदद कर सकता है',
        ta: 'அழற்சியைக் குறைக்கவும் இதய ஆரோக்கியத்தை மேம்படுத்தவும் உதவலாம்'
      }
    ],
    {
      en: '1-2 tablespoons ground flaxseeds daily',
      hi: 'रोजाना 1-2 बड़े चम्मच पिसे हुए अलसी के बीज',
      ta: 'தினசரி 1-2 மேஜைக்கரண்டி அரைத்த ஆளிவிதைகள்'
    }
  ),
  createFoodItem(
    'greek_yogurt',
    {
      en: 'Greek Yogurt',
      hi: 'ग्रीक दही',
      ta: 'கிரேக்க தயிர்'
    },
    {
      en: 'Thick, creamy yogurt strained to remove whey, higher in protein',
      hi: 'व्हे को हटाने के लिए छाना हुआ, मोटा, क्रीमी दही, प्रोटीन में अधिक',
      ta: 'வே நீக்கப்பட்ட கெட்டியான, கிரீமியான தயிர், அதிக புரதம் உள்ளது'
    },
    'Greece',
    4.99,
    'https://images.unsplash.com/photo-1609501967126-1a42085a3c7d?auto=format&fit=crop&q=80',
    ['dairy', 'global', 'protein'],
    {
      calories: 100,
      carbs: 3.6,
      protein: 17,
      fat: 0.4,
      fiber: 0,
      vitamins: { 'Calcium': '18%', 'B12': '15%', 'Phosphorus': '20%' },
      probiotics: { 'Lactobacillus': 'high', 'Bifidobacteria': 'medium' }
    },
    ['milk'],
    true,
    [
      {
        en: 'Supports digestive health and provides bone-building calcium',
        hi: 'पाचन स्वास्थ्य का समर्थन करता है और हड्डी-निर्माण कैल्शियम प्रदान करता है',
        ta: 'செரிமான ஆரோக்கியத்தை ஆதரிக்கிறது மற்றும் எலும்பு-உருவாக்கும் கால்சியத்தை வழங்குகிறது'
      }
    ],
    {
      en: '3/4 - 1 cup daily as a protein source',
      hi: 'प्रोटीन स्रोत के रूप में रोजाना 3/4 - 1 कप',
      ta: 'புரத ஆதாரமாக தினசரி 3/4 - 1 கப்'
    }
  ),
  createFoodItem(
    'blueberries',
    {
      en: 'Blueberries',
      hi: 'ब्लूबेरी',
      ta: 'புளூபெர்ரீஸ்'
    },
    {
      en: 'Small berries with powerful antioxidant properties',
      hi: 'शक्तिशाली एंटीऑक्सीडेंट गुणों वाली छोटी बेरीज़',
      ta: 'சக்திவாய்ந்த ஆன்டிஆக்ஸிடன்ட் பண்புகளைக் கொண்ட சிறிய பெர்ரிகள்'
    },
    'North America',
    4.49,
    'https://images.unsplash.com/photo-1502741224143-90386d7f8c82?auto=format&fit=crop&q=80',
    ['fruits', 'global', 'superfoods'],
    {
      calories: 57,
      carbs: 14.5,
      protein: 0.7,
      fat: 0.3,
      fiber: 2.4,
      vitamins: { 'C': '16%', 'K': '24%', 'Manganese': '22%' },
      antioxidants: { 'Anthocyanins': 'very high', 'Flavonoids': 'high' }
    },
    ['vegan', 'gluten-free'],
    true,
    [
      {
        en: 'Supports brain health and may improve memory',
        hi: 'मस्तिष्क के स्वास्थ्य का समर्थन करता है और याददाश्त में सुधार कर सकता है',
        ta: 'மூளை ஆரோக்கியத்தை ஆதரிக்கிறது மற்றும் நினைவாற்றலை மேம்படுத்தலாம்'
      }
    ],
    {
      en: '1/2 - 1 cup daily, fresh or frozen',
      hi: 'रोजाना 1/2 - 1 कप, ताजा या जमे हुए',
      ta: 'தினசரி 1/2 - 1 கப், பிரெஷ் அல்லது ஃப்ரோசன்'
    }
  ),
  createFoodItem(
    'chickpeas',
    {
      en: 'Chickpeas',
      hi: 'चने',
      ta: 'கொண்டைக்கடலை'
    },
    {
      en: 'Versatile legumes with nutty flavor, high in protein and fiber',
      hi: 'मेवेदार स्वाद वाली बहुमुखी फलियां, प्रोटीन और फाइबर में उच्च',
      ta: 'நட்டி சுவையுடன் பலதரப்பட்ட பயன்பாடுகளுக்கான பருப்பு வகை, புரதம் மற்றும் நார்ச்சத்து அதிகம்'
    },
    'Middle East',
    2.19,
    'https://images.unsplash.com/photo-1623855244183-52fd8d3ce2f7?auto=format&fit=crop&q=80',
    ['legumes', 'global', 'protein'],
    {
      calories: 164,
      carbs: 27,
      protein: 8.9,
      fat: 2.6,
      fiber: 7.6,
      vitamins: { 'Folate': '71%', 'Iron': '26%', 'Phosphorus': '28%' }
    },
    ['vegan', 'gluten-free'],
    true,
    [
      {
        en: 'Supports digestive health and helps stabilize blood sugar',
        hi: 'पाचन स्वास्थ्य का समर्थन करता है और रक्त शर्करा को स्थिर करने में मदद करता है',
        ta: 'செரிமான ஆரோக்கியத்தை ஆதரிக்கிறது மற்றும் இரத்த சர்க்கரையை நிலைப்படுத்த உதவுகிறது'
      }
    ],
    {
      en: '1/2 cup cooked, 3-4 times per week',
      hi: '1/2 कप पका हुआ, प्रति सप्ताह 3-4 बार',
      ta: '1/2 கப் சமைத்தது, வாரத்திற்கு 3-4 முறை'
    }
  ),
  createFoodItem(
    'olive_oil_extra_virgin',
    {
      en: 'Extra Virgin Olive Oil',
      hi: 'एक्स्ट्रा वर्जिन जैतून का तेल',
      ta: 'எக்ஸ்ட்ரா வர்ஜின் ஆலிவ் ஆயில்'
    },
    {
      en: 'Cold-pressed oil from olives with rich, fruity flavor',
      hi: 'समृद्ध, फलदार स्वाद के साथ जैतून से कोल्ड-प्रेस्ड तेल',
      ta: 'வளமான, பழச்சுவையுடன் ஆலிவ்களில் இருந்து குளிர் அழுத்தப்பட்ட எண்ணெய்'
    },
    'Mediterranean',
    8.99,
    'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&q=80',
    ['oils', 'global', 'mediterranean'],
    {
      calories: 119,
      carbs: 0,
      protein: 0,
      fat: 13.5,
      fiber: 0,
      vitamins: { 'E': '12.9%', 'K': '7%' },
      omega9: 10.2
    },
    ['vegan', 'gluten-free'],
    true,
    [
      {
        en: 'Contains heart-healthy monounsaturated fats and antioxidants',
        hi: 'हृदय-स्वस्थ मोनोअनसैचुरेटेड वसा और एंटीऑक्सिडेंट्स होते हैं',
        ta: 'இதய ஆரோக்கியமான மோனோஅன்சாச்சுரேட்டட் கொழுப்புகள் மற்றும் ஆன்டிஆக்ஸிடன்ட்கள் உள்ளன'
      }
    ],
    {
      en: '1-2 tablespoons daily for cooking or dressing',
      hi: 'खाना पकाने या ड्रेसिंग के लिए रोजाना 1-2 बड़े चम्मच',
      ta: 'சமைப்பதற்கு அல்லது சாலட் டிரஸ்ஸிங் க்கு தினசரி 1-2 மேஜைக்கரண்டி'
    }
  ),
  createFoodItem(
    'oats',
    {
      en: 'Rolled Oats',
      hi: 'रोल्ड ओट्स',
      ta: 'ரோல்டு ஓட்ஸ்'
    },
    {
      en: 'Whole grain breakfast cereal high in soluble fiber',
      hi: 'घुलनशील फाइबर में उच्च होल ग्रेन नाश्ता अनाज',
      ta: 'கரையக்கூடிய நார்ச்சத்து அதிகம் கொண்ட முழு தானிய காலை உணவு'
    },
    'Scotland',
    3.29,
    'https://images.unsplash.com/photo-1471193945509-9ad0617afabf?auto=format&fit=crop&q=80',
    ['grains', 'global', 'breakfast'],
    {
      calories: 150,
      carbs: 27,
      protein: 5,
      fat: 2.5,
      fiber: 4,
      vitamins: { 'Manganese': '191%', 'Phosphorus': '41%', 'Magnesium': '34%' }
    },
    ['vegan'],
    true,
    [
      {
        en: 'May help lower cholesterol and improve blood sugar control',
        hi: 'कोलेस्ट्रॉल को कम करने और रक्त शर्करा नियंत्रण में सुधार करने में मदद कर सकता है',
        ta: 'கொலஸ்ட்ரால் அளவைக் குறைக்கவும் இரத்த சர்க்கரை கட்டுப்பாட்டை மேம்படுத்தவும் உதவலாம்'
      }
    ],
    {
      en: '1/2 cup dry oats daily prepared as porridge',
      hi: 'रोजाना 1/2 कप सूखे ओट्स को दलिया के रूप में तैयार किया गया',
      ta: 'தினசரி 1/2 கப் உலர் ஓட்ஸை கஞ்சியாக தயாரிக்கவும்'
    }
  ),
  createFoodItem(
    'garlic',
    {
      en: 'Garlic',
      hi: 'लहसुन',
      ta: 'பூண்டு'
    },
    {
      en: 'Pungent aromatic bulb used as a flavor foundation in cooking',
      hi: 'खाना पकाने में फ्लेवर फाउंडेशन के रूप में उपयोग किया जाने वाला तीखा सुगंधित बल्ब',
      ta: 'சமையலில் சுவை அடித்தளமாகப் பயன்படுத்தப்படும் கார மணமுள்ள பல்பு'
    },
    'Central Asia',
    0.99,
    'https://images.unsplash.com/photo-1615475689030-8c9f177d5e37?auto=format&fit=crop&q=80',
    ['spices', 'global', 'medicine'],
    {
      calories: 4,
      carbs: 1,
      protein: 0.2,
      fat: 0,
      fiber: 0.1,
      vitamins: { 'Manganese': '2%', 'Vitamin B6': '2%', 'Vitamin C': '1%' },
      antioxidants: { 'Allicin': 'high', 'Sulfur compounds': 'high' }
    },
    ['vegan', 'gluten-free'],
    true,
    [
      {
        en: 'Has antimicrobial properties and may support immune function',
        hi: 'एंटीमाइक्रोबियल गुण होते हैं और प्रतिरक्षा कार्य का समर्थन कर सकते हैं',
        ta: 'நுண்ணுயிர் எதிர்ப்பு பண்புகளைக் கொண்டுள்ளது மற்றும் நோய் எதிர்ப்பு செயல்பாட்டை ஆதரிக்கலாம்'
      }
    ],
    {
      en: '1-2 cloves daily, crushed or minced in food',
      hi: 'रोजाना 1-2 लौंग, भोजन में कुचले या बारीक कटे हुए',
      ta: 'தினசரி 1-2 பற்கள், உணவில் நசுக்கியது அல்லது நறுக்கியது'
    }
  ),
  // Adding chicken meat
  createFoodItem(
    'chicken_breast',
    {
      en: 'Chicken Breast',
      hi: 'चिकन ब्रेस्ट',
      ta: 'சிக்கன் மார்புக்கறி'
    },
    {
      en: 'Lean, boneless cut of poultry meat, high in protein',
      hi: 'प्रोटीन में उच्च, दुबला, हड्डी रहित पोल्ट्री मांस',
      ta: 'புரதம் நிறைந்த, மெலிந்த, எலும்பு இல்லாத கோழி இறைச்சி'
    },
    'Global',
    6.99,
    'https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&q=80',
    ['poultry', 'meat', 'protein'],
    {
      calories: 165,
      carbs: 0,
      protein: 31,
      fat: 3.6,
      fiber: 0,
      vitamins: { 'B6': '25%', 'Niacin': '70%', 'Phosphorus': '17%' }
    },
    ['animal', 'bird'],
    true,
    [
      {
        en: 'Supports muscle growth and tissue repair',
        hi: 'मांसपेशियों के विकास और ऊतक मरम्मत का समर्थन करता है',
        ta: 'தசை வளர்ச்சி மற்றும் திசு பழுதுபார்ப்பை ஆதரிக்கிறது'
      }
    ],
    {
      en: '3-4 ounces as part of a balanced meal',
      hi: 'संतुलित भोजन के हिस्से के रूप में 3-4 औंस',
      ta: 'சமநிலையான உணவின் ஒரு பகுதியாக 3-4 அவுன்ஸ்'
    }
  ),
  createFoodItem(
    'chicken_thighs',
    {
      en: 'Chicken Thighs',
      hi: 'चिकन थाई',
      ta: 'சிக்கன் தொடைக்கறி'
    },
    {
      en: 'Juicy, flavorful dark meat cut from the chicken leg',
      hi: 'चिकन लेग से काटा गया रसदार, स्वादिष्ट डार्क मीट',
      ta: 'கோழி காலில் இருந்து வெட்டப்பட்ட சாறுள்ள, சுவையான இருண்ட இறைச்சி'
    },
    'Global',
    5.99,
    'https://images.unsplash.com/photo-1622118713114-ac2475a7b0c1?auto=format&fit=crop&q=80',
    ['poultry', 'meat', 'protein'],
    {
      calories: 209,
      carbs: 0,
      protein: 26,
      fat: 10.9,
      fiber: 0,
      vitamins: { 'B12': '12%', 'Zinc': '15%', 'Iron': '7%' }
    },
    ['animal', 'bird'],
    false,
    [
      {
        en: 'Provides complete protein and essential minerals',
        hi: 'पूर्ण प्रोटीन और आवश्यक खनिज प्रदान करता है',
        ta: 'முழுமையான புரதம் மற்றும் அத்தியாவசிய தாதுக்களை வழங்குகிறது'
      }
    ],
    {
      en: '3-4 ounces, 2-3 times per week',
      hi: '3-4 औंस, प्रति सप्ताह 2-3 बार',
      ta: '3-4 அவுன்ஸ், வாரத்திற்கு 2-3 முறை'
    }
  ),
  // Adding river foods like crab
  createFoodItem(
    'crab',
    {
      en: 'Blue Crab',
      hi: 'नीला केकड़ा',
      ta: 'நீல நண்டு'
    },
    {
      en: 'Sweet, delicate shellfish with tender meat',
      hi: 'कोमल मांस के साथ मीठे, नाजुक शेलफिश',
      ta: 'மென்மையான இறைச்சியுடன் இனிப்பான, மெல்லிய சிப்பி'
    },
    'North America',
    14.99,
    'https://images.unsplash.com/photo-1565333280022-9b7f020c67e3?auto=format&fit=crop&q=80',
    ['seafood', 'shellfish', 'protein'],
    {
      calories: 98,
      carbs: 0,
      protein: 20.2,
      fat: 1.5,
      fiber: 0,
      vitamins: { 'B12': '339%', 'Copper': '85%', 'Zinc': '43%' }
    },
    ['shellfish', 'crustacean'],
    true,
    [
      {
        en: 'Rich source of omega-3 fatty acids and essential minerals',
        hi: 'ओमेगा-3 फैटी एसिड और आवश्यक खनिजों का समृद्ध स्रोत',
        ta: 'ஒமேகா-3 கொழுப்பு அமிலங்கள் மற்றும் அத்தியாவசிய தாதுக்களின் செறிவான ஆதாரம்'
      }
    ],
    {
      en: '4-6 ounces, 1-2 times per week',
      hi: '4-6 औंस, प्रति सप्ताह 1-2 बार',
      ta: '4-6 அவுன்ஸ், வாரத்திற்கு 1-2 முறை'
    }
  ),
  createFoodItem(
    'river_prawns',
    {
      en: 'Freshwater Prawns',
      hi: 'मीठे पानी के झींगे',
      ta: 'நன்னீர் இறால்'
    },
    {
      en: 'Tender, sweet river crustaceans with firm texture',
      hi: 'दृढ़ बनावट के साथ कोमल, मीठे नदी के क्रस्टेशियन',
      ta: 'உறுதியான அமைப்புடன் மென்மையான, இனிப்பான நதி உணவினம்'
    },
    'Southeast Asia',
    16.99,
    'https://images.unsplash.com/photo-1579191203419-1085567db843?auto=format&fit=crop&q=80',
    ['seafood', 'shellfish', 'river'],
    {
      calories: 119,
      carbs: 0.2,
      protein: 22.6,
      fat: 2.7,
      fiber: 0,
      vitamins: { 'B12': '117%', 'Selenium': '67%', 'Phosphorus': '25%' }
    },
    ['shellfish', 'crustacean'],
    false,
    [
      {
        en: 'Excellent source of lean protein and essential nutrients',
        hi: 'दुबले प्रोटीन और आवश्यक पोषक तत्वों का उत्कृष्ट स्रोत',
        ta: 'குறைந்த கொழுப்புள்ள புரதம் மற்றும் அத்தியாவசிய ஊட்டச்சத்துக்களின் சிறந்த ஆதாரம்'
      }
    ],
    {
      en: '4-6 ounces as part of a meal, 1-2 times per week',
      hi: 'भोजन के हिस्से के रूप में 4-6 औंस, प्रति सप्ताह 1-2 बार',
      ta: 'உணவின் ஒரு பகுதியாக 4-6 அவுன்ஸ், வாரத்திற்கு 1-2 முறை'
    }
  ),
  // Adding grocery staples
  createFoodItem(
    'rice_basmati',
    {
      en: 'Basmati Rice',
      hi: 'बासमती चावल',
      ta: 'பாசுமதி அரிசி'
    },
    {
      en: 'Aromatic long-grain rice with distinctive flavor',
      hi: 'विशिष्ट स्वाद के साथ सुगंधित लंबे दाने वाले चावल',
      ta: 'தனித்துவமான சுவையுடன் மணமுள்ள நீண்ட தானிய அரிசி'
    },
    'India',
    4.49,
    'https://images.unsplash.com/photo-1586201375761-83865001e8ac?auto=format&fit=crop&q=80',
    ['grains', 'indian', 'staple'],
    {
      calories: 190,
      carbs: 45,
      protein: 3.8,
      fat: 0.2,
      fiber: 0.5,
      vitamins: { 'Manganese': '19%', 'Selenium': '11%' }
    },
    ['vegan', 'gluten-free'],
    true,
    [
      {
        en: 'Low glycemic index version of rice for sustained energy',
        hi: 'निरंतर ऊर्जा के लिए चावल का कम ग्लाइसेमिक इंडेक्स वाला संस्करण',
        ta: 'நீடித்த ஆற்றலுக்கான குறைந்த கிளைசெமிக் குறியீடு அரிசி வகை'
      }
    ],
    {
      en: '1/2 - 3/4 cup cooked as part of a balanced meal',
      hi: 'संतुलित भोजन के हिस्से के रूप में 1/2 - 3/4 कप पका हुआ',
      ta: 'சமநிலையான உணவின் ஒரு பகுதியாக 1/2 - 3/4 கப் சமைத்தது'
    }
  ),
  createFoodItem(
    'eggs',
    {
      en: 'Eggs',
      hi: 'अंडे',
      ta: 'முட்டைகள்'
    },
    {
      en: 'Versatile, nutrient-dense food with complete protein',
      hi: 'पूर्ण प्रोटीन के साथ बहुमुखी, पोषक तत्वों से भरपूर खाद्य पदार्थ',
      ta: 'முழுமையான புரதத்துடன் பல்துறை, சத்து நிறைந்த உணவு'
    },
    'Global',
    3.49,
    'https://images.unsplash.com/photo-1506976785307-8732e854ad03?auto=format&fit=crop&q=80',
    ['protein', 'animal', 'breakfast'],
    {
      calories: 72,
      carbs: 0.4,
      protein: 6.3,
      fat: 5,
      fiber: 0,
      vitamins: { 'B12': '23%', 'Selenium': '28%', 'Vitamin D': '6%' },
      omega3: 0.1
    },
    ['eggs'],
    true,
    [
      {
        en: 'Contains all essential amino acids and important nutrients for brain health',
        hi: 'सभी आवश्यक अमीनो एसिड और मस्तिष्क स्वास्थ्य के लिए महत्वपूर्ण पोषक तत्व होते हैं',
        ta: 'அனைத்து அத்தியாவசிய அமினோ அமிலங்கள் மற்றும் மூளை ஆரோக்கியத்திற்கான முக்கியமான ஊட்டச்சத்துக்களைக் கொண்டுள்ளது'
      }
    ],
    {
      en: '1-2 eggs daily for most healthy adults',
      hi: 'अधिकांश स्वस्थ वयस्कों के लिए रोजाना 1-2 अंडे',
      ta: 'பெரும்பாலான ஆரோக்கியமான வயது வந்தவர்களுக்கு தினசரி 1-2 முட்டைகள்'
    }
  ),
  createFoodItem(
    'milk',
    {
      en: 'Whole Milk',
      hi: 'पूरा दूध',
      ta: 'முழு பால்'
    },
    {
      en: 'Nutrient-rich dairy beverage with protein, fat, and carbohydrates',
      hi: 'प्रोटीन, वसा और कार्बोहाइड्रेट के साथ पोषक तत्वों से भरपूर डेयरी पेय',
      ta: 'புரதம், கொழுப்பு மற்றும் கார்போஹைட்ரேட்டுகள் கொண்ட ஊட்டச்சத்து நிறைந்த பால் பானம்'
    },
    'Global',
    2.99,
    'https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&q=80',
    ['dairy', 'beverage', 'calcium'],
    {
      calories: 149,
      carbs: 12,
      protein: 8,
      fat: 8,
      fiber: 0,
      vitamins: { 'Calcium': '28%', 'Vitamin D': '24%', 'B12': '18%' }
    },
    ['milk', 'dairy'],
    true,
    [
      {
        en: 'Supports bone health and provides complete protein',
        hi: 'हड्डी के स्वास्थ्य का समर्थन करता है और पूर्ण प्रोटीन प्रदान करता है',
        ta: 'எலும்பு ஆரோக்கியத்தை ஆதரிக்கிறது மற்றும் முழுமையான புரதத்தை வழங்குகிறது'
      }
    ],
    {
      en: '1-2 cups daily as part of a balanced diet',
      hi: 'संतुलित आहार के हिस्से के रूप में रोजाना 1-2 कप',
      ta: 'சமநிலையான உணவின் ஒரு பகுதியாக தினசரி 1-2 கப்'
    }
  ),
  createFoodItem(
    'tomatoes',
    {
      en: 'Tomatoes',
      hi: 'टमाटर',
      ta: 'தக்காளி'
    },
    {
      en: 'Versatile red fruit used as a vegetable in cooking',
      hi: 'खाना पकाने में सब्जी के रूप में इस्तेमाल किया जाने वाला बहुमुखी लाल फल',
      ta: 'சமையலில் காய்கறியாகப் பயன்படுத்தப்படும் பல்துறை சிவப்பு பழம்'
    },
    'South America',
    1.99,
    'https://images.unsplash.com/photo-1561136594-7f68413baa99?auto=format&fit=crop&q=80',
    ['vegetables', 'fruits', 'nightshade'],
    {
      calories: 18,
      carbs: 3.9,
      protein: 0.9,
      fat: 0.2,
      fiber: 1.2,
      vitamins: { 'C': '28%', 'K': '12%', 'A': '20%' },
      antioxidants: { 'Lycopene': 'very high', 'Beta-carotene': 'high' }
    },
    ['vegan', 'gluten-free'],
    true,
    [
      {
        en: 'Rich in lycopene, which may protect against certain cancers',
        hi: 'लाइकोपीन से भरपूर, जो कुछ कैंसर से सुरक्षा कर सकता है',
        ta: 'லைகோபீன் நிறைந்தது, இது சில புற்றுநோய்களில் இருந்து பாதுகாக்கலாம்'
      }
    ],
    {
      en: '1-2 medium tomatoes daily in various forms',
      hi: 'विभिन्न रूपों में रोजाना 1-2 मध्यम टमाटर',
      ta: 'தினசரி 1-2 நடுத்தர தக்காளிகள் பல்வேறு வடிவங்களில்'
    }
  ),
  createFoodItem(
    'ginger',
    {
      en: 'Ginger',
      hi: 'अदरक',
      ta: 'இஞ்சி'
    },
    {
      en: 'Pungent, spicy root used in cooking and traditional medicine',
      hi: 'खाना पकाने और पारंपरिक चिकित्सा में उपयोग किया जाने वाला तीखा, मसालेदार जड़',
      ta: 'சமையலிலும் பாரம்பரிய மருத்துவத்திலும் பயன்படுத்தப்படும் காரமான, மசாலா வேர்'
    },
    'Southeast Asia',
    2.49,
    'https://images.unsplash.com/photo-1574856344991-aaa31b6f4ce3?auto=format&fit=crop&q=80',
    ['spices', 'roots', 'medicinal'],
    {
      calories: 80,
      carbs: 17.8,
      protein: 1.8,
      fat: 0.8,
      fiber: 2,
      vitamins: { 'Magnesium': '7%', 'Vitamin B6': '5%', 'Potassium': '5%' },
      antioxidants: { 'Gingerol': 'high', 'Shogaol': 'high' }
    },
    ['vegan', 'gluten-free'],
    false,
    [
      {
        en: 'Natural anti-nausea remedy with anti-inflammatory properties',
        hi: 'एंटी-इंफ्लेमेटरी गुणों के साथ प्राकृतिक एंटी-मतली उपाय',
        ta: 'அழற்சி எதிர்ப்பு பண்புகளுடன் இயற்கை குமட்டல் எதிர்ப்பு மருந்து'
      }
    ],
    {
      en: '1-2 teaspoons freshly grated daily in food or tea',
      hi: 'खाने या चाय में रोजाना 1-2 चम्मच ताजा कसा हुआ',
      ta: 'உணவு அல்லது தேநீரில் தினசரி 1-2 தேக்கரண்டி புதிதாக துருவியது'
    }
  ),
  createFoodItem(
    'cucumber',
    {
      en: 'Cucumber',
      hi: 'खीरा',
      ta: 'வெள்ளரிக்காய்'
    },
    {
      en: 'Cool, crisp vegetable with high water content',
      hi: 'उच्च पानी की मात्रा के साथ ठंडी, कुरकुरी सब्जी',
      ta: 'அதிக நீர் அளவு கொண்ட குளிர்ந்த, நொறுங்கும் காய்கறி'
    },
    'India',
    0.99,
    'https://images.unsplash.com/photo-1604977042946-1eecc30f269e?auto=format&fit=crop&q=80',
    ['vegetables', 'salad', 'hydrating'],
    {
      calories: 16,
      carbs: 3.6,
      protein: 0.7,
      fat: 0.1,
      fiber: 0.5,
      vitamins: { 'K': '16%', 'C': '5%', 'Magnesium': '4%' }
    },
    ['vegan', 'gluten-free'],
    false,
    [
      {
        en: 'Supports hydration and contains compounds that may reduce inflammation',
        hi: 'हाइड्रेशन का समर्थन करता है और ऐसे यौगिक होते हैं जो सूजन को कम कर सकते हैं',
        ta: 'நீரேற்றத்தை ஆதரிக்கிறது மற்றும் அழற்சியைக் குறைக்கக்கூடிய சேர்மங்களைக் கொண்டுள்ளது'
      }
    ],
    {
      en: '1/2 - 1 medium cucumber daily in salads or as a snack',
      hi: 'सलाद में या नाश्ते के रूप में रोजाना 1/2 - 1 मध्यम खीरा',
      ta: 'சலாட்களில் அல்லது சிற்றுண்டியாக தினசரி 1/2 - 1 நடுத்தர வெள்ளரிக்காய்'
    }
  ),
  createFoodItem(
    'mango_green',
    {
      en: 'Green Mango',
      hi: 'कच्चा आम',
      ta: 'மாங்காய்'
    },
    {
      en: 'Unripe mango with sour, tangy flavor used in cooking',
      hi: 'खाना पकाने में उपयोग किया जाने वाला खट्टे, तीखे स्वाद वाला कच्चा आम',
      ta: 'சமையலில் பயன்படுத்தப்படும் புளிப்பு, காரமான சுவையுடன் கூடிய முற்றாத மாம்பழம்'
    },
    'India',
    2.99,
    'https://images.unsplash.com/photo-1590677702647-190120787dae?auto=format&fit=crop&q=80',
    ['fruits', 'unripe', 'indian'],
    {
      calories: 60,
      carbs: 15,
      protein: 0.8,
      fat: 0.2,
      fiber: 1.6,
      vitamins: { 'C': '50%', 'A': '10%', 'B6': '5%' }
    },
    ['vegan', 'gluten-free'],
    false,
    [
      {
        en: 'Rich in vitamin C and may aid digestion',
        hi: 'विटामिन सी से भरपूर और पाचन में सहायता कर सकता है',
        ta: 'வைட்டமின் சி நிறைந்தது மற்றும் செரிமானத்திற்கு உதவலாம்'
      }
    ],
    {
      en: 'Small amount as a condiment or in chutneys',
      hi: 'कॉन्डिमेंट के रूप में या चटनी में थोड़ी मात्रा',
      ta: 'தொட்டுக்கொள்ளும் உணவாக அல்லது சட்னிகளில் சிறிய அளவு'
    }
  ),
  createFoodItem(
    'cauliflower',
    {
      en: 'Cauliflower',
      hi: 'फूलगोभी',
      ta: 'காலிஃப்ளவர்'
    },
    {
      en: 'Versatile cruciferous vegetable with mild flavor',
      hi: 'हल्के स्वाद के साथ बहुमुखी क्रूसिफेरस सब्जी',
      ta: 'மிதமான சுவையுடன் பல்துறை குறுக்கு வகை காய்கறி'
    },
    'Mediterranean',
    2.49,
    'https://images.unsplash.com/photo-1568584711075-3d021a7c3ca3?auto=format&fit=crop&q=80',
    ['vegetables', 'cruciferous', 'keto'],
    {
      calories: 25,
      carbs: 5,
      protein: 2,
      fat: 0.1,
      fiber: 2.5,
      vitamins: { 'C': '77%', 'K': '20%', 'B6': '11%' },
      antioxidants: { 'Glucosinolates': 'high', 'Sulforaphane': 'high' }
    },
    ['vegan', 'gluten-free'],
    true,
    [
      {
        en: 'Contains compounds that may help reduce cancer risk',
        hi: 'ऐसे यौगिक होते हैं जो कैंसर के जोखिम को कम करने में मदद कर सकते हैं',
        ta: 'புற்றுநோய் அபாயத்தைக் குறைக்க உதவும் சேர்மங்களைக் கொண்டுள்ளது'
      }
    ],
    {
      en: '1 cup cooked or raw, 3-4 times per week',
      hi: '1 कप पका हुआ या कच्चा, प्रति सप्ताह 3-4 बार',
      ta: '1 கப் சமைத்தது அல்லது பச்சையானது, வாரத்திற்கு 3-4 முறை'
    }
  ),
  createFoodItem(
    'ghee',
    {
      en: 'Ghee',
      hi: 'घी',
      ta: 'நெய்'
    },
    {
      en: 'Clarified butter with rich flavor and high smoke point',
      hi: 'समृद्ध स्वाद और उच्च धुएं के बिंदु के साथ स्पष्ट मक्खन',
      ta: 'வளமான சுவை மற்றும் உயர் புகைப்புள்ளி கொண்ட தெளிந்த வெண்ணெய்'
    },
    'India',
    7.99,
    'https://images.unsplash.com/photo-1594014366117-0d303dd6b83c?auto=format&fit=crop&q=80',
    ['dairy', 'fats', 'indian'],
    {
      calories: 112,
      carbs: 0,
      protein: 0,
      fat: 12.7,
      fiber: 0,
      vitamins: { 'A': '15%', 'E': '2%', 'K': '1%' },
      omega3: 0.1
    },
    ['dairy'],
    true,
    [
      {
        en: 'Contains butyrate which may support gut health',
        hi: 'ब्यूटिरेट युक्त होता है जो आंत के स्वास्थ्य का समर्थन कर सकता है',
        ta: 'குடல் ஆரோக்கியத்தை ஆதரிக்கக்கூடிய பியூட்டிரேட் கொண்டுள்ளது'
      }
    ],
    {
      en: '1-2 teaspoons daily for cooking',
      hi: 'खाना पकाने के लिए रोजाना 1-2 चम्मच',
      ta: 'சமைப்பதற்கு தினசரி 1-2 தேக்கரண்டி'
    }
  ),
  createFoodItem(
    'papaya',
    {
      en: 'Papaya',
      hi: 'पपीता',
      ta: 'பப்பாளி'
    },
    {
      en: 'Sweet tropical fruit with orange flesh and digestive enzymes',
      hi: 'नारंगी गूदे और पाचक एंजाइमों के साथ मीठा उष्णकटिबंधीय फल',
      ta: 'ஆரஞ்சு சதை மற்றும் செரிமான நொதிகளுடன் இனிப்பான வெப்பமண்டல பழம்'
    },
    'Central America',
    3.99,
    'https://images.unsplash.com/photo-1617112848923-cc2234396a8d?auto=format&fit=crop&q=80',
    ['fruits', 'tropical', 'digestive'],
    {
      calories: 43,
      carbs: 11,
      protein: 0.5,
      fat: 0.1,
      fiber: 1.7,
      vitamins: { 'C': '62%', 'A': '18%', 'Folate': '14%' },
      enzymes: { 'Papain': 'high', 'Chymopapain': 'high' }
    },
    ['vegan', 'gluten-free'],
    false,
    [
      {
        en: 'Contains digestive enzymes that may help with protein digestion',
        hi: 'पाचक एंजाइम होते हैं जो प्रोटीन पाचन में मदद कर सकते हैं',
        ta: 'புரத செரிமானத்திற்கு உதவக்கூடிய செரிமான நொதிகளைக் கொண்டுள்ளது'
      }
    ],
    {
      en: '1 cup diced as part of a meal or snack',
      hi: 'भोजन या नाश्ते के हिस्से के रूप में 1 कप टुकड़े',
      ta: 'உணவு அல்லது சிற்றுண்டியின் ஒரு பகுதியாக 1 கப் துண்டுகள்'
    }
  ),
  createFoodItem(
    'tilapia',
    {
      en: 'Tilapia',
      hi: 'तिलापिया मछली',
      ta: 'திலாப்பியா மீன்'
    },
    {
      en: 'Mild, white freshwater fish that is farm-raised globally',
      hi: 'हल्की, सफेद मीठे पानी की मछली जो वैश्विक स्तर पर फार्म में उगाई जाती है',
      ta: 'உலகளவில் பண்ணை வளர்ப்பு செய்யப்படும் மிதமான, வெள்ளை நன்னீர் மீன்'
    },
    'Global',
    5.99,
    'https://images.unsplash.com/photo-1583833946873-5c944fc84783?auto=format&fit=crop&q=80',
    ['seafood', 'fish', 'protein'],
    {
      calories: 128,
      carbs: 0,
      protein: 26,
      fat: 2.7,
      fiber: 0,
      vitamins: { 'B12': '31%', 'Niacin': '24%', 'Selenium': '78%' }
    },
    ['fish'],
    true,
    [
      {
        en: 'Lean source of complete protein with essential nutrients',
        hi: 'आवश्यक पोषक तत्वों के साथ पूर्ण प्रोटीन का दुबला स्रोत',
        ta: 'அத்தியாவசிய ஊட்டச்சத்துக்களுடன் முழுமையான புரதத்தின் மெலிந்த ஆதாரம்'
      }
    ],
    {
      en: '4-6 ounce portion, 2-3 times per week',
      hi: '4-6 औंस हिस्सा, प्रति सप्ताह 2-3 बार',
      ta: '4-6 அவுன்ஸ் பகுதி, வாரத்திற்கு 2-3 முறை'
    }
  )
];
