const knex = require('knex');
const knexfile = require('./knexfile');

const db = knex(knexfile.development);

module.exports = db;

//require('dotenv').config({path: './.env'}); //{path: '../.env'}

//why does this return undefined???? when path ./../.env or anythin else? ugh
//console.log(process.env.PORT);

// const knex = require('knex')({
//     client: 'mysql',
//     connection: {
//       host : process.env.DB_HOST,
//       port : process.env.PORT,
//       user : process.env.DB_USER,
//       password : process.env.DB_PASS,
//       database : 'myapp_test' //add database name
//     }
//   });