import { db } from '../server/db';
import { foodItems as mockFoodItems } from '../shared/mockData';
import { foodItems } from '../shared/schema';

async function seedDatabase() {
  console.log('Starting database seeding...');

  try {
    // First check if we already have data to avoid duplicates
    const existingItems = await db.select().from(foodItems);
    
    if (existingItems.length > 0) {
      console.log(`Database already has ${existingItems.length} food items. Skipping seeding.`);
      return;
    }

    // Insert food items
    for (const item of mockFoodItems) {
      await db.insert(foodItems).values({
        itemId: item.id,
        nameEn: item.name.en,
        nameHi: item.name.hi,
        nameTa: item.name.ta,
        descriptionEn: item.description.en,
        descriptionHi: item.description.hi,
        descriptionTa: item.description.ta,
        origin: item.origin,
        price: Math.round(item.price * 100), // Convert to cents
        image: item.image,
        categories: item.category,
        calories: item.nutrition.calories,
        carbs: Math.round(item.nutrition.carbs * 10), // Convert to decigrames
        protein: Math.round(item.nutrition.protein * 10), // Convert to decigrames
        fat: Math.round(item.nutrition.fat * 10), // Convert to decigrames
        fiber: Math.round(item.nutrition.fiber * 10), // Convert to decigrames
        vitamins: item.nutrition.vitamins,
        allergens: item.allergens,
        isPopular: item.isPopular
      });
      console.log(`Inserted food item: ${item.name.en}`);
    }

    console.log(`Successfully seeded database with ${mockFoodItems.length} food items`);
  } catch (error) {
    console.error('Error seeding database:', error);
    throw error;
  }
}

// Run the seeding function
seedDatabase()
  .then(() => {
    console.log('Database seeding completed');
    process.exit(0);
  })
  .catch(error => {
    console.error('Database seeding failed:', error);
    process.exit(1);
  });