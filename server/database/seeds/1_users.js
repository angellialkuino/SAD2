/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

const uuid = require('uuid');
const bcrypt = require('bcrypt');

exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {user_id: uuid.v4(), role: 'customer', full_name: 'Angelli Kezzed M. Alkuino', phone_number: '09078216011', email: 'aaa@gmail.com', password: await bcrypt.hash('uhm', 10), fb_account: 'angelli.alkuino', address: 'address##adress', barangay: '20B', postal_code: '8000'},
    {user_id: uuid.v4(), role: 'customer', full_name: 'Amelie Kris M. Alkuino', phone_number: '09088888', email: 'bbb@gmail.com', password: await bcrypt.hash('shhhh', 10), fb_account: 'aa.alkuino', address: 'address##', barangay: '20B', postal_code: '8000'},
    {user_id: uuid.v4(), role: 'customer', full_name: 'Arnold Kite M. Alkuino', phone_number: '7676767', email: 'ccc@gmail.com', password: await bcrypt.hash('hmmmm', 10), fb_account: 'arnold.alkuino', address: 'address##add', barangay: '20B', postal_code: '8000'},
    {user_id: uuid.v4(), role: 'staff', full_name: 'Andy Kim M. Alkuino', phone_number: '66554', email: 'ddd@gmail.com', password: await bcrypt.hash('idkidkidk', 10), fb_account: 'and.alk', address: 'address####', barangay: '20B', postal_code: '8000'},
    {user_id: uuid.v4(), role: 'staff', full_name: 'Aabe Korry M. Alkuino', phone_number: '89899898', email: 'eee@gmail.com', password: await bcrypt.hash('password', 10), fb_account: 'aabe.alkuino', address: 'address', barangay: '20B', postal_code: '8000'},
    {user_id: uuid.v4(), role: 'staff', full_name: 'Aaron Kill M. Alkuino', phone_number: '78', email: 'fff@gmail.com', password: await bcrypt.hash('password123', 10), fb_account: 'dyin.a', address: 'addadd', barangay: '20B', postal_code: '8000'},
    {user_id: uuid.v4(), role: 'staff', full_name: 'Amm Kigh M. Alkuino', phone_number: '9999', email: 'hhh@gmail.com', password: await bcrypt.hash('testpass', 10), fb_account: 'ehm.alkuino', address: 'addresssssss', barangay: '20B', postal_code: '8000'},
    {user_id: uuid.v4(), role: 'owner', full_name: 'Mommy Yancy', phone_number: '9999', email: 'craft@gmail.com', password: await bcrypt.hash('craft', 10), fb_account: 'hvn.tupas', address: 'addresssssss', barangay: '20B', postal_code: '8000'}
    
  ]);
};
