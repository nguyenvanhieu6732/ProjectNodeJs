const CollectionsRouter = require('./collections')
const blogRouter = require('./blog')
const PagesRouter = require('./pages')
const cartRouter = require('./cart')
const SiteRouter = require('./site')

function route(app) {
    app.use('/collections', CollectionsRouter);
    app.use('/blog', blogRouter);
    app.use('/pages', PagesRouter);
    app.use('/cart', cartRouter);
    app.use('/', SiteRouter);

}

module.exports = route;
