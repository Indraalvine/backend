const express = require("express")
const {
    create,
    update,
    deletePost
} = require ("../controllers/post.controller")
const { verifyToken } = require("../middlewares/verifyToken");


const router = express.Router();

router.post("/", verifyToken, create);
router.put("/update", verifyToken, update);
router.delete("/delete", verifyToken ,deletePost);

module.exports = router