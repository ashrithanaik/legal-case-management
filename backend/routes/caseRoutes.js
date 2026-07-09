const express = require("express");

const router = express.Router();

const {
  createCase,
  getCases,
  getCase,
  updateCase,
  deleteCase,
} = require("../controllers/caseController");

const { protect } = require("../middleware/authMiddleware");

router.post("/", protect, createCase);

router.get("/", protect, getCases);

router.get("/:id", protect, getCase);

router.put("/:id", protect, updateCase);

router.delete("/:id", protect, deleteCase);

module.exports = router;
