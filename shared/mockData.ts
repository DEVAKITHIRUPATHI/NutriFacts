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
    image: 'https://images.unsplash.com/photo-1615484477201-9f4953340fab?auto=format&fit=crop&q=80',
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
    image: 'https://images.unsplash.com/photo-1603786314858-06f83011029b?auto=format&fit=crop&q=80',
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
    image: 'https://images.unsplash.com/photo-1536816579748-4ecb3f03d72a?auto=format&fit=crop&q=80',
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
  )
];
