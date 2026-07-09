const Case = require("../models/Case");

const adminDashboard = async (req, res) => {
  const totalCases = await Case.countDocuments();

  const openCases = await Case.countDocuments({
    status: "Open",
  });

  const closedCases = await Case.countDocuments({
    status: "Closed",
  });

  res.json({
    success: true,
    totalCases,
    openCases,
    closedCases,
  });
};

const lawyerDashboard = async (req, res) => {
  const assignedCases = await Case.find({
    lawyer: req.user._id,
  });

  res.json({
    success: true,
    totalAssigned: assignedCases.length,
    assignedCases,
  });
};

const clientDashboard = async (req, res) => {
  const myCases = await Case.find({
    client: req.user._id,
  });

  res.json({
    success: true,
    totalCases: myCases.length,
    myCases,
  });
};

module.exports = {
  adminDashboard,
  lawyerDashboard,
  clientDashboard,
};
