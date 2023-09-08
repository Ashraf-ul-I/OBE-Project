const express = require('express');
const services = require('../services/render');
const controller=require('../controller/controller')
const isAuthenticated=require('../middleware/urlauth')
const router = express.Router();


router.get('/home',isAuthenticated, services.homeRoutes);
router.get('/about',isAuthenticated, services.homeRoutes);
router.get('/marks-entry',isAuthenticated,services.marksEntry);
router.get('/show-data',isAuthenticated,services.dataShow);
router.get('/search',isAuthenticated,services.Search);
router.get('/define-co',isAuthenticated,services.defineCo);
router.get('/coRatios', isAuthenticated,services.coRatios);
router.get('/findPO',isAuthenticated,services.poValues);
router.get('/facultyProfile',isAuthenticated,services.profileshow);
//Middleware


//////Login REgister 
router.get('/',services.login);
router.get('/register',services.register);

//login register API with session and cookies
router.post('/api/users/signup',controller.signup);
router.post('/api/users/login',controller.login);
router.get('/api/users/logout',controller.logout);
// router.get('api/users/facultyprofile',controller.profileFaculty);

//API
 router.post('/api/users/create',controller.createStudent);
 router.get('/api/users/find', controller.find);
//  router.get('/api/users/find1', controller.find1);
 router.post('/api/users/Codefine', controller.codefine);
 router.get('/api/users/findRatios',controller.findRatios);
 router.post('/api/users/coRatio',controller.coRatio);
 router.post('/api/users/calculatePOs',controller.calculatePO);

///Search and show Api
router.get('/api/users/findPO', controller.findPovalues);

router.get('/api/users/search', controller.searchShow);

router.put('/api/users/:id',controller.updateStudent);

router.delete('/api/users/:id',controller.delete);


module.exports = router;
