const Result = require("../models/Result");
const {
    verifyToken,
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();

//CREATE

router.post("/", async (req, res) => {
    const newResult = new Result(req.body);

    try {
        const savedResult = await newResult.save();
        res.status(200).json(savedResult);
    } catch (err) {
        res.status(500).json(err);
    }
});

//UPDATE
router.put("/:id", async (req, res) => {
    try {
        const updatedResult = await Result.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true }
        );
        res.status(200).json(updatedResult);
    } catch (err) {
        res.status(500).json(err);
    }
});

//DELETE
router.delete("/:id", async (req, res) => {
    try {
        await Result.findByIdAndDelete(req.params.id);
        res.status(200).json("Product has been deleted...");
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET PRODUCT
router.get("/find/:id", async (req, res) => {
    try {
        console.log('invoke here');
        const result = await Result.findById(req.params.id);
        res.status(200).json(result);
    } catch (err) {
        //sconsole.log('invoke here2222344');
        res.status(500).json(err);
    }
});

//GET ALL PRODUCTS
router.get("/", async (req, res) => {
    const qNew = req.query.new;
    const qCategory = req.query.category;
    try {
        let student;

        if (qNew) {
            result = await Result.find().sort({ createdAt: -1 }).limit(1);
        } else if (qCategory) {
            result = await Result.find({
                categories: {
                    $in: [qCategory],
                },
            });
        } else {
            result = await Result.find();
        }

        res.status(200).json(result);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;