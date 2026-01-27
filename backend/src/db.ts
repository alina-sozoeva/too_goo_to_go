import { Pool } from "pg";

export const pool = new Pool({
  host: "postgres",
  user: "togouser",
  password: "togopass",
  database: "togouserdb",
  port: 5432,
});
