import express from "express";
var router = express.Router();

import HomeController from "../controllers/HomeController";

/* GET home page. */
router.get("/", function (req, res, next) {
    res.render("index", { title: "Express" });
});

router.post("/rotas", HomeController.index);

module.exports = router;
