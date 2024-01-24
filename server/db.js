const { Pool } = require('pg');

const pool = new Pool({
  user: 'todoapp_g23f_user',
  password: 'YW9q0dCp3Ki10FchoWcZzzOueQNJICYr',
  host: 'dpg-cmo925gl5elc738rfipg-a', // Correct hostname
  database: 'todoapp_g23f',
  port: 5432, // or your specific port
});
module.exports = pool;
