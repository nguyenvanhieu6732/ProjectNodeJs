

class CollectionsController {

    // [GET] /collections

  index(req, res) {
    res.render('collections');
  }

    // [GET] /collections/bikes
  bikes(req, res) {
    res.render('bikes');
  }
}

module.exports = new CollectionsController;
