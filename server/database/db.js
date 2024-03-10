import pkg from "pg";
const { Pool } = pkg;

import dotenv from "dotenv";
dotenv.config();
const pool = new Pool({
  user: "postgres",
<<<<<<< HEAD
  password: process.env.PGPASSWORD,
=======
  password: "00000000",
>>>>>>> 368a90ebde4f986cd2323520c4b63d2e88035ede
  host: "localhost",
  port: 5432,
  database: "MoneyManager",
});

export default pool;
