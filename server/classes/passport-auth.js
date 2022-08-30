const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const service = require('../services/userServices');
const check = require('./check');

passport.use(new LocalStrategy({ usernameField: 'email'}, 
    async (email, password, done) => {
        try {
            const user = await service.findUser(email);
            //console.log(user);
            if (!user) { return done(null, false)}

            const isValid = await check.validPassword(password, user.password);
            console.log(password);
            console.log(user.password);


            if (isValid) {
                console.log(`this aint runnin ryt? ${isValid}`);
                return done(null,user); //passport allows to go to route
            }else{
                return done(null, false); //not allow to route
            }

        } catch (err) {
            done(err);
        }
        
    }
))

passport.serializeUser((user, done) => {
    //console.log(user.user_id)
    done(null, user.user_id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await service.findUserbyId(id);
        if (user){
        //console.log(user);
        return done(null, user)}
    } catch (err) {
        done(err);
        console.log(err);
    }
});
