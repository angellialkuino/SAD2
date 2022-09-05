/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

const uuid = require('uuid');
const bcrypt = require('bcrypt');

exports.seed = async function(knex) {
  // Deletes ALL existing entries
  pass = await await bcrypt.hash('secret', 10);
  await knex('users').del()
  await knex('users').insert([
    {user_id: uuid.v4(), role: 'customer', full_name: 'Angelli Kezzed M. Alkuino', phone_number: '09078216011', email: 'aaa@gmail.com', password: pass, fb_account: 'angelli.alkuino', full_address: 'address##adress'},
    {user_id: uuid.v4(), role: 'customer', full_name: 'Amelie Kris M. Alkuino', phone_number: '09088888', email: 'bbb@gmail.com', password: await bcrypt.hash('shhhh', 10), fb_account: 'aa.alkuino', full_address: 'address##'},
    {user_id: uuid.v4(), role: 'customer', full_name: 'Arnold Kite M. Alkuino', phone_number: '7676767', email: 'ccc@gmail.com', password: await bcrypt.hash('hmmmm', 10), fb_account: 'arnold.alkuino', full_address: 'address##add'},
    {user_id: uuid.v4(), role: 'staff', full_name: 'Andy Kim M. Alkuino', phone_number: '66554', email: 'ddd@gmail.com', password: await bcrypt.hash('idkidkidk', 10), fb_account: 'and.alk', full_address: 'address####'},
    {user_id: uuid.v4(), role: 'staff', full_name: 'Aabe Korry M. Alkuino', phone_number: '89899898', email: 'eee@gmail.com', password: await bcrypt.hash('password', 10), fb_account: 'aabe.alkuino', full_address: 'address'},
    {user_id: uuid.v4(), role: 'staff', full_name: 'Aaron Kill M. Alkuino', phone_number: '78', email: 'fff@gmail.com', password: await bcrypt.hash('password123', 10), fb_account: 'dyin.a', full_address: 'addadd'},
    {user_id: uuid.v4(), role: 'staff', full_name: 'Amm Kigh M. Alkuino', phone_number: '9999', email: 'hhh@gmail.com', password: await bcrypt.hash('testpass', 10), fb_account: 'ehm.alkuino', full_address: 'addresssssss'},

    
  ]);
};
