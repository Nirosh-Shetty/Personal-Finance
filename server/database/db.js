import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
  user: "postgres",
  password: "00000000",
  host: "localhost",
  port: 5432,
  database: "MoneyManager",
});

export default pool;

//user db
//incmome db
//expense db
//catagories db
