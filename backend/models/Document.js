const mongoose = require("mongoose");

const documentSchema = new mongoose.Schema(
  {
    fileName: {
      type: String,
      required: true,
    },
    filePath: {
      type: String,
      required: true,
    },
    uploadedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    caseId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Case",
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Document", documentSchema);
