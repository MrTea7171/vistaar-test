const mongoose = require('mongoose')
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy

const clientID = process.env.CLIENT_ID
const clientSecret = process.env.CLIENT_SECRET
const callbackURL = '/auth/google/callback'
const User = mongoose.model('users')

passport.serializeUser((user, done) => {
    done(null, user.id)
})

passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        done(null, user)
    })
})

passport.use(
    new GoogleStrategy(
        {
            clientID,
            clientSecret,
            callbackURL,
        },
        async function (acessToken, refreshToken, profile, done) {
            const userExists = await User.findOne({
                googleID: profile.id,
            })
            if (userExists) {
                done(null, userExists)
            } else {
                const user = await new User({
                    googleID: profile.id,
                    name: profile.displayName,
                }).save()
                done(null, user)
            }
        }
    )
)
