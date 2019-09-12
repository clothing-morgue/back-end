exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("products")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("products").insert([
        {
          id: 1,
          name: "Ham Sandwich",
          price: 5.22,
          cost: 3.22,
          description: "It's just a ham sandwich. Nothing to crazy.",
          category: "Food"
        },
        {
          id: 2,
          name: "Dinosaur Egg",
          price: 6.22,
          cost: 2.22,
          description: "It's just a Dinosaur Egg. Nothing to crazy.",
          category: "Food"
        },
        {
          id: 3,
          name: "Samurai Sword",
          price: 45.25,
          cost: 3.22,
          description: "It's just a Samurai Sword. Nothing to crazy.",
          category: "Weapon"
        },
        {
          id: 4,
          name: "Pepper Spray",
          price: 25.22,
          cost: 3.22,
          description: "It's just a Pepper Spray. Nothing to crazy.",
          category: "Weapon"
        },
        {
          id: 5,
          name: "Fishing Pole",
          price: 35.22,
          cost: 3.22,
          description: "It's just a Fishing Pole. Nothing to crazy.",
          category: "Outdoors"
        },
        {
          id: 6,
          name: "Tonka Truck",
          price: 15.22,
          cost: 3.22,
          description: "It's just a Tonka Truck. Nothing to crazy.",
          category: "Toys"
        },
        {
          id: 7,
          name: "Picnic Basket",
          price: 5.22,
          cost: 3.22,
          description: "It's just a Picnic Basket. Nothing to crazy.",
          category: "Outdoors"
        }
      ]);
    });
};
