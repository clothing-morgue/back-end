
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('shipping').del()
    .then(function () {
      // Inserts seed entries
      return knex('shipping').insert([
        {
          id: 1, 
          user_id: 1,
          street_address: '123 Fake Street',
          city: 'Hobart',
          state: 'IN',
          zip: 46342
        },
        {
          id: 2, 
          user_id: 2,
          street_address: '456 Real Street',
          city: 'LaPorte',
          state: 'IN',
          zip: 34526
        },
        {
          id: 3, 
          user_id: 3,
          street_address: '13301 Commercial Ave',
          city: 'Hegewisch',
          state: 'IL',
          zip: 60633
        },
        {
          id: 4, 
          user_id: 4,
          street_address: '33 Pillsbury Lane',
          city: 'Newbern',
          state: 'Tennessee',
          zip: 23990
        },
        {
          id: 5, 
          user_id: 5,
          street_address: '215 Elm Street',
          city: 'Shady Pines',
          state: 'Minnesota',
          zip: 34450
        },
        {
          id: 6, 
          user_id: 6,
          street_address: '35 Hawthorne Rd.',
          city: 'Northridge',
          state: 'Wyoming',
          zip: 34495
        }
      ]);
    });
};
