"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _knex = _interopRequireDefault(require("knex"));

var _knexfile = _interopRequireDefault(require("../../knexfile"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//require('dotenv').config();
var dbEngine = process.env.DB_ENV || "development";
var config = _knexfile["default"][dbEngine];
console.log(config);

var _default = (0, _knex["default"])(config);

exports["default"] = _default;
//# sourceMappingURL=dbConfig.js.map