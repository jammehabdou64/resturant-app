const router = require("express").Router();

const {
  index,
  store,
  show,
  update,
  destroy,
} = require("../controllers/ItemsController");

router.route("/").get(index).post(store);
router.route("/:item").get(show).patch(update).delete(destroy);

module.exports = router;
