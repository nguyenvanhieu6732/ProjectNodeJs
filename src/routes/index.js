const CollectionsRouter = require('./collections')
const blogRouter = require('./blog')
const SiteRouter = require('./site')

function route(app) {
    app.use('/collections', CollectionsRouter);
    // app.use('/pages', pagesRouter);
    app.use('/blog', blogRouter);
    app.use('/', SiteRouter);

}

module.exports = route;
