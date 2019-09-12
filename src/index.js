require('dotenv').config();
require('express-async-errors');

const server = require('./server.js');

const port = process.env.PORT || 3000;

server.listen(port, () => {console.log(`\n Clothing Morgue listening on port ${process.env.PORT}! \n`)});