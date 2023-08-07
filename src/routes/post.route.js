const express = require("express")
const {
    create,
    update,
    deletePost
} = require ("../controllers/post.controller")


const router = express.Router();

router.post("/", create);
router.put("/update", update);
router.delete("/delete", deletePost);

module.exports = router