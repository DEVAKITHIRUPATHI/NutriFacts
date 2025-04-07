import type { Express, Request, Response, NextFunction } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import type { Language, FoodItemClient } from "../shared/schema";
import { generateCompleteFoodItem } from "./utils/anthropicHelper";

export async function registerRoutes(app: Express): Promise<Server> {
  const httpServer = createServer(app);

  // API routes prefix
  const API_PREFIX = "/api";

  // Error handling middleware
  const asyncHandler = (fn: Function) => (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };

  // Get all food items
  app.get(`${API_PREFIX}/foods`, asyncHandler(async (req: Request, res: Response) => {
    const foodItems = await storage.getAllFoodItems();
    res.json(foodItems);
  }));

  // Get popular food items
  app.get(`${API_PREFIX}/foods/popular`, asyncHandler(async (req: Request, res: Response) => {
    const popularItems = await storage.getPopularFoodItems();
    res.json(popularItems);
  }));

  // Search for food items - must come before /:id route to avoid conflicts
  app.get(`${API_PREFIX}/foods/search`, asyncHandler(async (req: Request, res: Response) => {
    const query = req.query.query as string | undefined;
    const category = req.query.category as string | undefined;
    const lang = (req.query.lang || 'en') as Language;
    
    const filteredItems = await storage.searchFoodItems(query, category, lang);
    res.json(filteredItems);
  }));

  // Get food items by category
  app.get(`${API_PREFIX}/foods/category/:category`, asyncHandler(async (req: Request, res: Response) => {
    const { category } = req.params;
    const filteredItems = await storage.getFoodItemsByCategory(category);
    res.json(filteredItems);
  }));

  // Get food item by ID
  app.get(`${API_PREFIX}/foods/:id`, asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;
    const foodItem = await storage.getFoodItemById(id);
    
    if (!foodItem) {
      return res.status(404).json({ message: 'Food item not found' });
    }
    
    res.json(foodItem);
  }));

  // Check if server is online (for offline mode testing)
  app.get(`${API_PREFIX}/status`, (req, res) => {
    res.json({ status: 'online' });
  });

  // Generate food item with multilingual content using Claude
  app.post(`${API_PREFIX}/foods/generate`, asyncHandler(async (req: Request, res: Response) => {
    const { foodName, description, categories, imagePath, languages } = req.body;
    
    if (!foodName || !description || !categories) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    
    try {
      const newFoodItem = await generateCompleteFoodItem(
        foodName,
        description,
        categories,
        imagePath,
        languages || ['en', 'es', 'fr', 'hi', 'ta']
      );
      
      res.json(newFoodItem);
    } catch (error) {
      console.error('Error generating food item:', error);
      res.status(500).json({ error: 'Failed to generate food item' });
    }
  }));

  // Batch generate multiple food items
  app.post(`${API_PREFIX}/foods/batch-generate`, asyncHandler(async (req: Request, res: Response) => {
    const { foodItems, languages } = req.body;
    
    if (!foodItems || !Array.isArray(foodItems) || foodItems.length === 0) {
      return res.status(400).json({ error: 'Invalid food items array' });
    }
    
    try {
      // Using Promise.all to process multiple items in parallel
      const languageCodes = languages || ['en', 'es', 'fr', 'hi', 'ta'];
      const generatedItems: FoodItemClient[] = [];
      
      // Process in smaller batches to avoid overwhelming the API
      const batchSize = 5;
      
      for (let i = 0; i < foodItems.length; i += batchSize) {
        const batch = foodItems.slice(i, i + batchSize);
        
        const batchResults = await Promise.all(
          batch.map(async (item: any) => {
            return generateCompleteFoodItem(
              item.name,
              item.description || `${item.name} is a nutritious food.`,
              item.categories || ['fruits'],
              item.imagePath || '',
              languageCodes
            );
          })
        );
        
        generatedItems.push(...batchResults);
        
        // Small delay between batches to avoid rate limiting
        if (i + batchSize < foodItems.length) {
          await new Promise(resolve => setTimeout(resolve, 1000));
        }
      }
      
      res.json(generatedItems);
    } catch (error) {
      console.error('Error batch generating food items:', error);
      res.status(500).json({ error: 'Failed to generate food items' });
    }
  }));

  return httpServer;
}
