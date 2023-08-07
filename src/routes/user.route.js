const express = require("express");
const {
  create,
  login,
  update,
  deleteUser,
  uploadPic,
  changepassword,
} = require("../controllers/user.controller");

const { verifyToken } = require("../middlewares/verifyToken");
const multer = require("multer");

//middleware upload
const uploadDir = `${process.cwd()}/upload`;
const upload = multer({ dest: uploadDir });

const router = express.Router();

router.post("/", create);
router.post("/login", login);
router.put("/update", update);
router.delete("/delete", deleteUser);

router.post("/upload", upload.single("profilepic"), uploadPic);
router.put("/changepassword", changepassword);

module.exports = router;
