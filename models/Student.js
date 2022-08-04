const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema(
    {
        s_id: { type: String, required: true },
        name: { type: String, required: true },
        gender: { type: String, required: true },
        year: { type: Number, required: true },
        cources: [
            {
                approval: {
                    type: Boolean,
                },
                R_date: {
                    type: Date,
                },
                cources: { type: Object, required: true }
            },

        ],
    },
    { timestamps: true }
);

module.exports = mongoose.model("Cart", StudentSchema);