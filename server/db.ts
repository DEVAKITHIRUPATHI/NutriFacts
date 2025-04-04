import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from '../shared/schema';

// Connection string is automatically provided by the environment variable
const connectionString = process.env.DATABASE_URL as string;

// Create the connection
const client = postgres(connectionString);

// Create the drizzle instance
export const db = drizzle(client, { schema });

// Export the raw postgres client for direct queries when needed
export const sql = client;