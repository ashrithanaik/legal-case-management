const mongoose = require("mongoose");

const caseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    clientName: {
      type: String,
      required: true,
    },
    lawyerName: {
      type: String,
      default: "",
    },
    status: {
      type: String,
      enum: ["Open", "In Progress", "Closed"],
      default: "Open",
    },
    hearingDate: {
      type: Date,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Case", caseSchema);
