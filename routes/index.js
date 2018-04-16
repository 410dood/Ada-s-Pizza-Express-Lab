/* setting up router */
const express = require('express');
const indexRoute = express.Router();


indexRoute.get('/', function(req, res) {
  res.render('index', {
  });

  });

    //       | fill in this object!
    //       V   what should it have?? Maybe run `npm jest` and find out :)

// app.get("/", function (req, res) {
//   res.render('index');
// });

// app.get('/pizzas/:id', (request, response) => {
//   var pizza = app.locals.pizzas[request.params.id];

//   response.render('pizza', { pizza: pizza });
// });

// app.get('/db/pizza/', function (req, res) {
//   res.send(req.params)
// })



module.exports = indexRoute;

