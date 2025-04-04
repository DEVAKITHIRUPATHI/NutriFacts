import { FoodItemClient, TranslatedContent } from "../shared/schema";

// Helper function to create translated content
const createTranslatedContent = (
  en: string, 
  hi: string, 
  ta: string
): TranslatedContent => ({ en, hi, ta });

// Image URLs for different food categories
const foodImageUrls = {
  fruits: [
    "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1519996529931-28324d5a630e?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1591287083773-9a5d4a5df79b?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1526318472351-c75fcf070305?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1552089123-2d26226fc2b7?auto=format&fit=crop&q=80",
  ],
  vegetables: [
    "https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1557844352-761f2565b576?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1518977956812-cd3dbadaaf31?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1576181256399-834e3b3a49bf?auto=format&fit=crop&q=80",
  ],
  grains: [
    "https://images.unsplash.com/photo-1574323347407-f5e1c5c6e040?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1586201375761-83865001e8ac?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1562675482-3bf761c7163a?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1614961233913-a5113a4a34ed?auto=format&fit=crop&q=80",
  ],
  spices: [
    "https://images.unsplash.com/photo-1532336414038-cf19250c5757?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1613485446293-97af9db9a4d2?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1531423403547-538d91395c5e?auto=format&fit=crop&q=80",
  ],
  dairy: [
    "https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1628689469838-524a4a973b8e?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&q=80",
  ],
  protein: [
    "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1617692855027-33b14f061079?auto=format&fit=crop&q=80",
  ],
};

// Function to get a random image for a category
const getRandomImage = (category: string): string => {
  const categoryImages = foodImageUrls[category as keyof typeof foodImageUrls] || foodImageUrls.fruits;
  return categoryImages[Math.floor(Math.random() * categoryImages.length)];
};

// Define food items data
export const generateFoodItems = (): FoodItemClient[] => {
  // Large array of fruits with their translations
  const fruits = [
    {
      id: "apple_red",
      name: createTranslatedContent("Red Apple", "लाल सेब", "சிவப்பு ஆப்பிள்"),
      description: createTranslatedContent(
        "Sweet and crisp red apple, rich in fiber and antioxidants",
        "मीठा और कुरकुरा लाल सेब, फाइबर और एंटीऑक्सीडेंट्स से भरपूर",
        "இனிப்பு மற்றும் கிரிஸ்ப் சிவப்பு ஆப்பிள், நார்ச்சத்து மற்றும் ஆன்டிஆக்ஸிடன்ட்களில் நிறைந்தது"
      ),
      origin: "Global",
      price: 1.49,
      image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&q=80",
      category: ["fruits"],
      nutrition: {
        calories: 52,
        carbs: 14,
        protein: 0.3,
        fat: 0.2,
        fiber: 2.4,
        vitamins: { "C": "14%", "K": "2%" }
      },
      allergens: [],
      isPopular: true
    },
    {
      id: "banana",
      name: createTranslatedContent("Banana", "केला", "வாழைப்பழம்"),
      description: createTranslatedContent(
        "Energy-rich fruit with potassium and natural sugars",
        "पोटैशियम और प्राकृतिक शर्करा युक्त ऊर्जा से भरपूर फल",
        "பொட்டாசியம் மற்றும் இயற்கை சர்க்கரைகளுடன் ஆற்றல் நிறைந்த பழம்"
      ),
      origin: "Tropical Regions",
      price: 0.59,
      image: "https://images.unsplash.com/photo-1587132137056-bfbf0166836e?auto=format&fit=crop&q=80",
      category: ["fruits", "tropical"],
      nutrition: {
        calories: 105,
        carbs: 27,
        protein: 1.3,
        fat: 0.4,
        fiber: 3.1,
        vitamins: { "B6": "20%", "C": "17%" }
      },
      allergens: [],
      isPopular: true
    },
    {
      id: "mango_alphonso",
      name: createTranslatedContent("Alphonso Mango", "हापुस आम", "ஆல்ஃபான்சோ மாம்பழம்"),
      description: createTranslatedContent(
        "Known as the king of mangoes, sweet and aromatic",
        "आम का राजा, मीठा और सुगंधित",
        "மாம்பழங்களின் ராஜா, இனிப்பு மற்றும் மணமுள்ள"
      ),
      origin: "India",
      price: 3.99,
      image: "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&q=80",
      category: ["fruits", "indian", "seasonal"],
      nutrition: {
        calories: 70,
        carbs: 17,
        protein: 0.6,
        fat: 0.3,
        fiber: 1.8,
        vitamins: { "A": "25%", "C": "60%" }
      },
      allergens: [],
      isPopular: true
    },
    {
      id: "strawberry",
      name: createTranslatedContent("Strawberry", "स्ट्रॉबेरी", "ஸ்ட்ராபெரி"),
      description: createTranslatedContent(
        "Sweet and slightly tart berries rich in vitamin C",
        "विटामिन सी से भरपूर मीठे और हल्के खट्टे बेरीज",
        "இனிப்பு மற்றும் சிறிது புளிப்பான வைட்டமின் சி நிறைந்த பெர்ரிகள்"
      ),
      origin: "Europe, Americas",
      price: 2.99,
      image: "https://images.unsplash.com/photo-1587393855524-087f83d95bc9?auto=format&fit=crop&q=80",
      category: ["fruits", "berries"],
      nutrition: {
        calories: 32,
        carbs: 7.7,
        protein: 0.7,
        fat: 0.3,
        fiber: 2,
        vitamins: { "C": "100%", "Manganese": "24%" }
      },
      allergens: [],
      isPopular: true
    },
    {
      id: "orange",
      name: createTranslatedContent("Orange", "संतरा", "ஆரஞ்சு"),
      description: createTranslatedContent(
        "Juicy citrus fruit packed with vitamin C",
        "विटामिन सी से भरपूर रसदार खट्टा फल",
        "வைட்டமின் சி நிறைந்த சாறுள்ள சிட்ரஸ் பழம்"
      ),
      origin: "Southeast Asia",
      price: 1.29,
      image: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab12?auto=format&fit=crop&q=80",
      category: ["fruits", "citrus"],
      nutrition: {
        calories: 62,
        carbs: 15.4,
        protein: 1.2,
        fat: 0.2,
        fiber: 3.1,
        vitamins: { "C": "88%", "Folate": "10%" }
      },
      allergens: [],
      isPopular: false
    },
  ];

  // Vegetables data
  const vegetables = [
    {
      id: "spinach",
      name: createTranslatedContent("Spinach", "पालक", "கீரை"),
      description: createTranslatedContent(
        "Nutrient-rich leafy green vegetable",
        "पोषक तत्वों से भरपूर हरी पत्तेदार सब्जी",
        "ஊட்டச்சத்து நிறைந்த இலை பச்சை காய்கறி"
      ),
      origin: "Middle East",
      price: 1.99,
      image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&q=80",
      category: ["vegetables", "leafy_greens"],
      nutrition: {
        calories: 23,
        carbs: 3.6,
        protein: 2.9,
        fat: 0.4,
        fiber: 2.2,
        vitamins: { "A": "187%", "K": "604%", "Folate": "66%" }
      },
      allergens: [],
      isPopular: true
    },
    {
      id: "carrot",
      name: createTranslatedContent("Carrot", "गाजर", "கேரட்"),
      description: createTranslatedContent(
        "Sweet and crunchy root vegetable rich in beta-carotene",
        "बीटा-कैरोटीन से भरपूर मीठी और कुरकुरी जड़ वाली सब्जी",
        "பீட்டா-கரோட்டீன் நிறைந்த இனிப்பு மற்றும் கிரிஸ்பி வேர் காய்கறி"
      ),
      origin: "Western Asia",
      price: 1.49,
      image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&q=80",
      category: ["vegetables", "root_vegetables"],
      nutrition: {
        calories: 41,
        carbs: 9.6,
        protein: 0.9,
        fat: 0.2,
        fiber: 2.8,
        vitamins: { "A": "334%", "K": "13%" }
      },
      allergens: [],
      isPopular: true
    },
    {
      id: "broccoli",
      name: createTranslatedContent("Broccoli", "ब्रोकली", "ப்ரோக்கோலி"),
      description: createTranslatedContent(
        "Cruciferous vegetable with dense nutrients and fiber",
        "घने पोषक तत्वों और फाइबर के साथ क्रूसिफेरस सब्जी",
        "அடர்த்தியான ஊட்டச்சத்துக்கள் மற்றும் நார்ச்சத்து கொண்ட குறுக்கு வகை காய்கறி"
      ),
      origin: "Europe",
      price: 2.29,
      image: "https://images.unsplash.com/photo-1584270354949-c26b0d5b4a0c?auto=format&fit=crop&q=80",
      category: ["vegetables", "cruciferous"],
      nutrition: {
        calories: 34,
        carbs: 6.6,
        protein: 2.8,
        fat: 0.4,
        fiber: 2.6,
        vitamins: { "C": "135%", "K": "116%", "Folate": "14%" }
      },
      allergens: [],
      isPopular: false
    },
    {
      id: "bell_pepper_red",
      name: createTranslatedContent("Red Bell Pepper", "लाल शिमला मिर्च", "சிவப்பு பெல் மிளகாய்"),
      description: createTranslatedContent(
        "Sweet, crunchy pepper with high vitamin C content",
        "उच्च विटामिन सी सामग्री के साथ मीठी, कुरकुरी मिर्च",
        "அதிக வைட்டமின் சி உள்ளடக்கத்துடன் இனிப்பு, கிரிஸ்பி மிளகாய்"
      ),
      origin: "North and South America",
      price: 1.79,
      image: "https://images.unsplash.com/photo-1633943899161-711706756e21?auto=format&fit=crop&q=80",
      category: ["vegetables", "nightshade"],
      nutrition: {
        calories: 31,
        carbs: 6,
        protein: 1,
        fat: 0.3,
        fiber: 2.1,
        vitamins: { "C": "169%", "A": "19%" }
      },
      allergens: [],
      isPopular: false
    },
    {
      id: "tomato",
      name: createTranslatedContent("Tomato", "टमाटर", "தக்காளி"),
      description: createTranslatedContent(
        "Juicy, versatile fruit used as a vegetable in cooking",
        "खाना पकाने में सब्जी के रूप में प्रयुक्त रसदार, बहुमुखी फल",
        "சமையலில் காய்கறியாக பயன்படுத்தப்படும் சாறுள்ள, பன்முக பழம்"
      ),
      origin: "Western South America",
      price: 1.59,
      image: "https://images.unsplash.com/photo-1562708294-4df93280352d?auto=format&fit=crop&q=80",
      category: ["vegetables", "fruits", "nightshade"],
      nutrition: {
        calories: 18,
        carbs: 3.9,
        protein: 0.9,
        fat: 0.2,
        fiber: 1.2,
        vitamins: { "C": "17%", "K": "10%" }
      },
      allergens: [],
      isPopular: true
    },
  ];

  // Spices data
  const spices = [
    {
      id: "turmeric",
      name: createTranslatedContent("Turmeric", "हल्दी", "மஞ்சள்"),
      description: createTranslatedContent(
        "Vibrant yellow spice with anti-inflammatory properties",
        "एंटी-इंफ्लेमेटरी गुणों के साथ जीवंत पीला मसाला",
        "அழற்சி எதிர்ப்பு பண்புகளைக் கொண்ட துடிப்பான மஞ்சள் மசாலா"
      ),
      origin: "South Asia",
      price: 2.99,
      image: "https://images.unsplash.com/photo-1615485500704-8e990f9900e1?auto=format&fit=crop&q=80",
      category: ["spices", "indian"],
      nutrition: {
        calories: 24,
        carbs: 4.4,
        protein: 0.5,
        fat: 0.7,
        fiber: 1.4,
        vitamins: { "Iron": "9%", "Manganese": "26%" }
      },
      allergens: [],
      isPopular: true
    },
    {
      id: "black_pepper",
      name: createTranslatedContent("Black Pepper", "काली मिर्च", "கருப்பு மிளகு"),
      description: createTranslatedContent(
        "Pungent spice used to add heat and flavor to dishes",
        "व्यंजनों में गर्मी और स्वाद जोड़ने के लिए उपयोग किया जाने वाला तीखा मसाला",
        "உணவுகளில் சூடு மற்றும் சுவை சேர்க்க பயன்படுத்தப்படும் காரமான மசாலா"
      ),
      origin: "India",
      price: 3.49,
      image: "https://images.unsplash.com/photo-1613484603373-d43930543c6c?auto=format&fit=crop&q=80",
      category: ["spices", "global", "indian"],
      nutrition: {
        calories: 20,
        carbs: 3.6,
        protein: 0.7,
        fat: 0.5,
        fiber: 1.7,
        vitamins: { "K": "13%", "Iron": "9%" }
      },
      allergens: [],
      isPopular: false
    },
    {
      id: "cardamom",
      name: createTranslatedContent("Cardamom", "इलायची", "ஏலக்காய்"),
      description: createTranslatedContent(
        "Aromatic spice with a sweet, floral flavor",
        "मीठे, फूलों के स्वाद वाला सुगंधित मसाला",
        "இனிப்பு, மலர் சுவை கொண்ட மணமுள்ள மசாலா"
      ),
      origin: "India",
      price: 5.99,
      image: "https://images.unsplash.com/photo-1627828094935-5a73a17affd0?auto=format&fit=crop&q=80",
      category: ["spices", "indian"],
      nutrition: {
        calories: 18,
        carbs: 4,
        protein: 0.6,
        fat: 0.2,
        fiber: 1.6,
        vitamins: { "Manganese": "80%", "Iron": "13%" }
      },
      allergens: [],
      isPopular: false
    },
    {
      id: "cinnamon",
      name: createTranslatedContent("Cinnamon", "दालचीनी", "இலவங்கப்பட்டை"),
      description: createTranslatedContent(
        "Sweet and woody spice with numerous health benefits",
        "कई स्वास्थ्य लाभों के साथ मीठा और लकड़ी वाला मसाला",
        "பல சுகாதார நன்மைகளுடன் இனிப்பு மற்றும் மரம் மசாலா"
      ),
      origin: "Sri Lanka",
      price: 2.59,
      image: "https://images.unsplash.com/photo-1621179816621-63fe388f7d0e?auto=format&fit=crop&q=80",
      category: ["spices", "global"],
      nutrition: {
        calories: 6,
        carbs: 2,
        protein: 0.1,
        fat: 0.1,
        fiber: 1.4,
        vitamins: { "Manganese": "76%", "Calcium": "8%" }
      },
      allergens: [],
      isPopular: true
    },
    {
      id: "cumin_seeds",
      name: createTranslatedContent("Cumin Seeds", "जीरा", "சீரகம்"),
      description: createTranslatedContent(
        "Earthy, nutty spice essential in many cuisines",
        "कई व्यंजनों में अनिवार्य मिट्टी, नट्टी मसाला",
        "பல உணவு வகைகளில் அத்தியாவசிய மண் போன்ற, நட்டி மசாலா"
      ),
      origin: "Middle East",
      price: 1.89,
      image: "https://images.unsplash.com/photo-1620574387735-3624d75b2dbc?auto=format&fit=crop&q=80",
      category: ["spices", "indian", "global"],
      nutrition: {
        calories: 22,
        carbs: 2.7,
        protein: 1.1,
        fat: 1.3,
        fiber: 0.6,
        vitamins: { "Iron": "20%", "Manganese": "16%" }
      },
      allergens: [],
      isPopular: false
    },
  ];

  // Grains data
  const grains = [
    {
      id: "quinoa",
      name: createTranslatedContent("Quinoa", "क्विनोआ", "குயினோவா"),
      description: createTranslatedContent(
        "Gluten-free grain with complete protein profile",
        "पूर्ण प्रोटीन प्रोफाइल के साथ ग्लूटेन-फ्री अनाज",
        "முழு புரத சுயவிவரத்துடன் குளுட்டன் இல்லாத தானியம்"
      ),
      origin: "South America",
      price: 4.99,
      image: "https://images.unsplash.com/photo-1595904567075-958e3add3c85?auto=format&fit=crop&q=80",
      category: ["grains", "protein", "global"],
      nutrition: {
        calories: 120,
        carbs: 21.3,
        protein: 4.4,
        fat: 1.9,
        fiber: 2.8,
        vitamins: { "Manganese": "58%", "Magnesium": "30%" }
      },
      allergens: [],
      isPopular: true
    },
    {
      id: "brown_rice",
      name: createTranslatedContent("Brown Rice", "भूरा चावल", "பழுப்பு அரிசி"),
      description: createTranslatedContent(
        "Whole grain rice with nutty flavor and chewy texture",
        "अखरोट के स्वाद और चबाने वाली बनावट के साथ साबुत अनाज चावल",
        "நட்டி சுவை மற்றும் மென்மையான அமைப்புடன் முழு தானிய அரிசி"
      ),
      origin: "Global",
      price: 2.79,
      image: "https://images.unsplash.com/photo-1607110760903-e5b9b17a63ce?auto=format&fit=crop&q=80",
      category: ["grains", "global"],
      nutrition: {
        calories: 112,
        carbs: 24,
        protein: 2.3,
        fat: 0.8,
        fiber: 1.8,
        vitamins: { "Manganese": "88%", "Magnesium": "21%" }
      },
      allergens: [],
      isPopular: false
    },
    {
      id: "oats",
      name: createTranslatedContent("Oats", "जई", "ஓட்ஸ்"),
      description: createTranslatedContent(
        "Heart-healthy whole grain with high fiber content",
        "उच्च फाइबर सामग्री के साथ हृदय-स्वस्थ साबुत अनाज",
        "அதிக நார்ச்சத்து உள்ளடக்கத்துடன் இதய ஆரோக்கியமான முழு தானியம்"
      ),
      origin: "Europe",
      price: 3.29,
      image: "https://images.unsplash.com/photo-1614961233913-a5113a4a34ed?auto=format&fit=crop&q=80",
      category: ["grains", "breakfast"],
      nutrition: {
        calories: 155,
        carbs: 27.4,
        protein: 5.9,
        fat: 3.2,
        fiber: 4.1,
        vitamins: { "Manganese": "191%", "Phosphorus": "41%" }
      },
      allergens: [],
      isPopular: true
    },
    {
      id: "millet",
      name: createTranslatedContent("Millet", "बाजरा", "கம்பு"),
      description: createTranslatedContent(
        "Drought-resistant grain with high nutritional value",
        "उच्च पोषण मूल्य के साथ सूखा प्रतिरोधी अनाज",
        "உயர் ஊட்டச்சத்து மதிப்புடன் வறட்சி எதிர்ப்பு தானியம்"
      ),
      origin: "India, Africa",
      price: 3.49,
      image: "https://images.unsplash.com/photo-1609252493481-9702fe2d93e3?auto=format&fit=crop&q=80",
      category: ["grains", "indian", "gluten_free"],
      nutrition: {
        calories: 119,
        carbs: 23.7,
        protein: 3.5,
        fat: 1,
        fiber: 1.3,
        vitamins: { "Manganese": "23%", "Magnesium": "19%" }
      },
      allergens: [],
      isPopular: false
    },
    {
      id: "amaranth",
      name: createTranslatedContent("Amaranth", "राजगिरा", "அமரந்த்"),
      description: createTranslatedContent(
        "Ancient gluten-free grain with complete protein",
        "पूर्ण प्रोटीन के साथ प्राचीन ग्लूटेन-मुक्त अनाज",
        "முழு புரதத்துடன் பழங்கால குளுட்டன் இல்லாத தானியம்"
      ),
      origin: "Central America",
      price: 5.99,
      image: "https://images.unsplash.com/photo-1593059155805-1b7ed427e486?auto=format&fit=crop&q=80",
      category: ["grains", "gluten_free", "protein"],
      nutrition: {
        calories: 103,
        carbs: 18.7,
        protein: 3.8,
        fat: 1.6,
        fiber: 2.1,
        vitamins: { "Manganese": "105%", "Iron": "29%" }
      },
      allergens: [],
      isPopular: false
    },
  ];

  // Dairy data
  const dairy = [
    {
      id: "paneer",
      name: createTranslatedContent("Paneer", "पनीर", "பனீர்"),
      description: createTranslatedContent(
        "Fresh Indian cottage cheese, rich in protein",
        "प्रोटीन से भरपूर ताज़ा भारतीय पनीर",
        "புரதம் நிறைந்த புதிய இந்திய பனீர்"
      ),
      origin: "India",
      price: 4.99,
      image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&q=80",
      category: ["dairy", "protein", "indian"],
      nutrition: {
        calories: 295,
        carbs: 3.4,
        protein: 18,
        fat: 23,
        fiber: 0,
        vitamins: { "Calcium": "53%", "Phosphorus": "38%" }
      },
      allergens: ["milk"],
      isPopular: true
    },
    {
      id: "greek_yogurt",
      name: createTranslatedContent("Greek Yogurt", "ग्रीक दही", "கிரேக்க தயிர்"),
      description: createTranslatedContent(
        "Thick strained yogurt with high protein content",
        "उच्च प्रोटीन सामग्री के साथ मोटा छना हुआ दही",
        "அதிக புரதம் கொண்ட தடித்த வடிகட்டிய தயிர்"
      ),
      origin: "Greece",
      price: 3.79,
      image: "https://images.unsplash.com/photo-1563804447971-6e113ab80713?auto=format&fit=crop&q=80",
      category: ["dairy", "protein", "global"],
      nutrition: {
        calories: 133,
        carbs: 7.3,
        protein: 17.3,
        fat: 4.1,
        fiber: 0,
        vitamins: { "Calcium": "15%", "Vitamin B12": "38%" }
      },
      allergens: ["milk"],
      isPopular: true
    },
    {
      id: "cheddar_cheese",
      name: createTranslatedContent("Cheddar Cheese", "चेडर चीज़", "செடார் சீஸ்"),
      description: createTranslatedContent(
        "Firm, sharp-tasting yellow cheese",
        "दृढ़, तेज स्वाद वाला पीला चीज़",
        "உறுதியான, கூர்மையான சுவையுள்ள மஞ்சள் சீஸ்"
      ),
      origin: "England",
      price: 5.29,
      image: "https://images.unsplash.com/photo-1618164436241-4473940d1f5c?auto=format&fit=crop&q=80",
      category: ["dairy", "global"],
      nutrition: {
        calories: 403,
        carbs: 1.3,
        protein: 24.9,
        fat: 33.1,
        fiber: 0,
        vitamins: { "Calcium": "72%", "Vitamin B12": "21%" }
      },
      allergens: ["milk"],
      isPopular: false
    },
    {
      id: "butter",
      name: createTranslatedContent("Butter", "मक्खन", "வெண்ணெய்"),
      description: createTranslatedContent(
        "Dairy product made from churning cream or milk",
        "क्रीम या दूध को मथने से बना डेयरी उत्पाद",
        "கிரீம் அல்லது பாலைக் கடைந்து தயாரிக்கப்படும் பால் பொருள்"
      ),
      origin: "Global",
      price: 3.49,
      image: "https://images.unsplash.com/photo-1589985270958-a664e7dc98b9?auto=format&fit=crop&q=80",
      category: ["dairy", "global"],
      nutrition: {
        calories: 717,
        carbs: 0.1,
        protein: 0.9,
        fat: 81.1,
        fiber: 0,
        vitamins: { "Vitamin A": "50%", "Vitamin E": "20%" }
      },
      allergens: ["milk"],
      isPopular: false
    },
  ];

  // Protein sources
  const proteins = [
    {
      id: "salmon",
      name: createTranslatedContent("Atlantic Salmon", "एटलांटिक सैलमन", "அட்லாண்டிக் சாமன்"),
      description: createTranslatedContent(
        "Oily fish rich in omega-3 fatty acids and protein",
        "ओमेगा-3 फैटी एसिड और प्रोटीन से भरपूर तेलीय मछली",
        "ஒமேகா-3 கொழுப்பு அமிலங்கள் மற்றும் புரதம் நிறைந்த எண்ணெய் மீன்"
      ),
      origin: "North Atlantic Ocean",
      price: 12.99,
      image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80",
      category: ["seafood", "protein"],
      nutrition: {
        calories: 208,
        carbs: 0,
        protein: 20.4,
        fat: 13.4,
        fiber: 0,
        vitamins: { "B12": "106%", "D": "66%" }
      },
      allergens: ["fish"],
      isPopular: true
    },
    {
      id: "chickpeas",
      name: createTranslatedContent("Chickpeas", "चना", "கடலை"),
      description: createTranslatedContent(
        "Protein-rich legume central to many cuisines",
        "कई व्यंजनों के लिए केंद्रीय प्रोटीन से भरपूर फलियां",
        "பல உணவுகளுக்கு மையமான புரதம் நிறைந்த பருப்பு"
      ),
      origin: "Middle East",
      price: 1.99,
      image: "https://images.unsplash.com/photo-1515543904379-3d757afe72e4?auto=format&fit=crop&q=80",
      category: ["protein", "legumes", "indian", "global"],
      nutrition: {
        calories: 269,
        carbs: 45,
        protein: 14.5,
        fat: 4.3,
        fiber: 12.5,
        vitamins: { "Folate": "71%", "Manganese": "73%" }
      },
      allergens: [],
      isPopular: false
    },
    {
      id: "tofu",
      name: createTranslatedContent("Tofu", "टोफू", "டோஃபு"),
      description: createTranslatedContent(
        "Plant-based protein made from condensed soy milk",
        "संघनित सोया दूध से बना पौधे आधारित प्रोटीन",
        "அடர்த்தியான சோயா பாலில் இருந்து தயாரிக்கப்பட்ட தாவர அடிப்படையிலான புரதம்"
      ),
      origin: "East Asia",
      price: 2.89,
      image: "https://images.unsplash.com/photo-1584728719759-08de25683d2d?auto=format&fit=crop&q=80",
      category: ["protein", "vegan", "global"],
      nutrition: {
        calories: 76,
        carbs: 1.9,
        protein: 8,
        fat: 4.8,
        fiber: 0.3,
        vitamins: { "Calcium": "17%", "Iron": "17%" }
      },
      allergens: ["soy"],
      isPopular: false
    },
    {
      id: "almonds",
      name: createTranslatedContent("Almonds", "बादाम", "பாதாம்"),
      description: createTranslatedContent(
        "Nutrient-dense tree nuts with healthy fats",
        "स्वस्थ वसा के साथ पोषक तत्व युक्त पेड़ के अखरोट",
        "ஆரோக்கியமான கொழுப்புகளுடன் ஊட்டச்சத்து நிறைந்த மர கொட்டைகள்"
      ),
      origin: "Middle East",
      price: 7.99,
      image: "https://images.unsplash.com/photo-1574053105251-88f982725750?auto=format&fit=crop&q=80",
      category: ["nuts", "protein"],
      nutrition: {
        calories: 579,
        carbs: 21.6,
        protein: 21.2,
        fat: 49.9,
        fiber: 12.5,
        vitamins: { "Vitamin E": "170%", "Magnesium": "80%" }
      },
      allergens: ["tree nuts"],
      isPopular: true
    },
    {
      id: "lentils",
      name: createTranslatedContent("Lentils", "दाल", "பருப்பு"),
      description: createTranslatedContent(
        "Quick-cooking legumes with high protein and fiber",
        "उच्च प्रोटीन और फाइबर के साथ त्वरित पकाने वाली फलियां",
        "அதிக புரதம் மற்றும் நார்ச்சத்து கொண்ட விரைவாக சமைக்கும் பருப்பு வகைகள்"
      ),
      origin: "South Asia",
      price: 2.29,
      image: "https://images.unsplash.com/photo-1611575330633-551852a8a1af?auto=format&fit=crop&q=80",
      category: ["protein", "legumes", "indian"],
      nutrition: {
        calories: 116,
        carbs: 20,
        protein: 9,
        fat: 0.4,
        fiber: 8,
        vitamins: { "Folate": "90%", "Iron": "37%" }
      },
      allergens: [],
      isPopular: true
    },
  ];

  // Generate a large dataset by multiplying existing items
  const baseItems = [...fruits, ...vegetables, ...spices, ...grains, ...dairy, ...proteins];
  
  // Function to create variations of food items
  const createVariations = (item: FoodItemClient, count: number): FoodItemClient[] => {
    const variations: FoodItemClient[] = [];
    
    for (let i = 1; i <= count; i++) {
      const variation: FoodItemClient = {
        ...item,
        id: `${item.id}_${i}`,
        price: parseFloat((item.price * (0.9 + Math.random() * 0.4)).toFixed(2)),
        isPopular: Math.random() > 0.8,
        image: getRandomImage(item.category[0]) || item.image,
      };
      
      variations.push(variation);
    }
    
    return variations;
  };
  
  // Generate variations for each base item
  let allItems: FoodItemClient[] = [];
  baseItems.forEach(item => {
    // Each base item creates 35-40 variations to reach ~1000 items
    const variationCount = Math.floor(35 + Math.random() * 5);
    const variations = createVariations(item, variationCount);
    allItems = [...allItems, item, ...variations];
  });
  
  // Shuffle the array to mix categories
  const shuffleArray = (array: any[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };
  
  // Return a shuffled subset of items (up to 1000)
  return shuffleArray(allItems).slice(0, 1000);
};