const { Pool } = require('pg');

const pool = new Pool({
  user: 'todoapp_vt25_user',
  password: 'vRSiDyOoqfuK03KbZAzxO5iM34zsfOCv',
  host: 'dpg-couid1n79t8c739i6pv0-a', // Correct hostname
  database: 'todoapp_vt25',
  port: 5432, // or your specific port
});
module.exports = pool;
