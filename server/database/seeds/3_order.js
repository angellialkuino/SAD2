/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

 const uuid = require('uuid');
 const db = require('../db');
 
 exports.seed = async function(knex) {
   // Deletes ALL existing entries
   await db.transaction( async (trx) => {
        userIds = await trx('users')
                    .select('user_id');
   });

   //console.log(userIds[0]);

   await knex('order').del()
   await knex('order').insert([
     {order_id: uuid.v4(), user_id:userIds[0].user_id, invite_type: 'Do not open', material: 'dud', event_date: '2022-09-10', motif: 'flowers', invite_title:'Sweet Sixteen', font_style: 'fancy sans', content_link: 'googledocs.com', num_of_invites: 30, peg_link: 'pinterest.com', date_ordered: '2022-08-30 13:30:30', order_deadline: '2022-09-10', claim_type: 'pick-up', order_status: 'pending'},
    
     
   ]);
 };