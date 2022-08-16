require('dotenv').config({path: './.env'}); //{path: '../.env'}

//why does this return undefined????
console.log(process.env.PORT);

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