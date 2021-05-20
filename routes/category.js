const router = require("express").Router();

const {
  index,
  store,
  show,
  update,
  destroy,
} = require("../controllers/CategoriesController");

router.route("/").get(index).post(store);
router.route("/:category").get(show).patch(update).delete(destroy);

module.exports = router;
