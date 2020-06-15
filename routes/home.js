const express = require('express');
const router = express.Router();

router.get("/", (req, res, next) => {
    return res.send("<h1>This is a home route</h1>");
});

module.exports = router;