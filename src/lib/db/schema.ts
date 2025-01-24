import { pgTable, text, uuid } from "drizzle-orm/pg-core";
				
export const profileTable = pgTable("profile", {
    id: uuid("id").primaryKey(), 
    firstName: text("first_name").notNull(),//text from pg-core
    lastName: text("last_name").notNull(),
    email: text("email").notNull(),
})
