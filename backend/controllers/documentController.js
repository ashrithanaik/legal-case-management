const Document = require("../models/Document");

const uploadDocument = async (req, res) => {
  try {
    const document = await Document.create({
      fileName: req.file.filename,
      filePath: req.file.path,
      uploadedBy: req.user._id,
      caseId: req.body.caseId,
    });

    res.status(201).json({
      success: true,
      document,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

const getDocuments = async (req, res) => {
  const docs = await Document.find().populate("uploadedBy caseId");

  res.json({
    success: true,
    documents: docs,
  });
};

module.exports = {
  uploadDocument,
  getDocuments,
};
