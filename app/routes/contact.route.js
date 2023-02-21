const express = require("express");
const contacts = require("../controllers/contact.controller");

const router = express.Router();

router
  .route("/")
  .get(contacts.findAll)
  .post(contacts.create)
  .delete(contacts.deleteAll);

router.route("/favorite").get(contacts.findAllFavorite);

router
  .route("/:id")
  .get(contacts.findOne)
  .put(contacts.update)
  .delete(contacts.delete);

// Define routes for managing favorite contacts
router.route("/favorites").get(contacts.listFavorites);

router.route("/favorites/add/:id").post(contacts.addFavorite);

router.route("/favorites/remove/:id").post(contacts.removeFavorite);
module.exports = router;
