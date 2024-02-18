import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
  user: "your_postgres_user",
  password: "your_postgres_password",
  host: "localhost",
  port: 5432,
  database: "your_database_name",
});

export default pool;
