/* set up the router */
const express = require('express');
const morgan = require('morgan');
const path = require("path");

const app = express();


app.use(express.static('public'));
/* import the pizza data */

// you'll need two routes:
app.get("/db/pizza", (req, res) => {
  res.render("pizzas/index", { pizzas: pizza });
})

//  - all pizza
//  - individual pizza
//  - BONUS: can you get individual pizza to work with the `flavorKey` property in the database? Maybe use some array methods... it would be convenient to be able to go to `/pizza/pepperoni` instead of `/pizza/0`.


/* export the router */