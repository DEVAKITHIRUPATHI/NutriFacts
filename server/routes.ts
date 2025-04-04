import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { foodItems } from "../shared/mockData";
import type { FoodItemClient, Language } from "../shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  const httpServer = createServer(app);

  // API routes prefix
  const API_PREFIX = "/api";

  // Get all food items
  app.get(`${API_PREFIX}/foods`, (req, res) => {
    res.json(foodItems);
  });

  // Get popular food items
  app.get(`${API_PREFIX}/foods/popular`, (req, res) => {
    const popularItems = foodItems.filter(item => item.isPopular);
    res.json(popularItems);
  });

  // Get food item by ID
  app.get(`${API_PREFIX}/foods/:id`, (req, res) => {
    const { id } = req.params;
    const foodItem = foodItems.find(item => item.id === id);
    
    if (!foodItem) {
      return res.status(404).json({ message: 'Food item not found' });
    }
    
    res.json(foodItem);
  });

  // Search for food items
  app.get(`${API_PREFIX}/foods/search`, (req, res) => {
    const { query, category, lang = 'en' } = req.query;
    let filteredItems = [...foodItems];
    
    if (query) {
      const searchQuery = String(query).toLowerCase();
      filteredItems = filteredItems.filter(item => 
        item.name[lang as Language].toLowerCase().includes(searchQuery) || 
        item.description[lang as Language].toLowerCase().includes(searchQuery)
      );
    }
    
    if (category && category !== 'all') {
      filteredItems = filteredItems.filter(item => 
        item.category.includes(String(category))
      );
    }
    
    res.json(filteredItems);
  });

  // Get food items by category
  app.get(`${API_PREFIX}/foods/category/:category`, (req, res) => {
    const { category } = req.params;
    
    if (category === 'all') {
      return res.json(foodItems);
    }
    
    const filteredItems = foodItems.filter(item => 
      item.category.includes(category)
    );
    
    res.json(filteredItems);
  });

  // Check if server is online (for offline mode testing)
  app.get(`${API_PREFIX}/status`, (req, res) => {
    res.json({ status: 'online' });
  });

  return httpServer;
}
