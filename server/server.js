require('dotenv').config();
const express = require('express')
    , session = require('express-session')
    , bodyParser = require('body-parser')
    , massive = require('massive')
    , passport = require('passport')
    , Auth0Strategy = require('passport-auth0');

    //app
const app = express();

app.use(bodyParser.json());
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
}))

//     //passport
// app.use(passport.initialize());
// app.use(passport.session());

massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db);
})

    //auth0 strategy
// passport.use(new Auth0Strategy({
//     domain: process.env.AUTH_DOMAIN,
//     clientID: process.env.AUTH_CLIENT_ID,
//     clientSecret: process.env.AUTH_CLIENT_SECRET,
//     callbackURL: process.env.CALLBACK_URL
// }, function (accessToken, refreshToken, extraParams, profile, done) {

//     const db = app.get('db');

//     db.find_user([profile.identities[0].user_id]).then(user => {
//         // console.log(user);
//         if (user[0]) {
//             return done(null, user[0].user_id)
//         } else {
//             const user = profile._json;
//             db.create_user([user.name, user.email, user.picture, user.identities[0].user_id])
//                 .then(user => {
//                     return done(null, user[0].user_id);
//                 })
//         }
//     })
// }))

//     //auth0 authentication
// app.get('/auth', passport.authenticate('auth0'));
// app.get('/auth/callback', passport.authenticate('auth0', {
//     successRedirect: 'http://localhost:3000/#/browse',
//     failureRedirect: '/auth'
// }));
// app.get('/auth/me', (req, res) => {
//     if (!req.user) {
//         return res.status(404).send('User not found')
//     }
//     return res.status(200).send(req.user);
// })

// app.get('/auth/logout', (req, res) => {
//     req.logOut();
//     res.redirect(302, '/#/')
// })

//     //auth0 serialization
// passport.serializeUser(function (id, done) {
//     done(null, id);
// })
// passport.deserializeUser(function (id, done) {
//     app.get('db').find_current_user([id])
//         .then(user => {
//             done(null, user[0])
//         })
// })

    //controller calls
const controller = require('./controller/controller');

app.get('/books', controller.getBooks);



const PORT = 3005;
app.listen(PORT, console.log(`Listening on port ${PORT}`))