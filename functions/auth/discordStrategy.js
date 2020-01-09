
module.exports = (function(){

    //TODO:: fully research passport and passport-discord to ensure security and best practices
    //TODO:: wire Discord identity to firebase user (create if not exists?)
    //TODO:: ensure seperation of concerns are as follows: Discord is the identity provider (authentication), firebase is the permissions provider (authorization)
    const passport = require('passport');
    passport.serializeUser(function(user, done) {
        console.log('user', user);
        done(null, user);
      });
      passport.deserializeUser(function(obj, done) {
          console.log('obj', obj);
        done(null, obj);
      });
    const DiscordStrategy = require('passport-discord').Strategy;
    var scopes = ['identify', 'email', 'guilds', 'guilds.join'];
    passport.use(new DiscordStrategy({
        clientID: '490217792373522433',
        clientSecret: 'WTK2NUOQIZl65m82b1X958Z8ejpfB31z',
        callbackURL: 'http://localhost:5000/auth/discord/callback',
        scope: scopes
    },
    function(accessToken, refreshToken, profile, cb) {
        // console.log('accessToken', accessToken);
        // console.log('refreshToken', refreshToken);
        // console.log('profile', profile);
        // console.log('profile.guilds', profile.guilds);
        console.log('Strategy CALLBACK');
        return cb(null, {
            userId: profile.id,
            userName: profile.username,
            email: profile.email
        });
        // User.findOrCreate({ discordId: profile.id }, function(err, user) {
        //     return cb(err, user);
        // });
    }));
})();