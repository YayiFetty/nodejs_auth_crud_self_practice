const express = require("express");

const router = express.Router();

const auth = require("../middleware/auth");

const {
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require("../controllers/user.controller");

router.get("/", auth, getUsers);
router.get("/:id", auth, getUserById);
router.get("/:id", auth, updateUser);
router.get("/:id", auth, deleteUser);

module.exports = router;
