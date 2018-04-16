/* dependencies & app setup */
const express = require('express');
const path = require('path');
const logger = require('morgan');
const app = express();
const pizzadb = require('./db/pizza.js');
const index = require('./routes/index.js')

/* setting up port & listen */
const PORT = process.env.PORT || 3000;


app.listen(PORT, function() {
  console.log(`listening on port ${PORT}`);
});

/* set the view engine */
app.set('views', './views');
app.set('view engine', 'ejs');

/* error logger, static routes */
app.use(logger('dev'));
app.use('/static', express.static(path.join(__dirname, 'public')));
app.use(express.static('public'));


app.get("/pizza", function(req,res){
res.render('pizza/pizza-index',{pizzas: pizzadb});
});

app.get('/pizzas/:id', (request, response) => {
  var pizza = app.locals.pizzas[request.params.id];

  response.render('pizza', { pizza: pizza });
});

app.get('/db/pizza/', function (req, res) {
  res.send(req.params)
})

app.get('/', function (req, res) {
  res.send(pizzadb)
})
app.get("/db/pizza", (req, res) => {
  res.render("pizzas/index", { pizzas: pizza });
})


/* error handler */
app.get('*', function(req, res) {
  res.status(404).send({message: 'Oops! Not found.'});
});