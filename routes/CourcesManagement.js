const Cource = require("../models/Cource");
const {
    verifyToken,
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();

//CREATE

router.post("/", verifyTokenAndAdmin, async (req, res) => {
    const newCource = new Cource(req.body);

    try {
        const savedCource = await newCource.save();
        res.status(200).json(savedCource);
    } catch (err) {
        res.status(500).json(err);
    }
});

//UPDATE
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
        const updatedCource = await Cource.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true }
        );
        res.status(200).json(updatedProduct);
    } catch (err) {
        res.status(500).json(err);
    }
});

//DELETE
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
        await Cource.findByIdAndDelete(req.params.id);
        res.status(200).json("Product has been deleted...");
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET PRODUCT
router.get("/find/:id", async (req, res) => {
    try {
        console.log('invoke here');
        const Cource = await Cource.findById(req.params.id);
        res.status(200).json(Cource);
    } catch (err) {
        console.log('invoke here2222344');
        res.status(500).json(err);
    }
});

//GET ALL PRODUCTS
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