const mongoose = require('mongoose');

// const studentData=new mongoose.Schema({
//   studentName: String,
//     studentIDvalue:String,
//     Marks: String,
//     co1:   String,
//     co2:   String,
//     co3:   String,
//     co4:   String,
//     co5:   String,
//     co6:   String,
//     co7:   String
// })


const marksEntrySchema = new mongoose.Schema({
  faculty: {
    Fname: String,
    Fid: String,
    Ccode: String,
    Ctitle: String,
    Semester: String
  },
  ExamID: String,
  students: [{
    studentName: String,
    studentIDvalue: String,
    Marks: String,
    co1: String,
    co2: String,
    co3: String,
    co4: String,
    co5: String,
    co6: String,
    co7: String
  }]
});

const UserDB = mongoose.model('exam', marksEntrySchema);

module.exports = UserDB;


// const mongoose = require('mongoose');

// const mongoose = require('mongoose');

// const examSchema = new mongoose.Schema({
//   ExamID: {
//     type: String,
//     unique: true,
//     required: true
//   },
//   Fid: String,  // Faculty ID
//   FacultyName: String,
//   Semester: String,
//   CourseID: String,
// });


// const studentSchema = new mongoose.Schema({
//   studentID: {
//     type: String,
//     required: true,
//     unique: true
//   },
//   studentName: {
//     type: String,
//     required: true
//   },
//   Marks: {
//     type: Number,
//     required: true
//   },
//   co1: Number,
//   co2: Number,
//   co3: Number,
//   co4: Number,
//   co5: Number,
//   co6: Number,
//   co7: Number,
//   exam: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Exam'
//   }
// });

// const Student = mongoose.model('Student', studentSchema);
// const Exam = mongoose.model('Exam', examSchema);



// module.exports = {
//   Student,
//   Exam
// };


