const express = require('express');
const app = express();
const session = require('express-session');
const passport = require('passport');
const KnexStore = require('connect-session-knex')(session);
const db = require('./database/db');
require('./classes/passport-auth');
require('dotenv').config();
const cors = require('cors');

app.use(cors()); //to connect front n back

//parses incomming JSON requests and puts the parsed data in req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* ask kuya raph? 
const server = require('http').createServer(app);
*/

const sessStore = new KnexStore({ knex: db });

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: sessStore
}));

app.use(passport.initialize()); //initialize passport middleware
app.use(passport.session());

app.use((req,res,next)=>{
    console.log(req.session);
    console.log(req.user);
    next();
});

app.use('/api', require('./routes/api/index'));

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
});