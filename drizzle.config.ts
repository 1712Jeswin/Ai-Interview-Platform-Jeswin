import { env } from '@/data/env/server';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: './src/drizzle/migrations',
  schema: './src/app/drizzle/schema.ts',  // <-- fixed path
  dialect: 'postgresql',
  dbCredentials: {
    url: env.DATABASE_URL!,
  },
});
