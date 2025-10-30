const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());

// mongodb+srv://<db_username>:<db_password>@cluster0.nvd5lau.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
mongoose.connect("mongodb+srv://dijusbubnys144_db_user:Sjrh1Gu88NO2w9JG@cluster0.nvd5lau.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(() => console.log("connected to DB"))
.catch((error) => console.log(error));
const { createCourse, getallrecords, findOneCourse, updateCoursesById, deleteOneCourse} = require("./coursescontrroller");

app.post("/courses", createCourse);
app.get("/allcourses", getallrecords);
app.get("/course/:id", findOneCourse);
app.put("/course/:id", updateCoursesById)
app.delete("/course/:id", deleteOneCourse)

////////////////////////////////////////////////////////////////////
app.listen(5050, () => console.log("Serveris veikia, port 5050"));