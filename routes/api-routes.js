const express = require("express");
const router = express.Router();

router.get("/example", (req, res) => {
  res.send({ msg: "success" });
});

module.exports = router;
