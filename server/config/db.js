const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "portfolio_db",
  password: "kamali06",
  port: 5433,
});

module.exports = pool;