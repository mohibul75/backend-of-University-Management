const Cource = require("../models/Course");

const router = require("express").Router();



router.post("/", async (req, res) => {
    const newCource = new Cource(req.body);

    try {
        const savedCource = await newCource.save();
        res.status(200).json(savedCource);
    } catch (err) {
        res.status(500).json(err);
    }
});


router.get("/", async (req, res) => {
    const qNew = req.query.new;
    const qCategory = req.query.category;
    try {
        let cources;

        if (qNew) {
            cources = await Cource.find().sort({ createdAt: -1 }).limit(1);
        } else if (qCategory) {
            cources = await Cource.find({
                categories: {
                    $in: [qCategory],
                },
            });
        } else {
            cources = await Cource.find();
        }

        res.status(200).json(cources);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;