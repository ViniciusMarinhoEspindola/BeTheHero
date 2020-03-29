const { Router } = require("express");

const OngController = require("./controllers/OngController");
const IncidentsController = require("./controllers/IncidentsController");
const ProfileController = require("./controllers/ProfileController");
const SessionController = require("./controllers/SessionController");

const router = Router();

router.post("/session", SessionController.create);

router.get("/ongs", OngController.index);
router.post("/ongs", OngController.create);

router.get("/profile", ProfileController.index);

router.post("/incidents", IncidentsController.create);
router.get("/incidents", IncidentsController.index);
router.delete("/incidents/:id", IncidentsController.delete);

module.exports = router;
