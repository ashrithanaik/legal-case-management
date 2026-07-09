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
    status: {
      type: String,
      enum: ["Open", "In Progress", "Closed"],
      default: "Open",
    },
    client: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    lawyer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    hearingDate: {
      type: Date,
    },
    documents: [
      {
        type: String,
      },
    ],
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Case", caseSchema);
