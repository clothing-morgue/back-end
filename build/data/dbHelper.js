"use strict";

var _dbConfig = _interopRequireDefault(require("./dbConfig"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

module.exports = {
  find: find,
  findById: findById,
  add: add
}; // this is the equivalent of db.select('*').from('users')

function find() {
  return (0, _dbConfig["default"])("users");
} // This example resolves to an array containing a single user
// (or an empty array)
// function findById(id) {
//   return db('users').where({ id });
// };
// This version resolves to a single user (or null)


function findById(id) {
  return (0, _dbConfig["default"])("users").where({
    id: id
  }).first();
} // An alternate way to write that would be db('users').where({ id: 3 });


function add(_x) {
  return _add.apply(this, arguments);
}

function _add() {
  _add = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(user) {
    var addedUser;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _dbConfig["default"])('users').returning('id').insert(user);

          case 2:
            addedUser = _context.sent;
            return _context.abrupt("return", findById(addedUser[0]));

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _add.apply(this, arguments);
}
//# sourceMappingURL=dbHelper.js.map