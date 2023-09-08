
const UserDB = require('../model/model');
const mongoose = require('mongoose');
const loginregDB = require('../model/loginReg');
const ComarkDb=require('../model/setComarks')
const { Model } = require('mongoose');
const session = require('express-session');
const CoRatiosModel=require('../model/coratio')
const POModel=require('../model/podata')

/**
 * 
 * @param {Most important Api for create user} req 
 * @param {*} res 
 */
// exports.createStudent = async (req, res) => {
//     try {
//         const {
//             Ccode,
//             Ctitle,
//             Semester,
//             ExamID,
//             studentName,
//             studentIDvalue,
//             Marks,
//             co1,
//             co2,
//             co3,
//             co4,
//             co5,
//             co6,
//             co7,
//             Fid
//         } = req.body;

//         // Create a new student instance
//         const student = new UserDB({
//             Ccode,
//             Ctitle,
//             Semester,
//             ExamID,
//             studentName,
//             studentIDvalue,
//             Marks,
//             co1,
//             co2,
//             co3,
//             co4,
//             co5,
//             co6,
//             co7,
//             Fid,
//         });

     
//         await student.save();  
//         res.redirect('/marks-entry');
        
//     } catch (err) {
//         console.error(err);
//         res.redirect('/marks-entry?alert=error&message=Error occurred while creating student');
//     }
// };


// exports.createStudent = async (req, res) => {
//     try {
//         const {
//             Ccode,
//             Ctitle,
//             Semester,
//             ExamID,
//             studentName,
//             studentIDvalue,
//             Marks,
//             co1,
//             co2,
//             co3,
//             co4,
//             co5,
//             co6,
//             co7,
//             Fid
//         } = req.body;

//         // Find the faculty by their Fid
//         const faculty = await Faculty.findOne({ Fid });

//         if (!faculty) {
//             return res.status(404).json({ message: 'Faculty not found' });
//         }

//         // Create a new student instance and associate it with the faculty
//         const student = new Student({
//             Ccode,
//             Ctitle,
//             Semester,
//             ExamID,
//             studentName,
//             studentIDvalue,
//             Marks,
//             co1,
//             co2,
//             co3,
//             co4,
//             co5,
//             co6,
//             co7,
//             userId: faculty._id, // Associate the student with the faculty using their userId
//         });

//         await student.save();
//         res.redirect('/marks-entry');
        
//     } catch (err) {
//         console.error(err);
//         res.redirect('/marks-entry?alert=error&message=Error occurred while creating student');
//     }
// };

exports.createStudent = async (req, res) => {
    try {
        const {
            Ccode,
            Ctitle,
            Semester,
            ExamID,
            studentName,
            studentIDvalue,
            Marks,
            co1,
            co2,
            co3,
            co4,
            co5,
            co6,
            co7,
            Fid
        } = req.body;

        const faculty = await loginregDB.findOne({ Fid });

        if (!faculty) {
            return res.redirect('/marks-entry?alert=error&message=Faculty not found');
        }
        const student = new UserDB({
            Ccode,
            Ctitle,
            Semester,
            ExamID,
            studentName,
            studentIDvalue,
            Marks,
            co1,
            co2,
            co3,
            co4,
            co5,
            co6,
            co7,
            userId: faculty._id, 
        });

        await student.save();
        res.redirect('/marks-entry');
        
    } catch (err) {
        console.error(err);
        res.redirect('/marks-entry?alert=error&message=Error occurred while creating student');
    }
};




/**
 * 
 * @abstract {* Faculty will Define the CO for the Subject By This COdeinf api}  
 * @param {*} 
 */

exports.codefine=  (req,res)=>{
    try{
           const{
             co1,
             co2,
             co3,
             co4,
             co5,
             co6,
             co7,
            //  userId,
           }=req.body;

           const defineCO= new ComarkDb({
            co1,
            co2,
            co3,
            co4,
            co5,
            co6,
            co7,
            //  userId,
           })

           defineCO.save();
           res.redirect('/define-co');
    }catch(err){
        console.error(err);
        res.redirect('/marks-entry?alert=error&message=Error occurred while creating student');
    }
}
/**
 * 
 * @param {This is find api it will search for the data which are stored in the databasae} req 
 * @param {*} res 
 */

exports.find = (req, res) => {
    const { Fid } = req.query;
    const facultyId=loginregDB.findById(Fid);
    if (Fid) {
        UserDB.findById(Fid)
            .then(data => {
                if (!data) {
                    res.status(404).send({ message: "User not found with id: " + Fid });
                } else {
                    res.send(data);
                }
            })
            .catch(err => {
                res.status(500).send({ message: err.message || "Error occurred while retrieving user with id: " + Fid });
            });
    } else {
        UserDB.find()
            .then(users => {
                res.send(users);
            })
            .catch(err => {
                res.status(500).send({ message: err.message || "Error occurred while retrieving user information" });
            });
    }
};

exports.profileFaculty= (req, res) => {
   
    loginregDB.find()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({ message: err.message || "Error occurred while retrieving student information" });
        });
  }







// ////////////////////////

// exports.find = (req, res) => {
//     const faculty =  loginregDB.findOne({ Fid });// Assuming you have implemented authentication middleware
//     console.log(faculty);
//     if (!faculty) {
//         return res.status(401).send({ message: "Unauthorized access" });
//     }
    
//     // Find students associated with the logged-in faculty (using userId)
//     UserDB.find({ userId: faculty._id })
//         .then(students => {
//             res.send(students);
//         })
//         .catch(err => {
//             res.status(500).send({ message: err.message || "Error occurred while retrieving student information" });
//         });
// };





//Update a new identified user by user id

// exports.update=(req,res)=>{
//     if(!req.body){
//         return res.status(400)
//                    .send({message:"Data to update can not be empty"})
//     }
//     const id= req.params.id; // there are 2 type parameters but in route we use url type so this params is URL params
//     UserDB.findByIdAndUpdate(id,req.body,{useFindAndModify:false}).then(data=>{
//         if(!data){
//             res.status(400).send({message:`Can not Update user with ${id}.Maybe user not FOund`});
//         }else{
//             res.send(data);
//         }
//     })
//     .catch(err=>{
//         res.status(500).send({message:"Ërror update information"});
//     })

// }



exports.updateStudent = async (req, res) => {
    try {
        const { studentId } = req.params; // Get the studentId from the URL parameter
        const updatedData = req.body; // Updated student data

        // Find the student by their ID
        const student = await UserDB.findById(studentId);

        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }

       
        Object.assign(student, updatedData);

        // Save the updated student data
        await student.save();

        res.status(200).json({ message: 'Student data updated successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error occurred while updating student data' });
    }
};


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


exports.setupSession = (app) => {
    app.use(session({
        secret: 'My-secret-key', 
        resave: false,
        saveUninitialized: true,
    }));
};

// Login route
exports.login = async (req, res) => {
    try {
        const check = await loginregDB.findOne({ Fid: req.body.Fid });
        if (check && check.password === req.body.password) {
            req.session.userId = check.Fid;
            res.render('index');
        } else {
            res.send('<script>alert("Wrong details"); window.location.href = "/";</script>');
        }
    } catch (err) {
        console.error(err);
        res.send('<script>alert("An error occurred. You may not be a registered user."); window.location.href = "/register";</script>');
    }
};

// Logout route
exports.logout = (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.error('Error while logging out:', err);
        }
        res.redirect('/');
    });
};

exports.signup = async (req, res) => {
    const { Fid, Fname, password, confirmpassword } = req.body;

    // Define a regular expression for password validation
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

    try {
        const existingUser = await loginregDB.findOne({
            Fid: Fid
        });

        if (existingUser) {
            res.send('<script>alert("User already exists"); window.location.href = "/login";</script>');
        } else if (!password.match(passwordRegex)) {
            res.send('<script>alert("Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one digit, and one special character."); window.location.href = "/register";</script>');
        } else if (password !== confirmpassword) {
            res.send('<script>alert("Password and confirm password do not match."); window.location.href = "/register";</script>');
        } else {
            const user = await loginregDB.create({
                Fid: Fid,
                Fname: Fname,
                password: password,
                confirmpassword: confirmpassword
            });

            const successMessage = `
                <div style="border: 1px solid #ccc; padding: 10px;">
                    User created successfully. <a href="/">OK</a>
                </div>
            `;
            res.status(201).send(successMessage);
        }
    } catch (err) {
        res.status(500).send(
            `<script>alert("Something went wrong. Please carefully fill out the fields."); window.location.href = "/register";</script>`
        );
    }
};


exports.searchShow=(req,res)=>{
    const queryFid = req.query.Fid;
     console.log(queryFid);
    if(req.body.Fid === queryFid ){
        UserDB.findById(Fid)
            .then(data => {
                if (!data) {
                    res.status(404).send({ message: "User not found with id: " + Fid });
                } else {
                    res.render('/show-data');
                }
            })
            .catch(err => {
                res.status(500).send({ message: err.message || "Error occurred while retrieving user with id: " + Fid });
            });
    }
}





exports.coRatio = async (req, res) => {
    try {
    
      const codefine = await ComarkDb.findOne().lean();
      const students = await UserDB.find().lean();
  
      const coRatios = [];
  
      for (const student of students) {
        const coRatio = {};

        for (let i = 1; i <= 7; i++) {
          const coKey = `co${i}`;
          coRatio[coKey] = Array.isArray(student[coKey]) ? student[coKey].map(val => parseFloat(val)) : null;
        }
  
        for (let i = 1; i <= 7; i++) {
          const coKey = `co${i}`;
          if (codefine[coKey] !== 0 && coRatio[coKey]) {
            coRatio[coKey] = coRatio[coKey].map(val => val / parseFloat(codefine[coKey]));
          }
        }
  
        // Add the CO ratios for the student to the 'coRatios' array
        coRatios.push({
          studentIDvalue: student.studentIDvalue,
          ratios: coRatio,
        });
      }
      for (const coRatioData of coRatios) {
        await CoRatiosModel.create(coRatioData);
      }
  
      const successMessage = `
                <div style="border: 1px solid #ccc; padding: 10px;">
                    Co ratio Calculated Succesfully. <a href="/facultyProfile">OK</a>
                </div>
            `;
            res.status(201).send(successMessage);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error calculating and saving CO ratios');
    }
  };
  
  


exports.findRatios = (req, res) => {
    const { studentIDvalue } = req.query;

    if (studentIDvalue) {
        CoRatiosModel.findById(studentIDvalue)
            .then(data => {
                if (!data) {
                    res.status(404).send({ message: "User not found with id: " + Fid });
                } else {
                    res.send(data);
                }
            })
            .catch(err => {
                res.status(500).send({ message: err.message || "Error occurred while retrieving user with id: " + Fid });
            });
    } else {
        CoRatiosModel.find()
            .then(users => {
                res.send(users);
            })
            .catch(err => {
                res.status(500).send({ message: err.message || "Error occurred while retrieving user information" });
            });
    }
};


/**
 * 
 * @abstract {* This api is calculate the value of the PO ratio } req 
 * @param {*} res 
 */
exports.calculatePO = async (req, res) => {
    try {
      const coToPoMatrix = [
        [1, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 0],
        [0, 0, 1, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1],
      ];
  
      const students = await CoRatiosModel.find().lean();
      const poValues = [];
  
      for (const student of students) {
        const poValue = {
          studentIDvalue: student.studentIDvalue,
          po1: [],
          po2: [],
          po3: [],
          po4: [],
          po5: [],
          po6: [],
          po7: [],
        };

        const coData = {};
  
        for (let i = 1; i <= 7; i++) {
          const coKey = `co${i}`;
  
          if (student.ratios && student.ratios[coKey] && student.ratios[coKey].length > 0) {
            coData[coKey] = student.ratios[coKey];
          }
        }
        const numRows = coData.co1.length;
  
        for (let i = 0; i < numRows; i++) {
          const coRow = [];
  
          for (let j = 1; j <= 7; j++) {
            const coKey = `co${j}`;
            coRow.push(coData[coKey][i]);
          }
         console.log(coRow);
         const poRow = coRow.map((coValue, j) => {
            let poValueForCO = 0;
        
            for (let k = 0; k < 7; k++) {
                poValueForCO += coValue * coToPoMatrix[k][j];
            }
            if (isNaN(poValueForCO)) {
                poValueForCO = 0;
            }
        
            return poValueForCO;
        });
  
          poValue.po1.push(poRow[0]);
          poValue.po2.push(poRow[1]);
          poValue.po3.push(poRow[2]);
          poValue.po4.push(poRow[3]);
          poValue.po5.push(poRow[4]);
          poValue.po6.push(poRow[5]);
          poValue.po7.push(poRow[6]);
        }
  
        poValues.push(poValue);
      }
  
      await POModel.create(poValues);
  
      const successMessage = `
                <div style="border: 1px solid #ccc; padding: 10px;">
                    PO ratio Calculated Succesfully. <a href="/facultyProfile">OK</a>
                </div>
            `;
            res.status(201).send(successMessage);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error calculating and saving PO values');
    }
  };

  
  
/**
 * 
 * @param {It will retrieve the data of the PO ratios and then show the value to the user} req 
 * @param {*} res 
 */
    
exports.findPovalues = (req, res) => {
    const { studentIDvalue } = req.query;

    if (studentIDvalue) {
        POModel.findById(studentIDvalue)
            .then(data => {
                if (!data) {
                    res.status(404).send({ message: "User not found with id: " + Fid });
                } else {
                    res.send(data);
                }
            })
            .catch(err => {
                res.status(500).send({ message: err.message || "Error occurred while retrieving user with id: " + Fid });
            });
    } else {
        POModel.find()
            .then(users => {
                res.send(users);
            })
            .catch(err => {
                res.status(500).send({ message: err.message || "Error occurred while retrieving user information" });
            });
    }
};