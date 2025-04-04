import { pgTable, text, serial, integer, boolean, json, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// User schema remains the same for authentication purposes
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

// Food items table for nutrition facts
export const foodItems = pgTable("food_items", {
  id: serial("id").primaryKey(),
  itemId: text("item_id").notNull().unique(), // e.g., "mango_alphonso"
  nameEn: text("name_en").notNull(),
  nameHi: text("name_hi").notNull(),
  nameTa: text("name_ta").notNull(),
  descriptionEn: text("description_en").notNull(),
  descriptionHi: text("description_hi").notNull(),
  descriptionTa: text("description_ta").notNull(),
  origin: text("origin").notNull(),
  price: integer("price").notNull(), // Stored in cents
  image: text("image").notNull(),
  categories: text("categories").array().notNull(),
  calories: integer("calories").notNull(),
  carbs: integer("carbs").notNull(), // Stored as decigrames (0.1g)
  protein: integer("protein").notNull(), // Stored as decigrames (0.1g)
  fat: integer("fat").notNull(), // Stored as decigrames (0.1g)
  fiber: integer("fiber").notNull(), // Stored as decigrames (0.1g)
  vitamins: jsonb("vitamins").notNull(),
  allergens: text("allergens").array().notNull(),
  isPopular: boolean("is_popular").notNull().default(false),
});

export const insertFoodItemSchema = createInsertSchema(foodItems).omit({
  id: true,
});

// Cart items table
export const cartItems = pgTable("cart_items", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull().references(() => users.id),
  foodItemId: text("food_item_id").notNull().references(() => foodItems.itemId),
  quantity: integer("quantity").notNull().default(1),
});

export const insertCartItemSchema = createInsertSchema(cartItems).omit({
  id: true,
});

// Define all types
export type User = typeof users.$inferSelect;
export type InsertUser = z.infer<typeof insertUserSchema>;

export type FoodItem = typeof foodItems.$inferSelect;
export type InsertFoodItem = z.infer<typeof insertFoodItemSchema>;

export type CartItem = typeof cartItems.$inferSelect;
export type InsertCartItem = z.infer<typeof insertCartItemSchema>;

// Additional types for frontend use
export type TranslatedContent = {
  en: string;
  hi: string;
  ta: string;
};

export type FoodItemClient = {
  id: string;
  name: TranslatedContent;
  description: TranslatedContent;
  origin: string;
  price: number;
  image: string;
  category: string[];
  nutrition: {
    calories: number;
    carbs: number;
    protein: number;
    fat: number;
    fiber: number;
    vitamins: Record<string, string>;
  };
  allergens: string[];
  isPopular: boolean;
};

export type CartItemClient = {
  id: string;
  foodItem: FoodItemClient;
  quantity: number;
};

export type Language = 'en' | 'hi' | 'ta';
