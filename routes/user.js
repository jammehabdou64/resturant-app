const router = require("express").Router();

const {
  index,
  store,
  show,
  update,
  destroy,
} = require("../controllers/UsersController");

router.route("/").get(index).post(store);
router.route("/:user").get(show).patch(update).delete(destroy);

module.exports = router;
