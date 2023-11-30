import { Application, Router } from "https://deno.land/x/oak@v12.6.1/mod.ts";
import { drizzle } from 'npm:drizzle-orm/vercel-postgres';
import { sql } from "npm:@vercel/postgres";
import {
  pgTable,
  text,
} from "npm:drizzle-orm/pg-core";

// Use this object to send drizzle queries to your DB
export const db = drizzle(sql);

// Create a pgTable that maps to a table in your DB
export const AccessTable = pgTable(
  'Access',
  {
    id: text('id').primaryKey(),
  },
);

const router = new Router();

router.get("/api/portfolio", async ({ response }) => {
  const ids = await db.select().from(AccessTable);
  response.body = ids;
});

const portfolioApp = new Application();
portfolioApp.use(router.routes());
portfolioApp.use(router.allowedMethods());

export default portfolioApp.handle
