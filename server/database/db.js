import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
  user: "postgres",
  password: process.env.PGPASSWORD,
  host: "localhost",
  port: 5432,
  database: "MoneyManager",
});

export default pool;
