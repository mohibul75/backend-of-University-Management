const Student = require("../models/Student");

const router = require("express").Router();

//CREATE
router.post("/addCourse", async (req, res) => {
    const newStudent = new Student(req.body);
    console.log(req.body);

    try {

        student = await Student.findByIdAndUpdate(
            req.body._id,
            {
                $set: req.body,
            },
            { new: true }
        );
        console.log(student);
        res.status(200).json(student);
    } catch (err) {
        res.status(500).json(err);
    }
});
router.post("/", async (req, res) => {
    const newStudent = new Student(req.body);

    try {

        const savedStudent = await newStudent.save();
        res.status(200).json(savedStudent);
    } catch (err) {
        res.status(500).json(err);
    }
});


router.get("/", async (req, res) => {
    const qNew = req.query.new;
    const qCategory = req.query.category;
    try {
        let student;

        if (qNew) {
            student = await Student.find().sort({ createdAt: -1 }).limit(1);
        } else if (qCategory) {
            student = await Student.find({
                categories: {
                    $in: [qCategory],
                },
            });
        } else {
            student = await Student.find();
        }

        res.status(200).json(student);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;