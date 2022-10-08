const express = require('express');
const app = express();
const session = require('express-session');
const passport = require('passport');
const KnexStore = require('connect-session-knex')(session);
const db = require('./database/db');
require('./classes/passport-auth');
require('dotenv').config();
const cors = require('cors');

app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
})); //to connect front n back

//parses incomming JSON requests and puts the parsed data in req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('images'))

/* ask kuya raph? 
const server = require('http').createServer(app);
*/

const sessStore = new KnexStore({ knex: db });

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    store: sessStore,
    cookie: {
        maxAge: 1000 * 60 *3
    }
}));

app.use(passport.initialize()); //initialize passport middleware
app.use(passport.session());

app.use((req,res,next)=>{
    console.log(`session ID: ${req.sessionID}`);
    console.log(req.session);
    console.log(req.user);
    next();
});

app.use('/api', require('./routes/api/index'));

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
});