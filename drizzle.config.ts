import { defineConfig } from 'drizzle-kit';
// if (!process.env.DATABASE_URL) throw new Error('DATABASE_URL is not set');

export default defineConfig({
	dialect: 'postgresql', // 'mysql' | 'sqlite' | 'turso'
	schema: './src/lib/db/schema.ts',
	out: "./supabase/migrations",
	dbCredentials: {
	host: 'localhost',
	port: 54321,
	user: 'postgres',
	password: "postgres",
	database: 'supabase',
	}

});
