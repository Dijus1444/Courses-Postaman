const Course = require("./courses.js");

console.log(Course)

const createCourse=async(req, res) => {
    try {
        const {title, teacher} = req.body;
    if(!title || !teacher){
        return res.status(400).json({error: "All fields are required"})
    }
    const result = await Course.create({title, teacher});
    res.status(200).json({message: "record created", data: result});
    } catch (err) {
        res.status(500).json({error: "internal server error, Something went wrong"});
    }
};
// READ
// GET
const getallrecords =async(req,res) => {
    try {
    const myCoursesFromDB = await Course.find();
if (myCoursesFromDB.length === 0){
    res.status(404).json({message: "No courses found in DB"})
}


    res.status(200).json({myCoursesFromDB});
    } catch (err) {
        console.log(err);
        res.status(500).json({error: "internal server error, Something went wrong"});
    }
};


module.exports = {createCourse, getallrecords};