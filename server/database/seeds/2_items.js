/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

 
 exports.seed = async function(knex) {
   // Deletes ALL existing entries
   pass = await await bcrypt.hash('secret', 10);
   await knex('items').del()
   await knex('items').insert([
     {item_id: 'm1', item_name: 'page', price: 30},
     {item_id: 'm2', item_name: 'acrylic page', price: 180},
     {item_id: 'e1', item_name: 'envelope', price: 30},
     {item_id: 'e2', item_name: 'envelope liner', price: 10},
     {item_id: 'e3', item_name: 'envelope lock', price: 5},
     {item_id: 't1', item_name: 'plain print', price: 30},
     {item_id: 't2', item_name: 'foil print header', price: 40},
     {item_id: 't3', item_name: 'foil print all', price: 60},
     {item_id: 't4', item_name: 'emboss', price: 20},
     {item_id: 'p1', item_name: 'RSVP', price: 20},
     {item_id: 'p2', item_name: 'monetary gift page', price: 20},
     {item_id: 'p3', item_name: 'his/her vows', price: 80},
     {item_id: 'co1', item_name: 'translucent cover', price: 60},
     {item_id: 'co2', item_name: 'trifold cover', price: 60},
     {item_id: 'co3', item_name: 'cover with print', price: 120},
     {item_id: 'co4', item_name: 'lasercut cover', price: 60},
     {item_id: 'ca1', item_name: 'menu cards', price: 20},
     {item_id: 'ca2', item_name: 'seat cards', price: 20},
     {item_id: 'ca3', item_name: 'table cards', price: 20},
     {item_id: 'd1', item_name: 'wax seal', price: 15},
     {item_id: 'd2', item_name: 'dried flowers', price: 40},
     {item_id: 'd3', item_name: 'brooch', price: 50}

     
   ]);
 };
 