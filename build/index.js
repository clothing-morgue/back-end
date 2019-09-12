"use strict";

require('dotenv').config();

require('express-async-errors');

var server = require('./server.js');

var port = process.env.PORT || 3000;
server.listen(port, function () {
  console.log("\n Clothing Morgue listening on port ".concat(process.env.PORT, "! \n"));
});
//# sourceMappingURL=index.js.map