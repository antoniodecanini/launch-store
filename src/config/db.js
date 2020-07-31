const { Pool } = require("pg");

module.exports = new Pool({
  user: "decanini",
  password: "9jmrzrdw",
  host: "localhost",
  port: 5432,
  database: "launchstoredb",
});
