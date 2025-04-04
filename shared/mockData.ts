import type { FoodItemClient } from './schema';

// This mock data simulates what would come from our database
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
    image: 'https://images.unsplash.com/photo-1615485500704-8e990f9900f7?auto=format&fit=crop&q=80',
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
  }
];
