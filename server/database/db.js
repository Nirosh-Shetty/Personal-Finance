import pkg from "pg";
const { Pool } = pkg;

import dotenv from "dotenv";
dotenv.config();
const pool = new Pool({
  user: "postgres",
  password: process.env.PGPASSWORD,
  host: "localhost",
  port: 5432,
  database: "MoneyManager",
});

export default pool;
