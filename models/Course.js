const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema(
    {
        c_id: { type: String, required: true },
        name: { type: String, required: true },
        description: { type: String, required: true }
    }, { timestamps: true }
);

module.exports = mongoose.model("Cources", CourseSchema);