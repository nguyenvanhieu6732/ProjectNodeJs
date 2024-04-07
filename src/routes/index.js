const CollectionsRouter = require('./collections')
const SiteRouter = require('./site')

function route(app) {
    app.use('/collections', CollectionsRouter);
    app.use('/', SiteRouter);

}

module.exports = route;
