const mongoose = require("mongoose");

const ResultSchema = new mongoose.Schema(
    {
        "student": {
            s_id: { type: String, required: true },
            name: { type: String, required: true },
            gender: { type: String, required: true },
            year: { type: Number, required: true }
        },
        grades: [
            {
                "grade": {
                    type: Boolean,
                },

                courses: { type: Object, required: true }
            },

        ],
    },
    { timestamps: true }
);

module.exports = mongoose.model("Student", StudentSchema);