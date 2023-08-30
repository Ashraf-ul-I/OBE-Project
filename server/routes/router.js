const express = require('express');
const services = require('../services/render');
const controller=require('../controller/controller')

const router = express.Router();

router.get('/', services.homeRoutes);
router.get('/about', services.homeRoutes);
router.get('/marks-entry',services.marksEntry);
router.get('/show-data',services.dataShow);
router.get('/search',services.Search);

//API
 router.post('/api/users',controller.create);
 
// router.post('/api/users',controller.createStudent);
// router.post('/api/users',controller.createExam); 
router.get('/api/users', controller.find);
router.get('/api/users', controller.find1);
// router.get('/search', async (req, res) => {
//     const examId = req.query.ExamID; // Assuming ExamID is from the query parameter

//     try {
//         const data = await YourModel.findOne({ ExamID: examId }); // Replace with the appropriate query

//         if (data) {
//             res.render('datashow.ejs', { data }); // Rendering the datashow.ejs template with the retrieved data
//         } else {
//             res.send('No data found for the provided ExamID');
//         }
//     } catch (error) {
//         console.error(error);
//         res.send('An error occurred');
//     }
// });

router.put('/api/users/:id',controller.update);

router.delete('/api/users/:id',controller.delete);


module.exports = router;
