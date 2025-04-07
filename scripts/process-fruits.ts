/**
 * Script to process fruit data from the attached text file and generate food items
 * using the Claude API integration.
 */

import fs from 'fs';
import path from 'path';
import { generateCompleteFoodItem } from '../server/utils/anthropicHelper';
import { FoodItemClient } from '../shared/schema';

// Define language codes to generate content for
const LANGUAGE_CODES = [
  // English
  'en',
  
  // Indian languages
  'hi', 'ta', 'bn', 'mr', 'te', 'gu', 'ur', 'kn', 'or', 
  'ml', 'pa', 'as', 'mai', 'sat', 'ks', 'ne', 'sd', 'kok',
  
  // International languages
  'es', 'fr', 'ar', 'ru', 'pt', 'id', 'de', 'ja', 'sw', 
  'tr', 'yue', 'vi', 'ko', 'it', 'fa', 'th', 'ha', 'pl', 
  'uk', 'ms', 'ro', 'nl', 'am', 'fil', 'my', 'om', 'zh'
];

// Helper function to parse fruit categories and names from the text file
function parseFruitData(filePath: string): Array<{ name: string, category: string[] }> {
  const text = fs.readFileSync(filePath, 'utf8');
  const fruits: Array<{ name: string, category: string[] }> = [];
  
  // Split the text into sections based on the Markdown headings
  const sections = text.split('### **');
  
  for (let i = 1; i < sections.length; i++) {  // Skip the first element which is usually empty
    const section = sections[i];
    const lines = section.split('\n');
    
    if (lines.length === 0) continue;
    
    // Extract category name from the heading line
    const categoryLine = lines[0];
    const categoryMatch = categoryLine.match(/^([\d]+)\.\s*(.+?)\*\*/);
    
    if (!categoryMatch) continue;
    
    const categoryName = categoryMatch[2].trim();
    
    // Process each fruit line in this category
    for (let j = 1; j < lines.length; j++) {
      const line = lines[j].trim();
      
      // Check if line is a fruit item
      const fruitMatch = line.match(/^-\s*\*\*(.+?)\*\*/);
      
      if (fruitMatch) {
        const fruitName = fruitMatch[1].trim();
        
        // Handle varieties listed in parentheses
        let names: string[] = [];
        
        if (fruitName.includes('(') && fruitName.includes(')')) {
          // Extract varieties from parentheses
          const mainName = fruitName.split('(')[0].trim();
          const varietiesStr = fruitName.match(/\((.+?)\)/)?.[1];
          
          if (varietiesStr) {
            const varieties = varietiesStr.split(',').map(v => v.trim());
            names = varieties.map(v => `${mainName} (${v})`);
            
            // Also add the main category name
            if (!mainName.endsWith('s')) {
              names.unshift(mainName);
            }
          } else {
            names = [fruitName];
          }
        } else {
          names = [fruitName];
        }
        
        // Add each fruit with the category
        for (const name of names) {
          fruits.push({
            name,
            category: ['Fruit', categoryName]
          });
        }
      }
    }
  }
  
  return fruits;
}

// Main function to process fruits and generate food items
async function processFruits() {
  try {
    // Path to the fruit data file
    const dataFilePath = path.join(__dirname, '../attached_assets/Pasted-Here-s-a-comprehensive-list-of-fruits-with-Google-Images-search-links-for-each--1743992045896.txt');
    
    // Parse fruit data
    const fruits = parseFruitData(dataFilePath);
    console.log(`Parsed ${fruits.length} fruits from the data file.`);
    
    // For testing, just process a small subset
    const subset = fruits.slice(0, 5);
    
    // Generate food items for the subset
    const foodItems: FoodItemClient[] = [];
    
    for (const fruit of subset) {
      console.log(`Generating data for ${fruit.name}...`);
      
      try {
        const description = `${fruit.name} is a delicious fruit that belongs to the ${fruit.category[1]} category.`;
        
        // Using a smaller subset of languages for testing
        const testLanguages = ['en', 'es', 'fr', 'hi', 'ta'];
        
        const foodItem = await generateCompleteFoodItem(
          fruit.name,
          description,
          fruit.category,
          '', // No image path, will use default
          testLanguages
        );
        
        foodItems.push(foodItem);
        console.log(`Successfully generated data for ${fruit.name}`);
      } catch (error) {
        console.error(`Error generating data for ${fruit.name}:`, error);
      }
      
      // Add a small delay between API calls
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
    
    // Save the generated food items to a JSON file
    const outputFilePath = path.join(__dirname, '../generated-fruits.json');
    fs.writeFileSync(outputFilePath, JSON.stringify(foodItems, null, 2));
    
    console.log(`Successfully generated data for ${foodItems.length} fruits.`);
    console.log(`Data saved to ${outputFilePath}`);
  } catch (error) {
    console.error('Error processing fruits:', error);
  }
}

// Run the main function
processFruits();