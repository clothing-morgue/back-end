"use strict";

require("dotenv/config");

var _cors = _interopRequireDefault(require("cors"));

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

console.log('Hello, Visual Studio programmer! \n \n Remember to have fun! \n');
console.log(process.env.MY_SECRET);
var app = (0, _express["default"])();
app.use((0, _cors["default"])());
app.get('/', function (req, res) {
  res.send('Hello from Node!');
});
app.get('/test', function (req, res) {
  res.send('Hello from test!');
});
app.listen(process.env.PORT, function () {
  return console.log("\n Clothing Morgue listening on port ".concat(process.env.PORT, "! \n"));
});
//# sourceMappingURL=index.js.map