
module.exports = (function(passport){

    //TODO:: fully research passport and passport-discord to ensure security and best practices
    //TODO:: wire Discord identity to firebase user (create if not exists?)
    //TODO:: ensure seperation of concerns are as follows: Discord is the identity provider (authentication), firebase is the permissions provider (authorization)
    const DiscordStrategy = require('passport-discord').Strategy;
    var scopes = ['identify', 'email', 'guilds', 'guilds.join'];
    passport.use(new DiscordStrategy({
        clientID: 'id',
        clientSecret: 'secret',
        callbackURL: 'callbackURL',
        scope: scopes
    },
    function(accessToken, refreshToken, profile, cb) {
        User.findOrCreate({ discordId: profile.id }, function(err, user) {
            return cb(err, user);
        });
    }));
})(passport);