
const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    Ccode: [String],
    Ctitle: [String],
    Semester: [String],
    ExamID: [String],
    studentName: [String],
    studentIDvalue: [String],
    Marks: [String],
    co1: [Number],
    co2: [Number],
    co3: [Number],
    co4: [Number],
    co5: [Number],
    co6: [Number],
    co7: [Number] ,
    userId:  {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'registerData',
    },
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;


