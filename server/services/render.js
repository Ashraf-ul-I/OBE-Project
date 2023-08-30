const axios = require('axios');

exports.homeRoutes = (req, res) => {
    // axios.get("http://localhost:3000/")
    // .then(function(response){
        res.render('index');
    // })
    // .catch(err => {
    //     res.send('Your given path is not correct');
    // });
};

exports.dataShow=(req,res)=>{

    //make a get request to the api users
   axios.get("http://localhost:3000/api/users")
      .then(function(response){
        res.render('dataShow',{
            userBB:response.data
        });
      })
      .catch(err=>{
        res.send(err);
      })

    
}

exports.Search=(req,res)=>{

    //make a get request to the api users
   axios.get("http://localhost:3000/api/users")
      .then(function(response){
        res.render('search',{
            userBB:response.data
        });
      })
      .catch(err=>{
        res.send(err);
      })

    
}



// New data show 

// exports.dataShow = async (req, res) => {
//     const facultyId = req.params.facultyId;

//     try {
//         const selectedFacultyResponse = await axios.get(`http://localhost:3000/api/users${facultyId}`); // Replace with your API endpoint for fetching faculty data
//         const selectedFaculty = selectedFacultyResponse.data;

//         if (!selectedFaculty) {
//             return res.status(404).send('Faculty not found');
//         }

//         const studentsResponse = await axios.get(`http://localhost:3000/api/users${facultyId}`); // Replace with your API endpoint for fetching students data
//         const students = studentsResponse.data;

//         res.render('dataShow', { selectedFaculty, students });
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Internal Server Error');
//     }
// };


exports.marksEntry = (req, res) => {
    // axios.get("http://localhost:3000/")
    // .then(function(response){
        res.render('marksEntry');
    // })
    // .catch(err => {
    //     res.send('Your given path is not correct');
    // });
};


