const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
    title: String,
    teacher: String,
    data: {type: Date, default: Date.now},
});

module.exports = mongoose.model("course", courseSchema)