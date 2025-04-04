import { db } from '../server/db';
import { foodItems } from '../shared/schema';
import { generateFoodItems } from './generate-food-data';

async function seedDatabase() {
  console.log('Starting database seeding...');

  try {
    // Check if we already have data
    const existingItems = await db.select().from(foodItems);
    
    if (existingItems.length > 0) {
      console.log(`Clearing existing ${existingItems.length} food items from database...`);
      await db.delete(foodItems);
    }

    // Generate a large list of food items (up to 1000)
    const generatedItems = generateFoodItems();
    console.log(`Generated ${generatedItems.length} food items for seeding`);
    
    // Insert in batches to avoid memory issues
    const batchSize = 50;
    for (let i = 0; i < generatedItems.length; i += batchSize) {
      const batch = generatedItems.slice(i, i + batchSize);
      
      // Process batch insertions in parallel
      const insertPromises = batch.map(item => 
        db.insert(foodItems).values({
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
        })
      );
      
      await Promise.all(insertPromises);
      console.log(`Inserted batch ${Math.floor(i/batchSize) + 1}/${Math.ceil(generatedItems.length/batchSize)}`);
    }
    
    console.log(`Successfully seeded database with ${generatedItems.length} food items`);
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