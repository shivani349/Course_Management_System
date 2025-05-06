const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    userId: { type: String, required: true },
    password: { type: String, required: true },
    mobile: { type: String, required: true },
    salary: { type: Number, required: true },
    joinDate: { type: Date, required: true, default: Date.now()},
    course: { type: String, required: true },
});

// const teacherSchema = new mongoose.Schema({
//     firstName: String,
//     lastName: String,
//     userId: String,
//     password: String,
//     mobile: String,
//     salary: Number,
//     joinDate: {
//         type: Date,
//         default: Date.now(),
//     },
//     course: {
//         type: String,
//         default: "Course A",
//     }
// });

module.exports = mongoose.model('Teacher', teacherSchema);

