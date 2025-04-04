import { openDB, DBSchema, IDBPDatabase } from 'idb';
import type { FoodItemClient, CartItemClient } from '@shared/schema';

interface NutriGlobeDB extends DBSchema {
  foodItems: {
    key: string;
    value: FoodItemClient;
    indexes: { 'by-category': string[] };
  };
  cartItems: {
    key: string;
    value: {
      id: string;
      foodId: string;
      quantity: number;
    };
  };
  settings: {
    key: string;
    value: {
      language: 'en' | 'hi' | 'ta';
      isOffline: boolean;
      lastSync: number;
    };
  };
}

let db: IDBPDatabase<NutriGlobeDB>;

export async function initDB() {
  db = await openDB<NutriGlobeDB>('nutriglobe-db', 1, {
    upgrade(db) {
      // Create food items store with category index
      const foodStore = db.createObjectStore('foodItems', { keyPath: 'id' });
      foodStore.createIndex('by-category', 'category', { multiEntry: true });

      // Create cart items store
      db.createObjectStore('cartItems', { keyPath: 'id' });

      // Create settings store
      db.createObjectStore('settings', { keyPath: 'key' });
    },
  });

  return db;
}

export async function getDB() {
  if (!db) {
    await initDB();
  }
  return db;
}

// Food item operations
export async function storeFoodItems(items: FoodItemClient[]) {
  const db = await getDB();
  const tx = db.transaction('foodItems', 'readwrite');
  await Promise.all(items.map(item => tx.store.put(item)));
  await tx.done;
}

export async function getFoodItems(): Promise<FoodItemClient[]> {
  const db = await getDB();
  return db.getAll('foodItems');
}

export async function getFoodItemsByCategory(category: string): Promise<FoodItemClient[]> {
  const db = await getDB();
  if (category === 'all') {
    return db.getAll('foodItems');
  }
  return db.getAllFromIndex('foodItems', 'by-category', category);
}

export async function getFoodItemById(id: string): Promise<FoodItemClient | undefined> {
  const db = await getDB();
  return db.get('foodItems', id);
}

export async function searchFoodItems(query: string, category?: string): Promise<FoodItemClient[]> {
  const db = await getDB();
  let items: FoodItemClient[];
  
  if (category && category !== 'all') {
    items = await db.getAllFromIndex('foodItems', 'by-category', category);
  } else {
    items = await db.getAll('foodItems');
  }

  if (!query) return items;

  const lowerQuery = query.toLowerCase();
  return items.filter(item => 
    item.name.en.toLowerCase().includes(lowerQuery) ||
    item.name.hi.toLowerCase().includes(lowerQuery) ||
    item.name.ta.toLowerCase().includes(lowerQuery) ||
    item.description.en.toLowerCase().includes(lowerQuery) ||
    item.description.hi.toLowerCase().includes(lowerQuery) ||
    item.description.ta.toLowerCase().includes(lowerQuery)
  );
}

// Cart operations
export async function getCartItems(): Promise<{ id: string; foodId: string; quantity: number }[]> {
  const db = await getDB();
  return db.getAll('cartItems');
}

export async function addToCart(foodId: string) {
  const db = await getDB();
  const tx = db.transaction('cartItems', 'readwrite');
  
  // Check if item already exists
  const existingItems = await tx.store.getAll();
  const existingItem = existingItems.find(item => item.foodId === foodId);
  
  if (existingItem) {
    existingItem.quantity += 1;
    await tx.store.put(existingItem);
  } else {
    const newItem = {
      id: `cart-${Date.now()}`,
      foodId,
      quantity: 1
    };
    await tx.store.add(newItem);
  }
  
  await tx.done;
}

export async function updateCartItemQuantity(id: string, quantity: number) {
  const db = await getDB();
  const tx = db.transaction('cartItems', 'readwrite');
  
  const item = await tx.store.get(id);
  if (item) {
    item.quantity = quantity;
    await tx.store.put(item);
  }
  
  await tx.done;
}

export async function removeFromCart(id: string) {
  const db = await getDB();
  await db.delete('cartItems', id);
}

export async function clearCart() {
  const db = await getDB();
  const tx = db.transaction('cartItems', 'readwrite');
  await tx.store.clear();
  await tx.done;
}

// Settings operations
export async function getSettings() {
  const db = await getDB();
  const settings = await db.get('settings', 'user-settings');
  
  if (!settings) {
    const defaultSettings = {
      key: 'user-settings',
      language: 'en' as const,
      isOffline: false,
      lastSync: Date.now()
    };
    await db.put('settings', defaultSettings);
    return defaultSettings;
  }
  
  return settings;
}

export async function updateSettings(settings: {
  language?: 'en' | 'hi' | 'ta';
  isOffline?: boolean;
  lastSync?: number;
}) {
  const db = await getDB();
  const currentSettings = await getSettings();
  
  const updatedSettings = {
    ...currentSettings,
    ...settings
  };
  
  await db.put('settings', updatedSettings);
  return updatedSettings;
}
