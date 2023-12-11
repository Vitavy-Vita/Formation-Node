const express = require("express");
const contactControllers = require("../controllers/contactControllers");

const router = express.Router();
router.get("/", contactControllers.getOverview);

router
  .route("/contact/add")
  .get(contactControllers.getViewAddContact)
  .post(contactControllers.postCreateContact);

router
  .route("/contact/update/:name")
  .get(contactControllers.getViewUpdateContact)
  .post(contactControllers.postUpdateContact);

router
  .route("/contact/delete/:name")
  .post(contactControllers.postDeleteContact);

router.route("/contact/:name").get(contactControllers.getContact);

module.exports = router;
