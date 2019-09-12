"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _session = _interopRequireDefault(require("./session"));

var _users = _interopRequireDefault(require("./users"));

var _messages = _interopRequireDefault(require("./messages"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  session: _session["default"],
  users: _users["default"],
  messages: _messages["default"]
};
exports["default"] = _default;
//# sourceMappingURL=index.js.map