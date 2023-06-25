import { Pool } from "pg";

export const pool = new Pool({
  user: "postgres",
  host: "localhost",
  password: "Nintendo64",
  database: "Instrumaster",
  port: 5432,
});
