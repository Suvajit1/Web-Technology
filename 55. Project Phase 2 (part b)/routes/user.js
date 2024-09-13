const express = require("express");
const router = express.Router();

// index route
router.get("/", (req, res)=>{
    res.send("get for users");
});

// show route
router.get("/:id", (req, res)=>{
    res.send("show for user id");
});

// add route(post)
router.post("/", (req, res)=>{
    res.send("post for user");
});

// delete route
router.delete("/:id", (req, res)=>{
    res.send("delete for user id");
});

module.exports = router;