const Home = require("../models/home");

exports.getAddHome = (req, res, next) => {
  res.render('addHome', {pageTitle: 'Add Home to airbnb'});
}

exports.postAddHome = (req, res, next) => {
  console.log('Home Registration successful for:', req.body, req.body.houseName);
 const home =  new Home(req.body.houseName, req.body.price, req.body.location, req.body.rating, req.body.photoUrl);
 home.save();

  res.render('homeAdded', {pageTitle: 'Home Added Successfully'});
}


exports.getHomes = (req, res, next) => {
  const registeredHomes = Home.fetchAll();
  console.log(registeredHomes);
  res.render('home', {registeredHomes: registeredHomes, pageTitle: 'airbnb Home'});
}
