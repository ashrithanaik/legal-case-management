const express = require("express");

const router = express.Router();

const {
  createCase,
  getCases,
  getCaseById,
  updateCase,
  deleteCase,
} = require("../controllers/caseController");

const { protect } = require("../middleware/authMiddleware");

router.post("/", protect, createCase);

router.get("/", protect, getCases);

router.get("/:id", protect, getCaseById);

router.put("/:id", protect, updateCase);

router.delete("/:id", protect, deleteCase);

module.exports = router;
