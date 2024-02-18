import Pool from ("pg").Pool;
const pool = new Pool({
  user: "postgres",
  password: "00000000",
  host: "localhost",
  port: 5432,
  database: "MoneyManager",
});

module.exports = pool;
