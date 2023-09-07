const axios = require('axios');

exports.homeRoutes = (req, res) => {

        res.render('index');
};

exports.dataShow=(req,res)=>{

    //make a get request to the api users
   axios.get("http://localhost:3000/api/users/find")
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


   axios.get("http://localhost:3000/api/users/find")
      .then(function(response){
        res.render('search',{
            userBB:response.data
        });
      })
      .catch(err=>{
        res.send(err);
      })

    
}

exports.defineCo=(req,res)=>{

  res.render('defineCo');
}


exports.coRatios = (req, res) => {
  axios
    .get("http://localhost:3000/api/users/findRatios")
    .then(function (response) {
      res.render('coratio', {
        coRatios: response.data, 
      });
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.poValues = (req, res) => {
  axios
    .get("http://localhost:3000/api/users/findPO")
    .then(function (response) {
      res.render('shoPo', {
        poValues: response.data, 
      });
    })
    .catch((err) => {
      res.send(err);
    });
};



exports.marksEntry = (req, res) => {
        res.render('marksEntry');
};


exports.login = (req, res) => {
      res.render('loginform');
};
exports.register = (req, res) => {
      res.render('signupFOrm');
};