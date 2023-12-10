const express = require("express");
const contactControllers = require("../controllers/contactControllers");

const router = express.Router();
router.get("/", contactControllers.getOverview);

router.get("/contact/add", contactControllers.getViewAddContact);

router.post("/contact/add", contactControllers.postCreateContact);

router.get("/contact/update/:name", contactControllers.getViewUpdateContact);

router.post("/contact/update/:name", contactControllers.postUpdateContact);

router.post("/contact/delete/:name", contactControllers.postDeleteContact);

router.get("/contact/:name", contactControllers.getContact);

module.exports = router;
