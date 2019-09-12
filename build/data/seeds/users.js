"use strict";

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users").del().then(function () {
    // Inserts seed entries
    return knex("users").insert([{
      id: 1,
      last_name: "Nobles",
      first_name: "Carrie",
      email: "carrienobles@yahoo.com",
      admin: true
    }, {
      id: 2,
      last_name: "Poundstone",
      first_name: "Paula",
      email: "paulapoundstone@yahoo.com",
      admin: true
    }, {
      id: 3,
      last_name: "Bugajski",
      first_name: "Joe",
      email: "joebugajski@gmail.com",
      admin: true
    }, {
      id: 4,
      last_name: "Bingo",
      first_name: "Todd",
      email: "toddbingo@gmail.com",
      admin: false
    }, {
      id: 5,
      last_name: "Hogan",
      first_name: "Hulk",
      email: "hulkster@yahoo.com",
      admin: false
    }, {
      id: 6,
      last_name: "Colgate",
      first_name: "Niles",
      email: "nilescolgate@yahoo.com",
      admin: false
    }]);
  });
};
//# sourceMappingURL=users.js.map