const { Pool } = require('pg');

const pool = new Pool({
  user: 'todoapp_6d2w_user',
  password: 'qFxQSfzrjGYyhuCTdMmATLDDEZsxc9LK',
  host: 'dpg-cmo6ha5a73kc73b4etjg-a.ohio-postgres.render.com', // Correct hostname
  database: 'todoapp_6d2w',
  port: 5432, // or your specific port
});
module.exports = pool;
