const express = require ('express')
const app = express()

require('dotenv').config();


//parses incomming JSON requests and puts the parsed data in req.body
app.use(express.json());

/* ask kuya raph? 
const server = require('http').createServer(app);
*/

//for all paths?? all req will have api
app.use('/api', require('./routes/api/index'));

app.listen(process.env.PORT, ()=>{
    console.log(`Listening on port ${process.env.PORT}`);
})