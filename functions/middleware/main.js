module.exports = function(req, res, next) {
    res.set('Cache-control', 'public, max-age=300, s-maxage=600');
    res.set('X-IGAIR-LOVE', 'SpaceShips Baby');
    next();
}