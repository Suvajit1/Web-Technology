const express = require("express");
const router = express.Router();

// index route
router.get("/", (req, res)=>{
    res.send("get for posts");
});

// show route
router.get("/:id", (req, res)=>{
    res.send("get for post id");
});

// add route(post)
router.post("/", (req, res)=>{
    res.send("post for post");
});

// delete route
router.delete("/:id", (req, res)=>{
    res.send("delete for post id");
});

module.exports = router;