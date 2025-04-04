import type { Express, Request, Response, NextFunction } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import type { Language } from "../shared/schema";

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

  return httpServer;
}
