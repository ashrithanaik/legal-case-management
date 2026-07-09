const Case = require("../models/Case");

const createCase = async (req, res) => {
  try {
    const newCase = await Case.create(req.body);

    res.status(201).json({
      success: true,
      case: newCase,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

const getCases = async (req, res) => {
  const cases = await Case.find().sort({ createdAt: -1 });

  res.json({
    success: true,
    count: cases.length,
    cases,
  });
};

const getCase = async (req, res) => {
  const oneCase = await Case.findById(req.params.id);

  if (!oneCase) {
    return res.status(404).json({
      success: false,
      message: "Case not found",
    });
  }

  res.json({
    success: true,
    case: oneCase,
  });
};

const updateCase = async (req, res) => {
  const updated = await Case.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.json({
    success: true,
    case: updated,
  });
};

const deleteCase = async (req, res) => {
  await Case.findByIdAndDelete(req.params.id);

  res.json({
    success: true,
    message: "Case Deleted",
  });
};

module.exports = {
  createCase,
  getCases,
  getCase,
  updateCase,
  deleteCase,
};
