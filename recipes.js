
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/recipeApp')

  .then(() => {
    console.log('Connected to Mongo!')
  }).catch(err => {
    console.error('Error connecting to mongo', err)
  });


  const Schema   = mongoose.Schema;
  const rSchema = new Schema({
    title:{type: String, required: true, unique:true},
    level: {type: String, enum:["Easy Peasy","Amateur Chef","UltraPro Chef"]},
    ingredients:{type: Array},
    cousine: {type: String, required: true},
    dishType: {type: String, enum:["Breakfast","Dish","Snack","Drink","Dessert","Other"]},
    image: {type: String, default:"https://images.media-allrecipes.com/images/75131.jpg."},
    duration:{type: Number, min:0},
    creator:{type: String},
    created:{type: Date, default:'2018-07-05'}
  })
  const data = require('./data.js')
  const Recipe = mongoose.model('Recipe', rSchema);

  Recipe.create({
    title: 'Hot Dog',
    level: 'Easy Peasy',
    ingredients: ['Hot dog, bread'],
    cousine: 'College',
    dishType: ['Snack'],
    image: '/images/hotdog.jpg',
    duration: 5,
    creator: 'Student',
    created:'2018-07-05'
  })
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log(err);
  });

Recipe.insertMany(data)
.then((response) => {
  res.forEach((Recipe) => {
    console.log(Recipe.title);
  })
  .catch((err) => {
    console.log(err);
  })
});



 
