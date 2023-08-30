
const UserDB = require('../model/model');


// exports.create = async (req, res) => {
//     try {
//         if (!req.body) {
//             res.status(400).send({ message: 'Content can not be empty' });
//             return;
//         }

//         const {
//             Fname,
//             Fid,
//             Ccode,
//             Ctitle,
//             Semester,
//             ExamID,
//             studentID
//         } = req.body;

//         // Convert all values in the studentID array to numbers
//         const studentIDArray = studentID.map(student => {
//             const studentData = {};
//             for (const field in student) {
//                 studentData[field] = Number(student[field]);
//             }
//             return studentData;
//         });
//         console.log(req.body.studentID);

//         // Create a new user object
//         const newUser = new UserDB({
//             Fname,
//             Fid,
//             Ccode,
//             Ctitle,
//             Semester,
//             ExamID,
//             studentID: studentIDArray
//         });

//         // Save user in the database
//         const savedUser = await newUser.save();
//         console.log(req.body.studentID);

//         res.status(201).json({ message: 'Exam entry saved successfully', data: savedUser });
//     } catch (error) {
//         console.error(error);
//         res.status(500).send({ message: 'An error occurred while saving the exam entry' });
//     }
// };

/**
 * 
 * @param {} 
 * @param {*} 
 * @returns 
 * @description for the single data input 
 * 
 */


exports.create = (req, res) => {
    const marksEntryData = {
        faculty: {
            Fname:   String(req.body.Fname),
            Fid:     String(req.body.Fid),
            Ccode:   String(req.body.Ccode),
            Ctitle:  String(req.body.Ctitle),
            Semester: String(req.body.Semester),
        },
        ExamID: String(req.body.ExamID),
        students: [
           {
            studentName: String(req.body.studentName),
            studentIDvalue: String(req.body.studentIDvalue),
            Marks: String(req.body.Marks),
            co1: String(req.body.co1),
            co2: String(req.body.co2),
            co3: String(req.body.co3),
            co4: String(req.body.co4),
            co5: String(req.body.co5),
            co6: String(req.body.co6),
            co7: String(req.body.co7),
           }
        ],
    };

    if (req.body.students && req.body.students.length > 0) {
        const students = Array.from(req.body.students);

        // Initialize the students object within marksEntryData
        marksEntryData.students = {};

        for (const student of students) {
            const studentData = {
                studentName: String(student.studentName),
                studentIDvalue: String(student.studentIDvalue),
                Marks: String(student.Marks),
                co1: String(student.co1),
                co2: String(student.co2),
                co3: String(student.co3),
                co4: String(student.co4),
                co5: String(student.co5),
                co6: String(student.co6),
                co7: String(student.co7),
            };
            console.log(studentData);
            marksEntryData.students[student.studentIDvalue] = studentData;
        }
    }
    console.log(req.body.students);
    console.log(marksEntryData);

    const newMarksEntry = new UserDB(marksEntryData);

    newMarksEntry
        .save()
        .then(data => {
            res.redirect('/marks-entry');
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating a create operation"
            });
        });
};





// exports.create = (req, res) => {
//     const marksEntryData = {
//         faculty: {
//             Fname: String(req.body.Fname),
//             Fid: String(req.body.Fid),
//             Ccode: String(req.body.Ccode),
//             Ctitle: String(req.body.Ctitle),
//             Semester: String(req.body.Semester),
//         },
//         ExamID: String(req.body.ExamID),
//         students: [],
//     };

//     if (req.body.students && req.body.students.length > 0) {
//         const studentsData = req.body.students[0];
//         const studentNames = studentsData.studentName.split(',');
//         const studentIDs = studentsData.studentIDvalue.split(',');
//         const Marks = studentsData.Marks.split(',');
//         const co1 = studentsData.co1.split(',');
//         const co2 = studentsData.co2.split(',');
//         const co3 = studentsData.co3.split(',');
//         const co4 = studentsData.co4.split(',');
//         const co5 = studentsData.co5.split(',');
//         const co6 = studentsData.co6.split(',');
//         const co7 = studentsData.co7.split(',');

//         for (let i = 0; i < studentNames.length; i++) {
//             const studentData = {
//                 studentName: String(studentNames[i]),
               
//                 studentIDvalue: String(studentIDs[i]),
//                 Marks: String(Marks[i]),
//                 co1: String(co1[i]),
//                 co2: String(co2[i]),
//                 co3: String(co3[i]),
//                 co4: String(co4[i]),
//                 co5: String(co5[i]),
//                 co6: String(co6[i]),
//                 co7: String(co7[i]),
//             };
//             console.log(studentData);
//             marksEntryData.students.push(studentData);
//         }
//     }

//     console.log(marksEntryData);

//     const newMarksEntry = new UserDB(marksEntryData);

//     newMarksEntry
//         .save()
//         .then(data => {
//             res.redirect('/marks-entry');
//         })
//         .catch(err => {
//             res.status(500).send({
//                 message: err.message || "Some error occurred while creating a create operation"
//             });
//         });
// };

  









//  */
// exports.create = (req, res) => {
//     if (!req.body) {
//         res.status(400).send({ message: 'Content can not be empty' });
//         return;
//     }

//     const { Fname, Fid, Ccode, Ctitle, Semester, ExamID, students } = req.body;

//     // Create an array of student objects
//     const user = new UserDB({
//         faculty: {
//             name: Fname,
//             facultyId: Fid,
//             courseCode: Ccode,
//             courseTitle: Ctitle,
//             semester: Semester,
//         },
//         examId: ExamID,
//         students: students.map(student => ({
//             studentName: student.studentName,
//             studentID: student.studentIDvalue,
//             marks: student.Marks,
//             co1: student.co1,
//             co2: student.co2,
//             co3: student.co3,
//             co4: student.co4,
//             co5: student.co5,
//             co6: student.co6,
//             co7: student.co7,
//         })),
//     });

//     // Save user in the database
//     user
//         .save()
//         .then(data => {
//             res.redirect('/marks-entry');
//         })
//         .catch(err => {
//             res.status(500).send({
//                 message: err.message || "Some error occurred while creating a create operation"
//             });
//         });
// };

////###############################################FIND OL ONED WHICH RUN GET ALL DATA ########
exports.find=(req,res)=>{
  if(req.query.ExamID){
     const id=req.query.ExamID;
     UserDB.findById(id)
     .then(data=>{
       if(!data){
        res.status(500).send({message: "Not found User id"+id})
       }else{
        res.send(data);
       }
    })
    .catch(err=>{
        res.status(500).send({message:err.message || "Error Occured while retriving user with id"+id})
    })
  }else{
    UserDB.find()
    .then(user=>{
        res.send(user);
    })
    .catch(err=>{
        res.status(500).send({message:err.message || "Error Occured while retriving user information"})
    })
  }
}

exports.find1=(re1,res)=>{
    if(req.query.ExamID){
        const id=req.query.ExamID;
        UserDB.findById(id)
        .then(data=>{
          if(!data){
            res.status(500).send({message: "Not found User id"+id})
          }else{
            res.render('dataShow',{
              userBB:data,
              ExamID:id
            });
          }
        })
        .catch(err=>{
            res.status(500).send({message:err.message || "Error Occured while retriving user with id"+id})
          })
      }
};




//Update a new identified user by user id

exports.update=(req,res)=>{
    if(!req.body){
        return res.status(400)
                   .send({message:"Data to update can not be empty"})
    }
    const id= req.params.id; // there are 2 type parameters but in route we use url type so this params is URL params
    UserDB.findByIdAndUpdate(id,req.body,{useFindAndModify:false}).then(data=>{
        if(!data){
            res.status(400).send({message:`Can not Update user with ${id}.Maybe user not FOund`});
        }else{
            res.send(data);
        }
    })
    .catch(err=>{
        res.status(500).send({message:"Ërror update information"});
    })

}

//delete a user with specified user id in the request

exports.delete=(req,res)=>{
    const id=req.params.id;

    UserDB.findByIdAndDelete(id)
    .then(data=>{
        if(!data){
            res.status(404).send({message:`Cannot Delete with ${id} Maybe id is wrong`});
        }else{
            res.send({
                message:"User was Deleted sucesfully!"
            })
        }
    })
    .catch(err=>{
        res.status(500).send({message:"Could not Delete User with id="+id});
    })
}