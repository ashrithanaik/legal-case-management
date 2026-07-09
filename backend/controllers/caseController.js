const Case = require("../models/Case");

const createCase = async (req, res) => {
  try {
    const caseData = await Case.create(req.body);

    res.status(201).json({
      success: true,
      data: caseData,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

const getCases = async (req, res) => {
  try {
    const cases = await Case.find()
      .populate("client", "name email")
      .populate("lawyer", "name email");

    res.json({
      success: true,
      count: cases.length,
      data: cases,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

const getCaseById = async (req, res) => {
  try {
    const caseData = await Case.findById(req.params.id)
      .populate("client", "name email")
      .populate("lawyer", "name email");

    if (!caseData) {
      return res.status(404).json({
        success: false,
        message: "Case not found",
      });
    }

    res.json({
      success: true,
      data: caseData,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

const updateCase = async (req, res) => {
  try {
    const updated = await Case.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.json({
      success: true,
      data: updated,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

const deleteCase = async (req, res) => {
  try {
    await Case.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Case deleted successfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

module.exports = {
  createCase,
  getCases,
  getCaseById,
  updateCase,
  deleteCase,
};
