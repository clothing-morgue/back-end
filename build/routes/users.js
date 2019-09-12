"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _dbHelper = _interopRequireDefault(require("../data/dbHelper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var router = (0, _express.Router)(); // This get route makes sorting easy
// When you send a get request
// Simply add ?sortby=column_name to the end of the query string
// For example "http://localhost:3000/users?sortby=last_name"
// Will return all users sorted by their last names

router.get("/", function (req, res) {
  console.log(req.query);
  var sortField = req.query.sortby || "id";

  _dbHelper["default"].find().then(function (users) {
    var response = users.sort(function (a, b) {
      return a[sortField] < b[sortField] ? -1 : 1;
    });
    res.json(response);
  })["catch"](function (err) {
    res.status(500).json({
      message: "failed to get users",
      error: err
    });
  });
});
router.get("/:id", function (req, res) {
  var id = req.params.id;

  _dbHelper["default"].findById(id).then(function (user) {
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({
        err: "invalid user id"
      });
    }
  });
});
router.post("/",
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var user, _i, _arr, requiredParameter;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            user = req.body;
            _i = 0, _arr = ["first_name", "last_name", "email"];

          case 2:
            if (!(_i < _arr.length)) {
              _context.next = 9;
              break;
            }

            requiredParameter = _arr[_i];

            if (user[requiredParameter]) {
              _context.next = 6;
              break;
            }

            return _context.abrupt("return", res.status(422).send({
              error: "Expected format: { first_name: <String>, last_name: <String>, email: <String> }. You're missing a \"".concat(requiredParameter, "\" property.")
            }));

          case 6:
            _i++;
            _context.next = 2;
            break;

          case 9:
            _dbHelper["default"].add(user).then(function (user) {
              res.status(201).json({
                user: user
              });
            })["catch"](function (error) {
              res.status(500).json({
                error: error
              });
            });

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
router.put("/:id", function (req, res) {
  var id = req.params.id;
  res.status(200).json({
    url: "/users/".concat(id),
    operation: "PUT"
  });
});
router["delete"]("/:id", function (req, res) {
  var id = req.params.id;
  res.status(201).json({
    url: "/users/".concat(id),
    operation: "DELETE"
  });
});
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=users.js.map