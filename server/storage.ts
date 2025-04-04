import { users, foodItems, cartItems, type User, type InsertUser, type FoodItem, type InsertFoodItem, type CartItem, type InsertCartItem, type FoodItemClient } from "@shared/schema";
import { db, sql } from "./db";
import { eq, and, like, inArray } from "drizzle-orm";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;

  // Food item methods
  getAllFoodItems(): Promise<FoodItemClient[]>;
  getPopularFoodItems(): Promise<FoodItemClient[]>;
  getFoodItemById(id: string): Promise<FoodItemClient | undefined>;
  searchFoodItems(query?: string, category?: string, lang?: string): Promise<FoodItemClient[]>;
  getFoodItemsByCategory(category: string): Promise<FoodItemClient[]>;

  // Cart methods (if needed)
  getCartItems(userId: number): Promise<CartItem[]>;
  addToCart(cartItem: InsertCartItem): Promise<CartItem>;
  updateCartItemQuantity(id: number, quantity: number): Promise<CartItem | undefined>;
  removeCartItem(id: number): Promise<void>;
}

// Database implementation
export class DatabaseStorage implements IStorage {
  // User methods
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db.insert(users).values(insertUser).returning();
    return user;
  }

  // Food item methods
  async getAllFoodItems(): Promise<FoodItemClient[]> {
    const items = await db.select().from(foodItems);
    return items.map(this.mapToFoodItemClient);
  }

  async getPopularFoodItems(): Promise<FoodItemClient[]> {
    const items = await db.select().from(foodItems).where(eq(foodItems.isPopular, true));
    return items.map(this.mapToFoodItemClient);
  }

  async getFoodItemById(id: string): Promise<FoodItemClient | undefined> {
    const [item] = await db.select().from(foodItems).where(eq(foodItems.itemId, id));
    return item ? this.mapToFoodItemClient(item) : undefined;
  }

  async searchFoodItems(query?: string, category?: string, lang: string = 'en'): Promise<FoodItemClient[]> {
    // Use the regular drizzle query builder for standard cases
    let queryBuilder = db.select().from(foodItems);
    
    if (query) {
      // Since we can't directly use toLowerCase in drizzle, fall back to raw SQL
      let fieldName = lang === 'en' ? 'nameEn' : (lang === 'hi' ? 'nameHi' : 'nameTa');
      const searchQuery = query.toLowerCase();
      
      // Will need to get all items and filter in memory
      const items = await db.select().from(foodItems);
      const filteredItems = items.filter(item => {
        let nameValue = '';
        if (lang === 'en') nameValue = item.nameEn;
        else if (lang === 'hi') nameValue = item.nameHi;
        else if (lang === 'ta') nameValue = item.nameTa;
        
        return nameValue.toLowerCase().includes(searchQuery);
      });
      
      if (category && category !== 'all') {
        // Also filter by category
        return filteredItems
          .filter(item => item.categories.includes(category))
          .map(this.mapToFoodItemClient);
      }
      
      return filteredItems.map(this.mapToFoodItemClient);
    } 
    else if (category && category !== 'all') {
      // Get all items and filter by category
      const items = await db.select().from(foodItems);
      const filteredItems = items.filter(item => 
        item.categories.includes(category)
      );
      return filteredItems.map(this.mapToFoodItemClient);
    } 
    else {
      // No filters, return all items
      return this.getAllFoodItems();
    }
  }

  async getFoodItemsByCategory(category: string): Promise<FoodItemClient[]> {
    if (category === 'all') {
      return this.getAllFoodItems();
    }
    
    // Get all items and filter in memory
    const items = await db.select().from(foodItems);
    const filteredItems = items.filter(item => 
      item.categories.includes(category)
    );
    return filteredItems.map(this.mapToFoodItemClient);
  }

  // Cart methods (if needed)
  async getCartItems(userId: number): Promise<CartItem[]> {
    return db.select().from(cartItems).where(eq(cartItems.userId, userId));
  }

  async addToCart(cartItem: InsertCartItem): Promise<CartItem> {
    const [item] = await db.insert(cartItems).values(cartItem).returning();
    return item;
  }

  async updateCartItemQuantity(id: number, quantity: number): Promise<CartItem | undefined> {
    const [item] = await db.update(cartItems)
      .set({ quantity })
      .where(eq(cartItems.id, id))
      .returning();
    return item;
  }

  async removeCartItem(id: number): Promise<void> {
    await db.delete(cartItems).where(eq(cartItems.id, id));
  }

  // Helper method to map from database schema to client-facing schema
  private mapToFoodItemClient(item: any): FoodItemClient {
    // Handle both drizzle record objects and raw SQL results
    return {
      id: item.itemId || item.item_id,
      name: {
        en: item.nameEn || item.name_en || '',
        hi: item.nameHi || item.name_hi || '',
        ta: item.nameTa || item.name_ta || ''
      },
      description: {
        en: item.descriptionEn || item.description_en || '',
        hi: item.descriptionHi || item.description_hi || '',
        ta: item.descriptionTa || item.description_ta || ''
      },
      origin: item.origin || '',
      price: (item.price || 0) / 100, // Convert cents to dollars
      image: item.image || '',
      category: item.categories || item.category || [],
      nutrition: {
        calories: item.calories || 0,
        carbs: (item.carbs || 0) / 10, // Convert decigrames to grams
        protein: (item.protein || 0) / 10,
        fat: (item.fat || 0) / 10,
        fiber: (item.fiber || 0) / 10,
        vitamins: (item.vitamins as Record<string, string>) || {},
        // Enhanced nutritional information
        minerals: (item.minerals as Record<string, string>) || undefined,
        omega3: item.omega3 || undefined,
        omega6: item.omega6 || undefined,
        omega9: item.omega9 || undefined,
        collagen: item.collagen || undefined,
        antioxidants: (item.antioxidants as Record<string, string>) || undefined,
        probiotics: (item.probiotics as Record<string, string>) || undefined
      },
      // Additional health information
      healthBenefits: item.healthBenefits ? {
        en: item.healthBenefitsEn || '',
        hi: item.healthBenefitsHi || '',
        ta: item.healthBenefitsTa || ''
      } : undefined,
      recommendedIntake: item.recommendedIntake ? {
        en: item.recommendedIntakeEn || '',
        hi: item.recommendedIntakeHi || '',
        ta: item.recommendedIntakeTa || ''
      } : undefined,
      allergens: item.allergens || [],
      isPopular: Boolean(item.isPopular || item.is_popular)
    };
  }
}

// In-memory implementation (kept for reference)
export class MemStorage implements IStorage {
  private users: Map<number, User>;
  currentId: number;

  constructor() {
    this.users = new Map();
    this.currentId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  // Stubs for food item methods
  async getAllFoodItems(): Promise<FoodItemClient[]> {
    return [];
  }

  async getPopularFoodItems(): Promise<FoodItemClient[]> {
    return [];
  }

  async getFoodItemById(id: string): Promise<FoodItemClient | undefined> {
    return undefined;
  }

  async searchFoodItems(query?: string, category?: string): Promise<FoodItemClient[]> {
    return [];
  }

  async getFoodItemsByCategory(category: string): Promise<FoodItemClient[]> {
    return [];
  }

  // Stubs for cart methods
  async getCartItems(userId: number): Promise<CartItem[]> {
    return [];
  }

  async addToCart(cartItem: InsertCartItem): Promise<CartItem> {
    throw new Error("Method not implemented.");
  }

  async updateCartItemQuantity(id: number, quantity: number): Promise<CartItem | undefined> {
    return undefined;
  }

  async removeCartItem(id: number): Promise<void> {
    // Do nothing
  }
}

// Switch to database storage
export const storage = new DatabaseStorage();
