const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "ohm1506",
  host: "localhost",
  database: "perntodo",
});

module.exports = pool;
