const router = require("express").Router();

const {
  index,
  store,
  show,
  update,
  destroy,
} = require("../controllers/SalesController");

router.route("/").get(index).post(store);
router.route("/:sale").get(show).patch(update).delete(destroy);

module.exports = router;
