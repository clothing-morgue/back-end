"use strict";

require("core-js/stable");

require("regenerator-runtime/runtime");

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _cloudinary = _interopRequireDefault(require("cloudinary"));

var _routes = _interopRequireDefault(require("./routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

require("dotenv/config");

var app = (0, _express["default"])();
app.use((0, _cors["default"])());
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: true
})); // app.use((req, res, next) => {
//   req.context = {
//     models,
//     me: models.users[1]
//   };
//   next();
// });

app.use("/session", _routes["default"].session);
app.use("/users", _routes["default"].users);
app.use("/messages", _routes["default"].messages);
app.get("/", function (req, res) {
  return res.send("What are you doing here?");
});
module.exports = app;
//# sourceMappingURL=server.js.map