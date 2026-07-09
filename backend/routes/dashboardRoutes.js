const express = require("express");

const router = express.Router();

const {
  adminDashboard,
  lawyerDashboard,
  clientDashboard,
} = require("../controllers/dashboardController");

const { protect } = require("../middleware/authMiddleware");

const authorizeRoles = require("../middleware/roleMiddleware");

router.get("/admin", protect, authorizeRoles("admin"), adminDashboard);

router.get("/lawyer", protect, authorizeRoles("lawyer"), lawyerDashboard);

router.get("/client", protect, authorizeRoles("client"), clientDashboard);

module.exports = router;
